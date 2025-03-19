/******************************************************************************
 * 箭头函数
 *    - 箭头函数没有 this，this 指向外部函数的 this
 *    - 箭头函数没有 arguments，arguments 指向外部函数的 arguments
 *    - 箭头函数没有 this、arguments、super、new.target、prototype
 *    - 箭头函数不能通过 new 创建对象
 * 箭头函数适用于  回调 和 闭包，因为箭头函数的语法更简洁
 *    - 使用 (...args) => expression; 定义箭头函数
 *    - 使用 (...args) => { statements } 定义具有多个语句的箭头函数
 *    - 箭头函数没有对 this 或 super 的绑定
 *    - 箭头函数没有 arguments 对象、new.target 关键字和 prototype 属性
 ******************************************************************************/
const add = (a, b) => a + b;
console.log(add(1, 2));

const add2 = (a, b) => {
    return a + b;
};
console.log(add2(1, 2));
console.log(typeof add);    // function
console.log(add instanceof Function); // true

// 箭头函数排序
let nums = [1, 2, 3, 4, 5];
nums.sort((a, b) => -a - b);
console.log(nums); // [5, 4, 3, 2, 1]

// 单个参数的箭头函数
let data = nums.map(item => item * 2);
console.log(data);  // [ 10, 8, 6, 4, 2 ]

// 无参数的箭头函数
let out = () => console.log("hi");
out();  // hi

// 返回对象
let foo = () => ({ name: "zhangsan" });
console.log(foo()); // { name: 'zhangsan' }


// ----------------------------------------------------------------------------
// 箭头函数的 this 指向外部函数的 this
// ----------------------------------------------------------------------------
function Car() {
    this.speed = 0;

    this.speedUp = function (speed) {
        this.speed = speed;
        setTimeout(function () {
            // this.speed 为 undefined。原因是 匿名函数 的 this 覆盖了 speedUp() 方法的 this
            console.log(typeof this, this.speed);   // object undefined
        }, 1000);
    };
}

new Car().speedUp(100);


function Car2() {
    this.speed = 0;

    this.speedUp = function (speed) {
        this.speed = speed;
        // 在外部声明 this
        let _this = this;
        setTimeout(function () {
            console.log(typeof _this, _this.speed);   // object 100
        }, 1000);
    };
}

new Car2().speedUp(100);


function Car3() {
    this.speed = 0;

    this.speedUp = function (speed) {
        this.speed = speed;
        setTimeout(() => {
            // this 指向外部函数 function 的this
            console.log(typeof this, this.speed);   // object 100
        }, 1000);
    };
}

new Car3().speedUp(100);


// ----------------------------------------------------------------------------
// 箭头函数的 arguments 指向外部函数的 arguments
// ----------------------------------------------------------------------------
function show() {
    return x => {
        // arguments 指向外部函数 show() 的 arguments
        console.log(arguments);  // [Arguments] { '0': 1, '1': 2, '2': 3 }
        console.log(x);          // 22

        console.log(new.target);    // undefined
    };
}


const display = show(1, 2, 3);
display(22);


// ----------------------------------------------------------------------------
// 箭头函数没有 super、new.target、prototype
// ----------------------------------------------------------------------------
console.log(show.hasOwnProperty("prototype"));  // true
console.log(add.hasOwnProperty("prototype"));   // false