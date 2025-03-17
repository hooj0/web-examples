/********************************************************************************
 * 类表达式：类表达式在 class 关键字之后不需要标识符
 *      - 类表达式的函数名是匿名的，不能通过类表达式的函数名访问类
 *      - 类表达式不是 提升 的。不能在定义类表达式之前创建类的实例
 ********************************************************************************/
const Person = class {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`hello, my name is ${this.name}`);
  }
};

const person = new Person("小红");
person.sayHello();  // hello, my name is 小红
console.log(person instanceof Person);  // true
console.log(typeof Person); // function


// ------------------------------------------------------------------------------
// 将类作为参数进行创建实例
// ------------------------------------------------------------------------------
function factory(clazz) {
    return new clazz();
}

const user1 = factory(class {
    constructor() {
        this.name = "小红";
    }
    sayHello() {
        console.log(`hello, my name is ${this.name}`);
    }
});

const user2 = factory(class {
    constructor() {
        this.name = "小明";
    }
    sayHello() {
        console.log(`hello, my name is ${this.name}`);
    }
});

user1.sayHello();   // hello, my name is 小红
user2.sayHello();   // hello, my name is 小明


// ------------------------------------------------------------------------------
// 单例模式，相当于匿名函数立即执行
// ------------------------------------------------------------------------------
const app = new class {
    constructor(name) {
        this.name = name;
    }
    start() {
        console.log(`${this.name} is running...`);
    }
}("My App");

app.start();    // My App is running...