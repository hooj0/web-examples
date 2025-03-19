/******************************************************************************
 * Promise 同步异步操作
 *     - Promise 对象代表一个异步操作，有三种状态：
 *          pending（进行中/等待中）、fulfilled（已成功）和 rejected（已失败/已拒绝）。
 *     - Promise 对象用于解决回调地狱问题，回调地狱是嵌套的回调函数嵌套 lead 到回调函数嵌套过深，导致代码可读性差，
 *          可维护性差，可扩展性差
 *     - Promise 对象是一个构造函数，用来生成 Promise 实例。
 * Promise 对象的构造函数接受一个函数作为参数，该函数的两个参数分别是 resolve 和 reject。
 *     - resolve 函数用于将 Promise 对象的状态从 pending 变为 fulfilled，即成功；
 *     - reject 函数用于将 Promise 对象的状态从 pending 变为 rejected，即失败。
 *     - Promise 对象的 then 方法用于指定成功和失败的回调函数，then 方法返回一个 Promise 对象，
 *          then 方法的返回值是一个新的 Promise 对象，新的 Promise 对象的状态由回调函数的返回值决定。
 *     - Promise 对象的 catch 方法用于指定失败的回调函数，catch 方法返回一个 Promise 对象，
 ******************************************************************************/
function onSuccess(value) {
    console.log('onSuccess', value);
}
function onFail(value) {
    console.log('onFail', value);
}
function onException(error) {
    console.log('onException', error);
}

const success = false;
const promise = new Promise((resolve, reject) => {
    console.log('promise');
    if (success) {
        // 模拟异步操作, 异步操作成功后调用 resolve 函数, 将 Promise 对象的状态从 pending 变为 fulfilled，即成功。
        resolve('success');
    } else {
        // 模拟异步操作, 异步操作失败后调用 reject 函数, 将 Promise 对象的状态从 pending 变为 rejected，即失败。
        reject('fail');
    }
});

// then 方法用于指定成功和失败的回调函数，then 方法返回一个 Promise 对象，then 方法的返回值是一个新的 Promise 对象，
promise.then(onSuccess, onFail);
// catch 方法用于指定失败的回调函数，catch 方法返回一个 Promise 对象，
let promise1 = promise.catch(onException);
// finally 方法用于指定 finally 的回调函数，finally 方法返回一个 Promise 对象，
promise1.finally(() => {
    console.log('finally');
});

