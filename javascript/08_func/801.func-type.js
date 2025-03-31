/******************************************************************************
 * 函数
 *  - new.target 判断当前函数是否使用 new 运算符调用
 *  - apply 使用给定的 this 值和参数数组调用函数
 *  - call 使用给定的 this 值和参数调用函数
 *  - bind 方法创建一个新的函数实例，其 this 值绑定到您提供的对象
 *  - prototype 属性引用实际的函数对象
 *  - length 属性确定函数声明中指定的命名参数数量
 *  - prototype.constructor 属性引用函数对象
 *****************************************************************************/
function add(x, y) {
    console.log(new.target);
    console.log("hello, world");

    return x + y;
}

console.log(add.length);    // 2, 函数的参数个数
console.log(add.prototype); // {}

add(1, 3); // undefined
new add(2, 4); // [Function: add]


// ----------------------------------------------------------------------------
// apply 方法
// apply 方法接受两个参数，第一个参数是 this 的值，第二个参数是数组
// ----------------------------------------------------------------------------
const cat = {
    type: "Cat",
    sound: "Meow",
};
const dog = {
    type: "Dog",
    sound: "Woof"
};

const say = function (message) {
    console.log(message);
    console.log(`${this.type} says ${this.sound}`);
};

say.apply(cat, ["cat"]);    // cat
say.apply(dog, ["dog"]);    // dog

// ----------------------------------------------------------------------------
// call 方法
// call 方法接受两个参数，第一个参数是 this 的值，第二个参数是参数列表
// ----------------------------------------------------------------------------
say.call(cat, "cat");
say.call(dog, "dog");


// ----------------------------------------------------------------------------
// bind 方法
// 创建一个新的函数实例，其 this 值绑定到您提供的对象
// ----------------------------------------------------------------------------
const memi = say.bind({ type: "Memi", sound: "mimi..."});
memi("miao...");
