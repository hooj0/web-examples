/********************************************************************************
 * Promise 错误处理
 *      - 在 Promise 内部，catch() 方法将捕获由 throw 语句和 reject() 引起的错误。
 *      - 如果发生错误，并且您没有 catch() 方法，JavaScript 引擎将发出运行时错误并停止程序。
 ********************************************************************************/
function query(sql) {
    if (sql != "insert" && sql != "delete" && sql != "update" && sql != "select") {
        throw new Error("不支持的 sql 语句");
    }

    return new Promise((resolve, reject) => {
        if (sql == "insert") {
            throw new Error("错误的 sql 语句");
        }

        if (sql == "delete") {
            reject("错误的 DELETE SQL 语句");
        }

        resolve(`执行 sql 语句：${sql}`);
    });
}


// ------------------------------------------------------------------------------
// 捕获错误，处理Promise外面的异常错误
// ------------------------------------------------------------------------------
try {
    query("insert_x").then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
} catch (error) {
    console.log("发生异常", error);
}


// ------------------------------------------------------------------------------
// 捕获错误，处理Promise里面的异常错误
// ------------------------------------------------------------------------------
query("insert").then((result) => {
    console.log(result);
}).catch((err) => {
    console.log("Promise 内部错误", err);
});


// ------------------------------------------------------------------------------
// 捕获错误，处理Promise reject 拒绝的异常错误
// ------------------------------------------------------------------------------
query("delete").then((result) => {
    console.log(result);
}).catch((err) => {
    console.log("Promise 内部错误", err);
});