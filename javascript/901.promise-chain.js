/*******************************************************************************
 * Promise Chain
 *     - 多个Promise 链
 ******************************************************************************/

// -----------------------------------------------------------------------------
// 链式调用，串行处理
// -----------------------------------------------------------------------------
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Math.random());
    }, 1000);
}).then((value) => {
    console.log(value);
    return value + 1;
}).then((value) => {
    console.log(value);
    return value * 100;
}).then((value) => {
    console.log(value);
    return value * 2;
});


// -----------------------------------------------------------------------------
// 并行处理多个业务
// -----------------------------------------------------------------------------
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3000);
});

promise.then((value) => {
    console.log(value);
});

promise.then((value) => {
    value = Math.random() + value;
    return value;
}).then((value) => {
    console.log("random value: ", value);
});

promise.then((value) => {
    console.log(`promise value: ${value}`);
});


// -----------------------------------------------------------------------------
// Promise 链 返回新的 Promise
// -----------------------------------------------------------------------------
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(-100);
    }, 1000);
}).then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value * 10);
        }, 1000);
    });
}).then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value * 100);
        });
    });
}).then((value) => {
    console.log(value);
});

// 改变上面代码写法
function createPromise(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num);
        }, 1000);
    });
}

createPromise(111).then((value) => {
    console.log(value);
    return createPromise(value * 10);
}).then((value) => {
    console.log(value);
    return createPromise(value * 100);
}).then((value) => {
    console.log(value);
});


// -----------------------------------------------------------------------------
// 模拟业务处理
// -----------------------------------------------------------------------------
function getUserInfo(userId) {
    return new Promise((resolve, reject) => {
        console.log("Get user info from database.", userId);
        setTimeout(() => {
            resolve({
                userId: userId,
                userName: "userName" + userId
            });
        }, 1000);
    });
}

function addressService(userInfo) {
    return new Promise((resolve, reject) => {
        console.log("Get address from service.", userInfo.userName);
        setTimeout(() => {
            resolve({
                userId: userInfo.userId,
                address: "address" + userInfo.userId
            });
        }, 1000);
    });
}

function gisService(addr) {
    return new Promise((resolve, reject) => {
        console.log("Get gis from service.", addr.address);
        setTimeout(() => {
            resolve({
                x: Math.random(),
                y: Math.random(),
                location: addr.address
            });
        }, 1000);
    });
}

getUserInfo(100023)
.then(addressService)
.then(gisService)
.then(console.log);