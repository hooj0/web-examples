/*******************************************************************************
 * Exception Throw
 *      - Throw an exception
 ******************************************************************************/
function add(x, y) {
    if (typeof x !== 'number') {
        throw new TypeError('The first argument must be a number');
    }

    if (typeof y !== 'number') {
        // 抛出错误信息，包含错误类型
        throw new TypeError('The second argument must be a number');
    }

    if (x < 0 || y < 0) {
        // 抛出错误信息
        throw 'The arguments must be positive';
    }

    return x + y;
}

try {
    console.log(add(-1, 2));
} catch (e) {
    console.log(e); // The arguments must be positive
    console.log(e.name, e.message); // undefined undefined
}

try {
    console.log(add("1", 2));
} catch (e) {
    console.log(e.name, e.message); // TypeError The first argument must be a number
}


// -----------------------------------------------------------------------------
// 自定义错误类型
// -----------------------------------------------------------------------------
class MyError extends Error {
    constructor(message) {
        super(`my error: ${message}`);
        this.name = 'MyError';
    }
}

function add2(x, y) {
    if (typeof x !== 'number') {
        throw new MyError('The first argument must be a number');
    }

    if (typeof y !== 'number') {
        // 抛出错误信息，包含错误类型
        throw new MyError('The second argument must be)');
    }
    return x + y;
}

try {
    console.log(add2("1", 2));
} catch (e) {
    console.log(e.name, e.message); // TypeError The first argument must be a number
}


// -----------------------------------------------------------------------------
// 不处理异常
// -----------------------------------------------------------------------------
try {
    console.log(add2("1", 2));
} catch {
    console.log('error');
}