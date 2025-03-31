/********************************************************************************
 * class new.target 可以检测函数或构造函数是否使用 new 运算符调用
 ********************************************************************************/
function Person() {
    console.log("Person constructor", new.target);
}

const person = new Person();    // Person constructor [Function: Person]
Person();   // Person constructor undefined


// --------------------------------------------------------------------------
// 类继承 检测new.target
// ----------------------------------------------------------------------------
class User {
    constructor(name) {
        console.log("constructor", new.target);
        this.name = name;
    }
}

class Admin extends User {
    constructor(name) {
        super(name);
    }
}

new User("John");   // constructor [class: User]
new Admin("Jack");  // constructor [class: Admin]
