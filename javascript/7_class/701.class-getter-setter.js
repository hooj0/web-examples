/*******************************************************************************
 * class 类的 getter setter 方法
 ******************************************************************************/

// -----------------------------------------------------------------------------
// 利用方法函数进行getter setter
// -----------------------------------------------------------------------------
class User {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }
}

const user = new User('张三');
console.log(user.getName());    // 张三
user.setName('李四');
console.log(user.getName());    // 李四


// -----------------------------------------------------------------------------
// 利用ES6 特有语法 进行getter setter
// -----------------------------------------------------------------------------
class Person {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        console.log('set name: ' + value);
        this._name = value;
    }
}

const person = new Person('张三');
console.log(person.name);   // 张三
person.name = '李四';
console.log(person.name);   // 李四


// -----------------------------------------------------------------------------
// 字面量中使用getter setter
// -----------------------------------------------------------------------------
const foo = {
    users: [],
    add(name) {
        console.log('add user: ' + name);
        this.users.push(name);
        return this;
    },

    get length() {
        return this.users.length;
    },

    get latest() {

        return this.length == 0 ? undefined : this.users[this.users.length - 1];
    },
};

foo.add('张三').add('李四').add('王五');
console.log(foo.length);    // 3
console.log(foo.latest);    // 王五
