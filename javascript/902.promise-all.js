/*******************************************************************************
 * Promise.all 静态方法 聚合多个异步操作结果
 *     - Promise.all(iterable)
 *     - 参数：iterable 可迭代对象，包含多个 Promise 实例
 *     - 返回值：返回一个 Promise 实例，如果参数中没有 Promise 实例，则返回一个已经 fulfilled 的 Promise 实例
 *     - 描述：Promise.all 方法用于将多个 Promise 实例聚合为一个 Promise 实例，当所有 Promise 实例都 fulfilled 或 rejected 时，才返回一个 Promise 实例
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