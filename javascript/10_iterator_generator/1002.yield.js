/******************************************************************************
 * Yield 语句关键字
 *      - Yield 关键字允许您暂停和恢复 生成器 函数 (function*)
 *****************************************************************************/
function* foo() {
    yield 1;
    yield 2;
    yield 3;
}

const f = foo();
console.log(f.next());  // { value: 1, done: false }


// ----------------------------------------------------------------------------
// 不带返回值的Yield 语句
// yield 关键字不带任何参数，它将返回 undefined。
// ----------------------------------------------------------------------------
function* bar() {
    yield;
}

const b = bar();
console.log(b.next());  // { value: undefined, done: false }


// ----------------------------------------------------------------------------
// 传递参数的 next 方法
// ----------------------------------------------------------------------------
function* next_with_param() {
    let data = yield;
    console.log(`data = ${data}`)
}

const n = next_with_param();
console.log("------------------")
console.log(n.next());  // { value: undefined, done: false }
console.log(n.next('hello')); // data = hello; { value: undefined, done: true }


// ----------------------------------------------------------------------------
// 数组中使用yield 语句，可见 yield 语句可以返回一个数组，并且等待yield都执行完毕才返回
// ----------------------------------------------------------------------------
function* array_yield() {
    let result = [yield, yield];
    console.log(`result = ${result}`);
}

const a = array_yield();
console.log("------------------")
console.log(a.next());  // { value: undefined, done: false }
console.log(a.next(1)); // { value: undefined, done: false }
console.log(a.next(2)); // result = 1,2; { value: undefined, done: true }


// ----------------------------------------------------------------------------
// yield 语句返回数组
// ----------------------------------------------------------------------------
function* return_array() {
    yield 1;
    yield [1, 10, 100];
}

const r = return_array();
console.log("------------------");
console.log(r.next());  // { value: 1, done: false }
console.log(r.next());  // { value: [ 1, 10, 100 ], done: false }
console.log(r.next());  // { value: undefined, done: true }


// ----------------------------------------------------------------------------
// yield 语句返回数组元素（展开）
// yield* 表达式用于委托给另一个可迭代对象或生成器
// ----------------------------------------------------------------------------
function* return_array_element() {
    yield 1;
    yield* [3, 10, 100];
}

const r2 = return_array_element();
console.log("------------------");
console.log(r2.next());  // { value: 1, done: false }
console.log(r2.next());  // { value: 3, done: false }
console.log(r2.next());  // { value: 10, done: false }
console.log(r2.next());  // { value: 100, done: false }
console.log(r2.next());  // { value: undefined, done: true }

// ----------------------------------------------------------------------------
// yield 语句可以返回一个对象，并且等待yield都执行完毕才返回
// ----------------------------------------------------------------------------
function* object_yield() {
    let result = {
        name: yield,
        age: yield
    };
    console.log("result = ", result);
}

const o = object_yield();
console.log("------------------")
console.log(o.next());
console.log(o.next("jack"));
console.log(o.next(22));