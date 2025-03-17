/*******************************************************************************
 * 类：JavaScript 类是对 原型继承 的语法糖。换句话说，ES6 类只是特殊的 函数。
 *    - 类的声明方式，使用 class 关键字
 *    - 类的构造函数，使用 constructor 关键字
 *    - 类的实例化，使用 new 关键字
 *    - 类的继承，使用 extends 关键字
 *    - 类的继承，使用 super 关键字
 *    - 类的私有属性，使用 # 关键字
 * 类和函数的区别：
 *    - 类声明不像函数声明那样是 提升 的，必须在代码执行前声明
 *    - 类内部的所有代码都会自动在严格模式下执行。您无法更改此行为
 *    - 类方法是 不可枚举的。如果您使用构造函数/原型模式，则必须使用 Object.defineProperty() 方法使属性不可枚举
 *    - 在没有 new 运算符的情况下调用类构造函数会导致错误
 *    - 类声明是 函数，所以类声明不能使用 arguments 变量
 *    - 类声明不能使用 yield 关键字
 ******************************************************************************/
class Person {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }

    getName() {
        return this.name;
    }
}

const person = new Person("Jack");
console.log(person);    // Person { name: 'Jack' }
console.log(typeof Person); // function
console.log(typeof person); // object

console.log(person instanceof Person);  // true
console.log(person instanceof Object);  // true

