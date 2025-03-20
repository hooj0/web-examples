/********************************************************************************
 *  Promise.any()
 *      - 用途：并行执行多个 Promise，只要有一个成功就立即返回。
 *      - 行为：接收一个 Promise 实例数组作为参数。它返回第一个成功的 Promise 的结果。
 *          如果所有的 Promises 都失败了，则返回一个包含所有拒绝原因的 AggregateError。
 *      - 如果可迭代对象中的 Promise 之一已完成，则 Promise.any() 将返回一个单个 Promise，
 *          该 Promise 解析为一个值，该值是已完成 Promise 的结果。
 * 使用场景：
 *      - 当加载多个cdn的资源，并且只需要一个成功的结果，就可以使用Promise.any()
 *          如果都失败的情况，可以加载本地资源
 *******************************************************************************/
function createPromise(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`promise ${num}`);
            if (num % 2 == 0) {
                reject("error fail.");
            } else {
                resolve(num);
            }
        }, 1000);
    });
}

function run(...promises) {
    Promise.any(promises).then((value) => {
        console.log(`value: ${value}`);
    }).catch((reason) => {
        console.log(`reason: ${reason}`, reason.errors);
    });
}

// run(createPromise(1), createPromise(3), createPromise(5));  // 返回任意一个成功的Promise
// run(createPromise(2), createPromise(2), createPromise(5));  // 返回任意一个成功的Promise

run(createPromise(2), createPromise(4));  // 返回所有失败的Promise，reason: AggregateError: All promises were rejected [ 'error fail.', 'error fail.' ]