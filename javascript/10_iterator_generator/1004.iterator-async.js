/*******************************************************************************
 * 异步迭代器 ES2018 引入了异步迭代器，异步迭代器与同步迭代器不同，异步迭代器返回的是一个 Promise 对象。
 *      1. 异步迭代器必须实现 next 方法
 *      2. next 方法返回一个 Promise 对象
 *      3. next 方法的返回值是一个 Promise 对象，该 Promise 对象的值是一个 { value, done } 对象
 *      4. 如果 next 方法返回的 Promise 对象被 reject，则迭代器结束
 *      5. 如果 next 方法返回的 Promise 对象被 resolve，则迭代器继续
 ******************************************************************************/
class AsyncRange {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    [Symbol.asyncIterator]() {
        return {
            next: async () => {
                if (this.start <= this.end) {
                    let result = {
                        value: this.start,
                        done: false
                    }

                    this.start++;
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve(result);
                        }, 1000);
                    });
                }

                let result =  { done: true, value: undefined };
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(result);
                    }, 1000);
                });
            }
        }
    }
}


// for await...of 循环，异步迭代器需要 await调用
(async () => {
    for await (let value of new AsyncRange(2, 5)) {
        console.log(value);
    }
})();