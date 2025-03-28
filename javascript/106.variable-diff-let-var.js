/******************************************************************************
 * let 和 var 的区别
 *      - let 和 var 的作用域不同
 *      - let 声明的变量只在 let 所在的块中可用，var 声明的变量可以在所在块中任何地方使用
 *****************************************************************************/

// -----------------------------------------------------------------------------
// 变量作用域
// -----------------------------------------------------------------------------
// 全局变量
var count;

function add() {
    // 局部变量
    var count = 10
}

console.log(count); // undefined

add();
console.log(count); // undefined

// 全局变量
for (var i = 100; i < 110; i++) {
    console.log(i);
}
console.log("done: ", i);   // done: 110, i 是全局变量


for (let j = 200; j < 210; j++) {
    console.log(j);
}
// console.log("done: ", j);   // 报错, j 是局部变量


// -----------------------------------------------------------------------------
// 全局变量
// -----------------------------------------------------------------------------
var counter = 1;
// console.log(window.counter); // 0

let index = 1;
// console.log(window.index);  // undefined


// -----------------------------------------------------------------------------
// 重新声明变量
// -----------------------------------------------------------------------------
var baz = 1;
var baz;
console.log(baz);   // 1

var baz = 2;
console.log(baz);   // 2


// -----------------------------------------------------------------------------
// 暂时性死区
// -----------------------------------------------------------------------------
function foo() {
    console.log(a);
}

var a = 111;
foo();  // 111

function bar() {
    console.log(b);
}

let b = 222;
bar();  // 222