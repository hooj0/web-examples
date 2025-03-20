/********************************************************************************
 *  Promise.race()
 *      - 用途：并行启动多个 Promise，但只获取第一个完成（无论是成功还是失败）的结果。
 *      - 行为：接收一个 Promise 实例数组作为参数。一旦其中一个 Promise 完成或拒绝，
 *          Promise.race 就会结束，并返回该 Promise 的结果或错误。
 ********************************************************************************/
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
    Promise.race(promises).then((value) => {
        console.log(`value: ${value}`);
    }).catch((reason) => {
        console.log(`reason: ${reason}`);
    });
}

// run(createPromise(1), createPromise(3), createPromise(5));    // value 1, 第一个成功 立即返回
run(createPromise(2), createPromise(3));    // reason error fail. 第一个失败了，立即返回