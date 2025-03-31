/*******************************************************************************
 * 异步生成器
 *   - 异步生成器类似于普通生成器，但有以下区别
 *      async 关键字放在 function 关键字之前
 *      yield 返回一个 Promise，而不是一个值， Promise 通常是异步操作的包装器
 * 使用场景：
 *   - 当访问数据流并希望报告进度（例如使用进度条）时，异步生成器非常有用。
 ******************************************************************************/
async function* asyncGenerator() {
    yield Promise.resolve(1);
    yield Promise.resolve(2);
    yield Promise.resolve(3);
}

(async () => {
    for await (const num of asyncGenerator()) {
        console.log(num);
    }
})();


async function* asyncGenerator2(start, end) {
    for (let i = start; i <= end; i++) {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(i);
            }, 1000);
        });
    }
}

(async () => {
    for await (const num of asyncGenerator2(1, 3)) {
        console.log(num);
    }
})();