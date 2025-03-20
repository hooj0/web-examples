/********************************************************************************
 * Promise finally() 方法返回一个 Promise，并且处理 rejected 状态的 Promise。
 ********************************************************************************/
class Connection {
    constructor(url) {
        this.url = url;
    }

    static connect(url) {
        return new Promise((resolve, reject) => {
            if (url == "localhost") {
                resolve(new Connection(url));
            } else {
                reject('连接失败');
            }
        });
    }

    disconnect() {
        console.log('断开连接');
    }

    execute(sql) {
        if (sql != "insert" && sql != "delete" && sql != "update" && sql != "select") {
            throw new Error("不支持的 SQL 语句");
        }
        console.log(`执行 SQL 语句：${sql}`);
        return this;
    }
}

let connection;

Connection.connect("localhost")
.then((conn) => {
    connection = conn;
    return conn.execute("select");
}).then((conn) => {
    return conn.execute("insert");
}).then((conn) => {
    return conn.execute("delete");
}).then((conn) => {
    return conn.execute("update_x");
}).catch((err) => {
    console.log("发生错误", err);
})
.finally(() => {
    if (connection) {
        connection.disconnect();
    }
});