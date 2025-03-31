/******************************************************************************
 * Promise 异步和等待
 *      - await 关键字在 async 函数中，表示等待 Promise 对象 resolve 后再执行后续代码
 *      - await 关键字只能出现在 async 函数中，并且只能用于 Promise 对象
 ******************************************************************************/
function findUser(id, callback) {
    console.log(`find user info ${id}`);

    setTimeout(() => {
        callback({ id, name: 'zhangsan'});
    }, 1000);
}

function checkUser(user, callback) {
    console.log(`check user info ${user.id}`);

    setTimeout(() => {
        callback(['a@a.com', 'b@b.com']);
    }, 2000);
}

function updateEmail(email, callback) {
    console.log(`update user info ${email}`);

    setTimeout(() => {
        callback(email);
    }, 1000 * 3);
}

/*findUser(-100001, (user) => {
    checkUser(user, (email) => {
        updateEmail(email, (data) => {
            console.log(data);
        });
    });
});*/


// ----------------------------------------------------------------------------
// Promise 解决回调地狱
// ----------------------------------------------------------------------------
function find(id) {
    return new Promise((resolve, reject) => {
        console.log(`find user info ${id}`);

        setTimeout(() => {
            resolve({ id, name: 'zhangsan'});
        }, 1000);
    });
}

function check(user) {
    return new Promise((resolve, reject) => {
        console.log(`check user info ${user.id}`);

        setTimeout(() => {
            resolve({...user, email: ['a@a.com', 'b@b.com']});
        }, 1000);
    });
}

function update(user) {
    return new Promise((resolve, reject) => {
        console.log(`update user info ${user.id}, ${user.email}`);

        setTimeout(() => {
            resolve(user.email);
        }, 1000);
    });
}


// find(100001).then(check).then(update).then(console.log);


// ----------------------------------------------------------------------------
// async/await 解决回调地狱，等待Promise对象 resolve 后再执行后续代码
// ----------------------------------------------------------------------------
async function updateEmailAsync() {
    const user = await find(200001);
    const email = await check(user);
    const data = await update(email);

    console.log(data);
}

updateEmailAsync().finally(console.log);


// ----------------------------------------------------------------------------
// async 定义一个异步函数，默认返回一个 Promise 对象
// ----------------------------------------------------------------------------
async function sayHello() {
    return 'hello';
}

sayHello().then(console.log);

// 显示的返回Promise 对象
async function sayHallo() {
    return Promise.resolve("hallo")
}
sayHallo().then(console.log);

const sayYeah = async () => "yeah."
const sayHi = async () => {
    return 'hi';
}
const sayOh = async function () {
    return 'oh';
}


// ----------------------------------------------------------------------------
// async 函数的错误处理
// ----------------------------------------------------------------------------
async function fail() {
    throw new Error('fail 1');
}

async function failError() {
    await Promise.reject(new Error('fail 2'));
}

// 两者效果一致，都会捕捉到错误
fail().catch(console.log);
failError().catch(console.log);

// 捕获一个或多个异步函数的错误
async function failAsync() {
    try {
        await fail()
        await failError()
    } catch (e) {
        console.log(e);
    }
}

failAsync();