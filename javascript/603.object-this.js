/****************************************************************************
 *  JavaScript this 关键字
 *    - this 关键字指向当前对象，指向函数调用者
 *    - prototype 和 函数对象 this 指向当前调用的对象
 *    - bind 方法创建新的函数，并改变函数中的 this 指向
 *    - call 和 apply 方法，间接设置 this 指向
 ****************************************************************************/
(function () {
    console.log(this);  // 指向函数 global object
})();


//----------------------------------------------------------------------------
// 在浏览器中运行时： 全局作用域中，this 指向全局对象（window）
//----------------------------------------------------------------------------
// console.log(this == window);


//----------------------------------------------------------------------------
// bind 方法创建新的函数，并改变函数中的 this 指向
//----------------------------------------------------------------------------
const person = {
    name: "小明",
    age: 18,
    sex: "男",
    sayHello: function () {
        console.log("hello, my name is " + this.name)
    },
};

// this 指向 person 对象
person.sayHello();  // hello, my name is 小明

const person2 = {
    name: "小红",
};

// this 指向 person2 对象
// 将绑定后的 sayHello 函数赋值给 sayHallo 变量，创建一个新的函数
const sayHallo = person.sayHello.bind(person2);
sayHallo();     // hello, my name is 小红
person.sayHello();  // hello, my name is 小明


//----------------------------------------------------------------------------
// 构造函数，this 指向当前对象 （注意：箭头函数不支持）
//----------------------------------------------------------------------------
function Person(name) {
    if (!new.target) {
        throw new Error("必须使用 new 创建实例");
    }
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log("hello, my name is " + this.name);
};

const person3 = new Person("小红");
person3.sayHello();

// console.log(Person("Leo").name);  // TypeError: Cannot read properties of undefined (reading 'name')
// console.log(Person("Leo").name);  // throw new Error("必须使用 new 创建实例");


//----------------------------------------------------------------------------
// Function 对象的 call 和 apply 方法，间接设置 this 指向
//----------------------------------------------------------------------------
function sayHello(name) {
    console.log("hello, my name is " + name + ", my age is " + this.age);
}

sayHello("小明");     // hello, my name is 小明, my age is undefined

const tom = {
    age: 18,
};

const jack = {
    age: 20,
};

sayHello.call(tom, "小明");   // hello, my name is 小明, my age is 18
sayHello.call(jack, "小红");  // hello, my name is 小红, my age is 20


