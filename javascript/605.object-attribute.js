/*******************************************************************************
 * 对象属性
 *   - 数据属性
 *      *   [[Configurarable]] – 确定是否可以通过 delete 运算符重新定义或删除属性。
 *      *   [[Enumerable]] – 指示属性是否可以在 for...in 循环中返回。
 *      *   [[Writable]] – 指定属性的值是否可以更改。
 *      *   [[Value]] – 包含属性的实际值。
 *   - 访问器属性
 *      *   Object.keys
 *      *   Object.getOwnPropertyNames
 *      *   Object.getOwnPropertyDescriptor
 ******************************************************************************/
const person = {
    name: 'Jane',
    age: 25,
    get fullName() {
        return `${this.name}-${this.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.name = parts[0];
        this.lastName = parts[1];
    }
};

// set 方法
person.fullName = 'Jack Doe';
person.addr = 'china';
console.log(person.addr);   // china
console.log(person.name);   // Jack
// get 方法
console.log(person.fullName);   // Jack-Doe


// -----------------------------------------------------------------------------
// Object.defineProperty() 更改属性，参数如下：
//   - 一个对象。
//   - 对象的属性名称。
//   - 一个属性描述符对象，该对象具有四个属性：configurable、enumerable、writable 和 value
// -----------------------------------------------------------------------------
"use strict"
const user = {};
Object.defineProperty(user, 'name', {
    configurable: true,
    enumerable: true,
    writable: true,
    value: 'Jane'
});
console.log(user.name);
// 由于 [[Configurable]] 属性的默认值设置为 true，因此您可以通过 delete 运算符将其删除
delete user.name;
console.log(user.name); // undefined

// 由于 [[Configurable]] 属性的默认值设置为 false, 不能编辑属性
Object.defineProperty(user, 'address', {
    configurable: false,
    value: "china"
});
// 由于 [[Configurable]] 属性的默认值设置为 false，无法删除属性
delete user.address;
console.log(user.address);  // china

// 由于 [[Configurable]] 属性的默认值设置为 false, 无法编辑属性 Cannot redefine property: address
// Object.defineProperty(user, 'address', {
//     configurable: true,
// });


// -----------------------------------------------------------------------------
// 访问对象所有属性
// -----------------------------------------------------------------------------
for (let key in person) {
    console.log(key);
}

// enumerable: false 将导致无法访问到属性
Object.defineProperty(person, 'addr', {enumerable: false});
for (let key in person) {
    console.log(key);   // 无法枚举到 address 属性
}

console.log(Object.keys(person));   // [ 'name', 'age', 'fullName', 'lastName' ]
console.log(Object.getOwnPropertyNames(person));    // [ 'name', 'age', 'fullName', 'lastName', 'addr' ]
console.log(person.addr);    // china
// 确定属性是否可枚举
console.log(person.propertyIsEnumerable("addr"));   // false


// -----------------------------------------------------------------------------
// 定义get、set方法
// -----------------------------------------------------------------------------
Object.defineProperty(user, 'fullName', {
    get() {
        return `${this.name}-${this.lastName}`;
    },
    set(value) {
        const parts = value.split(' ');
        this.name = parts[0];
        this.lastName = parts[1];
    }
});

user.fullName = 'Jack Doe';
console.log(user.fullName); // Jack-Doe
console.log(user.name);     // Jack


// 定义多个属性
const student = {};

Object.defineProperties(student, {
    name: {
        value: 'Jane',
    },
    age: {
        value: 25,
    },
    classes: {
        value: 1,
    },
    info: {
        get() {
            return `${this.name}-${this.age}-${this.classes}`;
        }
    }
});

// 获取属性
console.log(student.info);  // Jane-25-1
// 获取属性的描述信息
console.log(Object.getOwnPropertyDescriptor(student, 'info'));
console.log(Object.getOwnPropertyDescriptor(student, 'name'));
console.log(Object.getOwnPropertyDescriptor(student, 'name').value);


// -----------------------------------------------------------------------------
// for...in 循环迭代对象的 枚举属性。它还会向上遍历 原型 链并枚举继承的属性
// -----------------------------------------------------------------------------
const person1 = Object.create(person);
person1.name = 'Jack';
Object.defineProperty(person1, 'location', {value: 'china', enumerable: true});
for (let key in person1) {
    console.log(key + "-" + person1.hasOwnProperty(key)); // 枚举对象的 自身属性(继承的属性 false)
}
