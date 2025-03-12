/****************************************************************************
 *  JavaScript 对象基础
 ****************************************************************************/
let person = {
    name: "小明",
    age: 18,
    sex: "男",
    sayHello: function () {
        console.log("hello, my name is " + this.name)
    },
    // ES6 语法，函数简写
    getAge() {
        return this.age;
    }
};

console.log(person);
person.sayHello();  // hello, my name is 小明
console.log(person.getAge());  // 18


// --------------------------------------------------------------------------
// 构造函数，通过 new 可以多次创建对象
// --------------------------------------------------------------------------
function Person(name, age, sex) {
    // 在没有 new 的情况下，new.target 为 undefined
    console.log("Person constructor", new.target);
    if (new.target === undefined) {
        throw new Error("必须使用 new 创建实例");
        
        // 递归调用，创建实例并返回进行容错
        // return new Person(name, age, sex);
    }

    this.name = name;
    this.age = age;
    this.sex = sex;

    this.sayHello = function () {
        console.log("hello, my name is " + this.name)
    }
}

// 创建多个对象
let person1 = new Person("小明", 18, "男");
let person2 = new Person("小明", 18, "男");
console.log(person1);
person1.sayHello(); // hello, my name is 小明

// 没有使用 new 创建实例，会报错
// Person("小明", 18, "男");