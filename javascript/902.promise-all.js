/*******************************************************************************
 * Promise.all
 *     - 用途：并行执行多个 Promise，并等待所有的 Promise 都成功完成。
 *     - 行为：接收一个 Promise 实例数组作为参数。如果所有 Promise 都成功完成，
 *          则返回一个包含每个 Promise 结果的新数组（按输入顺序）。
 *          如果有任何一个 Promise 被拒绝，则整个 Promise.all 调用会立即被拒绝，
 *          错误是第一个被拒绝的 Promise 的错误。
 *     - 特点：
 *         - 如果参数中没有 Promise 实例，则返回一个已经 fulfilled 的 Promise 实例
 *         - 如果参数中有一个 Promise 实例 fulfilled，则返回一个 already resolved 的 Promise 实例
 *         - 如果参数中有一个 Promise 实例 rejected，则返回一个 already rejected 的 Promise 实例
 *         - 如果参数中有一个 Promise 实例 pending，则返回一个 pending 的 Promise 实例
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
    Promise.all(promises).then((values) => {
        const totals = values.reduce((total, value) => {
            return total + value;
        });

        console.log(`values: ${values}`);
        console.log(`total: ${totals}`);
    }).catch((reason) => {
        console.log(`reason: ${reason}`);
    });
}

const promise1 = createPromise(1);
const promise3 = createPromise(3);
const promise4 = createPromise(4);

run(promise1, promise3, promise4);  // values: [1, 3, 4], total: 8
run(createPromise(1), createPromise(3), createPromise(2), createPromise(4));    // already rejected, reason: error fail.