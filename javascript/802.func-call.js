/******************************************************************************
 * 函数 call 方法：
 *   - call 方法，调用函数，并改变函数中的 this 指向
 *   - call 方法，第一个参数为 this 指向，后面的参数为函数参数
 *   - call 方法，第一个参数为 null，表示 this 指向全局对象
 *   - call 方法，第一个参数为 undefined，表示 this 指向 undefined
 *   - call 方法，第一个参数为 Symbol，表示 this 指向 Symbol
 *
 * 语法：
 *   func.call(thisArg, arg1, arg2, ...)
 *   func.call(thisArg, ...args)
 *   func.call(thisArg, [arg1, arg2, ...])
 *
 * call() 方法使用参数 (arg1, arg2, …) 调用函数 func，并将 this 设置为函数内部的 thisArg 对象
 *  - thisArg 是 this 对象在函数 func 内部引用的对象
 *  - arg1, arg2, .. 是传递到 func 的函数参数
 *  - call() 方法返回调用 func() 的结果
 *****************************************************************************/
function add(x, y) {
    return x + y;
}

console.log(add(1, 2)); // 3

// 默认情况下，函数内部的 this 设置为 全局对象，即 Web 浏览器中的 window 和 Node.js 中的 global
console.log(add.call(this, 1, 2)); // 3
console.log(this);

// this 和 undefined 执行当前全局对象 this
console.log(add.call(undefined, 1, 2)); // 3
console.log(add.call(null, 1, 2));  // 3


// ----------------------------------------------------------------------------
// this 的指向
// ----------------------------------------------------------------------------
let message = "javascript";
let param = {
    message: "hello world",
};

function say(user) {
    console.log(`${user} say: ${this.message}`);
}

say.call(param, "Jack");    // Jack say: hello world
say.call(this, "Tom");      // Tom say: javascript, this 指向全局对象


// ----------------------------------------------------------------------------
// call 方法 为对象链接构造函数
// ----------------------------------------------------------------------------
function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Student(name, age, grade) {
    Person.call(this, name, age);
    this.grade = grade;
}

const student = new Student("Jack", 18, 1);
console.log(student); // Student { name: 'Jack', age: 18, grade: 1 }


// ----------------------------------------------------------------------------
// call 方法 调用原生方法
// ----------------------------------------------------------------------------\
function isOdd(num) {
    return num % 2 === 1;
}

function filterNumber(...args) {
    return Array.prototype.filter.call(args, isOdd);
}

console.log(filterNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));   // [ 1, 3, 5, 7, 9 ]