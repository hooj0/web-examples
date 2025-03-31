/*******************************************************************************
 * 闭包：闭包是一个 函数，它从其内部作用域引用外部作用域中的变量。闭包在其内部作用域中保留外部作用域。
 *    - 闭包是函数和函数外部作用域的引用的组合。
 *    - 闭包可以访问外部作用域中的变量，即使外部作用域已经结束。
 ******************************************************************************/
let name = "小明";

function say() {
    let message = "hello, my name is " + name;
    console.log(message);
}

say(); // hello, my name is 小明


// -----------------------------------------------------------------------------
// 闭包
// -----------------------------------------------------------------------------
function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

let innerFunc = outer(); // outer() 返回 inner()
innerFunc(); // 1


function sayHello(name) {
    return function(message) {
        console.log(message + ", " + name);
    }
}

let sayHi = sayHello("小明");
let sayOh = sayHello("小红");
sayHi("hello");    // hello, 小明
sayOh("hello");    // hello, 小红


// -----------------------------------------------------------------------------
// 闭包应用：函数防抖/节流
// -----------------------------------------------------------------------------
function debounce(fn, delay) {
    let timer = null;

    return function() {
        let context = this;
        let args = arguments;

        clearTimeout(timer);
        timer = setTimeout(function() {
            fn.apply(context, args);
        }, delay);
    }
}

function search() {
    console.log("searching...");
}

let debounceSearch = debounce(search, 1000);

debounceSearch();
debounceSearch();
debounceSearch();
// 以上3次调用，只会执行最后一次的搜索。


// -----------------------------------------------------------------------------
// 循环中闭包
// -----------------------------------------------------------------------------
// 不能正确输出 0, 1, 2
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log("index " + i + " " + new Date());
    }, i * 1000);
}

// 通过闭包 解决
for (var i = 0; i < 3; i++) {
    (function (i) {
        setTimeout(function () {
            console.log("index " + i + " " + new Date());
        }, i * 1000);
    })(i);
}

// 通过变量 let i 解决
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log("index " + i + " " + new Date());
    }, i * 1000);
}