/*******************************************************************************
 * instanceof 判断实例类型
 ******************************************************************************/
class Person {
    constructor(name) {
        this.name = name;
    }
}

class Student extends Person {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}

const person = new Person('张三');
const student = new Student('李四', 18);
console.log(person instanceof Person);  // true
console.log(student instanceof Person); // true
console.log(student instanceof Object); // true


// ----------------------------------------------------------------------------
// ES6 语法 Symbol.hasInstance
// ----------------------------------------------------------------------------
console.log(Person[Symbol.hasInstance](person));    // true
console.log(Person[Symbol.hasInstance](student));    // true
console.log(Object[Symbol.hasInstance](student));    // true