/***************************************************************************
 * 类的静态方法
 *    - JavaScript 静态方法在类的实例之间共享
 *    - 通过类名调用静态方法，而不是该类的实例
 *    - 使用 className.staticMethodName()
 *      或 this.constructor.staticMethodName() 在类构造函数或实例方法中调用静态方法
 * 类的静态变量
 *    - 类的静态属性由该类所有实例共享
 *    - 使用 static 关键字定义静态属性
 *    - 使用 className.staticPropertyName 在静态方法中访问静态属性。
 *    - 使用 this.constructor.staticPropertyName 或 className.staticPropertyName 在构造函数中访问静态属性
 ***************************************************************************/
function Person() {
  this.name = 'Tom';
}

Person.prototype.sayHello = function () {
  console.log('hello');
}

// 静态方法
Person.sayHi = function () {
  console.log('hi');
}

const person = new Person();
person.sayHello();  // hello
Person.sayHi();     // hi


// -------------------------------------------------------------------------
// 静态方法 使用ES6 语法 static进行声明
// -------------------------------------------------------------------------
class People {
  constructor(name) {
    this.name = name;

    // 调用静态方法
    this.constructor.sayHi();
  }

  sayHello() {
    console.log('hello');
  }

  // 静态方法
  static sayHi() {
    console.log('hi');
  }
}

const people = new People('Tom');
people.sayHello();  // hello
People.sayHi();     // hi


// -------------------------------------------------------------------------
// 静态属性
// -------------------------------------------------------------------------
class AppConfig {
  static version = '1.0.0';
  static author = 'Tom';

  constructor() {
    // 调用静态方法
    this.constructor.getVersion();
    this.constructor.author = 'Jerry';
  }

  static getVersion() {
    return this.version;
  }

  static getAuthor() {
    return this.author;
  }
}

console.log(AppConfig.version);
console.log(AppConfig.author);
console.log(AppConfig.getVersion());
console.log(AppConfig.getAuthor());

new AppConfig();
console.log(AppConfig.getVersion());  // 1.0.0
console.log(AppConfig.getAuthor());   // Jerry
