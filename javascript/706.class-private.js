/******************************************************************************
 * 类的私有属性和方法
 *    — 在字段名前添加 # 符号，将其设置为私有字段
 *    — 私有字段只能在类内部访问，不能在类外部或子类中访问
 *    - 使用 in 运算符检查对象是否包含私有字段
 *    - 不能从类外部或 MyClass 的子类中调用
 ******************************************************************************/
class Person {
  constructor(name) {
    this.name = name;
  }

  // 私有属性
  #age = 18;

  // 私有方法
  #say() {
    console.log('hello');
  }

  // 公开方法
  show() {
    console.log(this.#age);
    this.#say();
  }
}

const person = new Person('小明');
person.show();
console.log(person.name);
// console.log(person.#age); // 报错


// ----------------------------------------------------------------------------
// 私有子类
// ----------------------------------------------------------------------------
class Student extends Person {
  constructor(name, score) {
    super(name);
    this.#score = score;
  }

  // 私有属性
  #score = 100;
  // 静态私有属性
  static #grade = 'AAAAA';

  display() {
    super.show();
    console.log(this.#score);
    console.log(Student.#grade);
  }

  static hasScore(target) {
    return #score in target;
  }
}

const student = new Student('小红', 100);
student.show();
student.display();
console.log(Student.hasScore(student)); // true

