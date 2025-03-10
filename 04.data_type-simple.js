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
// number 类型
// --------------------------------------------------------------------
let num = 123;
console.log(num, typeof num);     // 123 number