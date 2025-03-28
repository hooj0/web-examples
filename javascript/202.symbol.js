/*******************************************************************************
 * Symbol 符号
 *      - 本地符号：Symbol('name')
 *      - 全局符号：Symbol.for('ssn')
 *          - 获取符号Key：Symbol.keyFor(ssn)
 *          - 本地符号无法获取Key
 *
 *      - 唯一值
 ******************************************************************************/
let s1 = Symbol();
console.log(s1);    // Symbol()
console.log(typeof s1); // symbol

let name = Symbol('name'),
    age = Symbol('age');
console.log(name, age); // Symbol(name) Symbol(age)


// -----------------------------------------------------------------------------
// 共享符号，全局Symbol注册表中会注册对应key
// -----------------------------------------------------------------------------
let ssn = Symbol.for('ssn');
console.log(ssn);   // Symbol(ssn)

const SSN = Symbol.for('ssn');
console.log(SSN === ssn);   // true

// 获取 符号Key
console.log(Symbol.keyFor(ssn)); // ssn


// 非全局符号 无法获取key
const local = Symbol("local");
console.log(Symbol.keyFor(local));  // undefined


// -----------------------------------------------------------------------------
// Symbol 作为唯一值
// -----------------------------------------------------------------------------
let status = {
    OPEN: Symbol("open"),
    CLOSE: Symbol("close"),
    REOPEN: Symbol("reopen")
};
console.log(status); // { OPEN: Symbol(open), CLOSE: Symbol(close), REOPEN: Symbol(reopen) }

let st = Symbol('status');
let data = {
    [st]: status.OPEN,
    username: "Jack"
}
console.log(data);  // { [Symbol(status)]: Symbol(open), username: 'Jack' }
// 获取可枚举的全部属性名称
console.log(Object.keys(data)); // [ 'username' ]
// 获取全部属性名称，无论是否 可枚举
console.log(Object.getOwnPropertyNames(data)); // [ 'username' ]
// 获取全部符号属性名称
console.log(Object.getOwnPropertySymbols(data)); // [ Symbol(status) ]


// -----------------------------------------------------------------------------
// 常用符号 - Symbol.hasInstance 判断实例
// -----------------------------------------------------------------------------
class MyClass {
}

console.log([] instanceof MyClass); // false
console.log(MyClass[Symbol.hasInstance](new MyClass())); // true

// 改写判断示例方法
class MyClass2 {
    static [Symbol.hasInstance](instance) {
        return Array.isArray(instance);
    }
}

console.log([] instanceof MyClass2); // true


// -----------------------------------------------------------------------------
// 常用符号 - Symbol.iterator
// 指定函数是否将为对象返回迭代器。 具有 Symbol.iterator 属性的对象称为可迭代对象
// -----------------------------------------------------------------------------
const nums = [1, 2, 3];
for (const num of nums) {
    console.log(num);
}

const iter = nums[Symbol.iterator]();
console.log(iter.next());   // { value: 1, done: false }
console.log(iter.next());   // { value: 2, done: false }
console.log(iter.next());   // { value: 3, done: false }
console.log(iter.next());   // { value: undefined, done: true }


class List {
    constructor() {
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    * [Symbol.iterator]() {
        for (const item of this.items) {
            yield item;
        }
    }
}

const list = new List();
list.add(1);
list.add(2);
list.add(3);

for (const item of list) {
    console.log(item);
}


// -----------------------------------------------------------------------------
// 常用符号 - Symbol.isConcatSpreadable 数组连接器
// -----------------------------------------------------------------------------
let odd = [1, 3, 5],
    even = [2, 4, 6];

// 连接数组，返回新数组
console.log(odd.concat(even));  // [ 1, 3, 5, 2, 4, 6 ]
console.log(odd);   // [ 1, 3, 5 ]
console.log(odd.concat(2)); // [ 1, 3, 5, 2 ]


let record = {
    name: "jack",
    age: 22,
    1: "symbol",
    length: 3,
};

// 连接对象
console.log([1, 3].concat(record)); // [ 1, 3, { '1': 'symbol', name: 'jack', age: 22, length: 3 } ]

let record2 = {
    name: "jack",
    1: "symbol",
    2: "age",
    length: 3,
    [Symbol.isConcatSpreadable]: true
};
console.log([3].concat(record2)); // [ 3, <1 empty item>, 'symbol', 'age' ]


// -----------------------------------------------------------------------------
// 常用符号 - Symbol.toPrimitive 对象原型转换
// -----------------------------------------------------------------------------
function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype[Symbol.toPrimitive] = function (hint) {
    if (hint === 'string') {
        return `${this.name}`;
    } else if (hint === 'number') {
        return this.age;
    } else {
        return `${this.name} ${this.age}`;
    }
}

const user = new User('jack', 22);
console.log(user); // User { name: 'jack', age: 22 }
console.log("age: " + user);    // age: jack
console.log(String(user));  // jack