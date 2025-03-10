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