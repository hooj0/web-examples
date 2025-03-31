/*******************************************************************************
 * Promise.allSettled()
 *     - 无论结果如何（成功或失败），等待所有 Promise 完成。
 *     - 行为：接收一个 Promise 实例数组作为参数。返回一个 Promise，
 *          这个 Promise 在所有的输入 Promises 都完成后才会兑现。
 *          它的兑现值是一个对象数组，每个对象都描述了相应的 Promise 的结果，
 *          包括状态（"fulfilled" 或 "rejected"）以及对应的值或错误原因。
 ******************************************************************************/
function createPromise(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`promise ${num}`);
            if (num === 2) {
                reject("error fail.");
            } else {
                resolve(num);
            }
        }, 1000);
    });
}

function run(...promises) {
    Promise.allSettled(promises).then((value) => {
        console.log("value: ", value);
    }).catch((reason) => {
        console.log(`reason: ${reason}`);
    });
}

// run(createPromise(1), createPromise(3), createPromise(5)); // 全部完成
run(createPromise(1), createPromise(2), createPromise(5), createPromise(4)); // 全部返回，一个失败
