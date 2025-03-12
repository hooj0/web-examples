/****************************************************************************
 *  JavaScript 对象继承
 *    - 你想让一个新类复用现有类的功能，你可以创建一个扩展现有类的类。这被称为经典继承。
 *      JavaScript 不使用经典继承。相反，它使用原型继承。
 *      在原型继承中，一个对象通过原型链接从另一个对象“继承”属性。
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

// ------------------------------------------------------------------
// 创建一个函数式对象，继承Person的属性和方法
// ------------------------------------------------------------------
const student = Object.create(Person.prototype);
student.name = "小红";
student.age = 28;
student.sex = "女";
student.sayHello = function () {
    console.log("hello, my name is " + this.name)
}

console.log(student.getAge());
student.sayHello();


// ------------------------------------------------------------------
// 创建一个Object对象，继承Person的属性和方法
// ------------------------------------------------------------------
const person = {
    name: "小红",
    age: 28,
    sex: "女",
    sayHello: function () {
        console.log("hello, my name is " + this.name)
    }
}

// 继承Person
// ----------------------------------------------------------------
const user = Object.create(person);
user.name = "小明";
// 自定义方法
user.lastname = "李";
user.getAge = function () {
    return this.age;
}

console.log("--------------------------------------")
user.sayHello();
console.log(user.getAge());
console.log(user.lastname);
console.log(user.sex);


const user2 = Object.create(person, {
    address: { value: "china" },
    nickname: { value: "Joe" },
    getNickname: {
        value: function () {
            console.log("hello, my nickname is " + this.nickname);
        }
    },
});

console.log("--------------------------------------")
user2.getNickname();
console.log(user2.address);
console.log(user2.name);
console.log(user2.sex);
user2.sayHello();

console.log(Object.getPrototypeOf(user2) === person);   // true, 继承自person
console.log(Object.getPrototypeOf(user2) === Person.prototype); // false
