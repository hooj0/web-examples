/***
 * 简单数据类型
 * JavaScript 具有原始数据类型
 *  - null
 *  - undefined
 *  - boolean
 *  - number
 *  - string
 *  - symbol – 来自 ES2015
 *  - bigint – 来自 ES2020
 *
 *  - object – 来自 ES5
 */
let name = 'John', age = 25, isAdmin = false;
console.log(name, age, isAdmin);    // John 25 false
console.log(typeof (name), typeof (age), typeof (isAdmin));     // string number boolean


// --------------------------------------------------------------------
// null 类型
// --------------------------------------------------------------------
let address = null;
console.log(address, typeof address);   // null object

address = "china gz";
console.log(address, typeof address);   // china gz string


// --------------------------------------------------------------------
// undefined 类型
// --------------------------------------------------------------------
let passwd = undefined;
console.log(passwd, typeof passwd);     // undefined undefined

// 未定义变量 undefined
console.log(typeof(size));      // undefined

console.log(null == undefined);     // true


// --------------------------------------------------------------------
// number 类型： number 类型来表示整数和浮点数
// --------------------------------------------------------------------
let num = 123;
console.log(num, typeof num);     // 123 number

let num2 = 12.34;
console.log(num2, typeof num2);   // 12.34 number

let price = 10.00;
console.log(price); // 10 省略了小数点

console.log(Number.MAX_VALUE, Number.MIN_VALUE);    // 1.7976931348623157e+308 5e-324
// 无穷大和无穷小
console.log(Number.MAX_VALUE * 2);  // Infinity
console.log(-Number.MAX_VALUE * 2); // -Infinity


// --------------------------------------------------------------------
// NaN 类型： Not a Number（非数字）。它是一个特殊数字值，表示无效的数字
// --------------------------------------------------------------------
console.log('a' / 2);   // NaN

// NaN 不等于任何值，包括自身
console.log(NaN === NaN);   // false

// 与 NaN 的任何运算都会返回 NaN
console.log(NaN / 2);   // NaN


// --------------------------------------------------------------------
// string 类型： JavaScript 字符串是不可变的，这意味着它们在创建后无法修改
// --------------------------------------------------------------------
let str = 'Hello';
let str2 = 'World';
console.log(str, str2);     // Hello World

str2 = 'World!';
console.log(str, str2);     // Hello World!

// 无法修改字符串数据
str2[0] = 'w';
console.log(str, str2);     // Hello World!


// --------------------------------------------------------------------
// symbol 类型: ES6 中引入了一种新的原始类型，与其他原始类型不同，symbol 类型没有文字形式。
// --------------------------------------------------------------------
let sym = Symbol();
console.log(typeof sym);    // symbol
console.log(sym);           // Symbol()

console.log(Symbol('foo') === Symbol('foo'));   // false


// --------------------------------------------------------------------
// bigint 类型: bigint 类型表示大于 253 - 1 的整数。要形成 bigint 文字数字，在数字末尾附加字母 n
// --------------------------------------------------------------------
let bigint = 1234567890123456789012345678901234567890n;
console.log(bigint + 1n);
console.log(typeof bigint);     // bigint