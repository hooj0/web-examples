/******************************************************************************
 * Promise with resolver 返回以下对象：
 *      - promise: 一个新的 Promise 对象
 *      - resolve: 用于解决 Promise 的函数
 *      - reject: 用于拒绝 Promise 的函数
 *****************************************************************************/
let { promise, resolve, reject } = Promise.withResolvers();

Math.random() > 0.5 ? resolve("Success") : reject("Failure");