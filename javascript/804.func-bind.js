/*******************************************************************************
 * bind 方法
 *   - 创建一个新函数，这个新函数的作用域是 传入的第一个参数
 *   - 当这个新函数被调用时，它的 this 值会被指定为 obj
 *   - arguments 是一个类数组对象，这个对象包含了调用 bind 方法时传入的参数
 *   - 如果 bind 方法被调用时，提供了参数，那么调用时传入的参数会被添加到绑定函数的参数前
 * bind 语法：
 *   - bind(thisArg, [arg1], [arg2], [arg3], ...)
 *   - thisArg：绑定函数的 this 值
 *   - arg1, arg2, arg3, ...：绑定函数的参数
 *   - 返回一个函数
 ******************************************************************************/
const person = {
    name: 'John',
    sayName: function () {
        console.log(this.name);
    }
};

person.sayName();   // John
setTimeout(person.sayName, 1);   // undefined, this 丢失

const fn = person.sayName.bind(person);
setTimeout(fn, 1);   // John


// ------------------------------------------------------------------------------
// 方法借用
// ------------------------------------------------------------------------------
const user = {
    name: "Jack",
    addr: "china",
    show: function (message) {
        console.log("hello, my name is " + this.name + message);
    },
    display: function (message) {
        console.log("hi, my addr is " + this.addr + message);
    },
};

const tom = {
    name: "Tom",
    addr: "america",
};

const show = user.show.bind(tom, "haha..");
show(); // hello, my name is Tomhaha..
