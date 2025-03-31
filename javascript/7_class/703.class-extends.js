/***************************************************************************
 * 类继承
 ***************************************************************************/
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function () {
    console.log("hello, my name is " + this.name);
}

function Student(name, age, grade) {
    Person.call(this, name, age);
    this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Person;

Student.prototype.getClass = function () {
    console.log("I am in grade " + this.grade);
}


const peter = new Student("Peter", 18, 3);
peter.sayHello();   // hello, my name is Peter
peter.getClass();   // I am in grade 3


// -------------------------------------------------------------------------
// 通过 extends 继承来实现多态
// -------------------------------------------------------------------------
class Device {
    constructor(name) {
        this.name = name;
    }

    connect() {
        console.log(`${this.name} is connecting...`);
    }

    // 静态方法可被继承
    static getName() {
        console.log("Device name is " + this.name);
    }
}

class Computer extends Device {
    constructor(name, price) {
        super(name);
        this.price = price;
    }

    printPrice() {
        console.log(`${this.name} price is ${this.price}`);
    }
}

const mac = new Computer("MacBook Pro", 2000);
mac.printPrice();   // MacBook Pro price is 2000
mac.connect();      // MacBook Pro is connecting...

Device.getName();   // Device name is Device
Computer.getName(); // Device name is Computer


// -------------------------------------------------------------------------
// 继承内置类型，如 数组、字符串、集合
// -------------------------------------------------------------------------
class Queue extends Array {
    constructor() {
        super();
    }

    enqueue(item) {
        this.push(item);
    }

    dequeue() {
        return this.shift();
    }

    peek() {
        return this[0];
    }

    size() {
        return this.length;
    }

    empty() {
        return this.size() === 0;
    }
}

const queue = new Queue();
queue.push(1, 2, 3);
queue.push(4);

while (!queue.empty()) {
    console.log(queue.dequeue());
}
