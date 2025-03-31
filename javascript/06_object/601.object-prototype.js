/****************************************************************************
 *  JavaScript 对象原型 —— object prototype
 *    - 在 JavaScript 中，对象可以通过原型继承彼此的功能。每个对象都有一个名为prototype的属性。
 *    - 由于prototype本身也是另一个对象，因此prototype也有自己的prototype。
 *      这会创建一个称为原型链的东西。当一个原型的prototype属性为null时，原型链结束。
 ****************************************************************************/
function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;

    this.sayHello = function () {
        console.log("hello, my name is " + this.name)
    }
}

Person.prototype.getAge = function () {
    return this.age;
}

// 创建多个对象
let person1 = new Person("小明", 12, "男");
let person2 = new Person("小明", 18, "男");

console.log(person1.getAge());
console.log(person2.getAge());

// -----------------------------------------------------------------------
// class 中的原型
// -----------------------------------------------------------------------
class User {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    sayHello() {
        return "hello, my name is " + this.name;
    }
}

const p1 = new User("小明", 18, "男");
const p2 = new User("Jack", 28, "女")

console.log(p1.sayHello());
console.log(p2.sayHello());