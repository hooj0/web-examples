/*******************************************************************************
 * 反射 reflection
 *    - Reflect 它允许您调用方法、构造对象、获取和设置属性，以及操作和扩展属性
 *
 * Reflect API：
 *    - Reflect.apply() – 使用指定的参数调用函数。
 *          + Reflect.apply(target, thisArg, args)
 *    - Reflect.construct() – 类似于 new 运算符，但它是一个函数。它等效于调用 new target(...args)。
 *    - Reflect.defineProperty() – 类似于 Object.defineProperty()，但返回一个布尔值，指示该属性是否成功定义在对象上。
 *          + Reflect.defineProperty(target, propertyName, propertyDescriptor)
 *    - Reflect.deleteProperty() – 类似于 delete 运算符，但它是一个函数。它等效于调用 delete objectName[propertyName]。
 *    - Reflect.getOwnPropertyDescriptor() – 类似于 Object.getOwnPropertyDescriptor()。如果该属性存在于对象上，它会返回该属性的属性描述符，否则返回 undefined。
 *    - Reflect.set() – 将值分配给属性，并返回一个布尔值，如果属性成功设置，则返回 true。
 *    - Reflect.get() – 返回属性的值。
 *    - Reflect.has() – 类似于 in 运算符，但它是一个函数。它返回一个布尔值，指示该属性（无论是自身所有还是继承的）是否存在。
 *    - Reflect.ownKeys() – 返回对象自身所有属性的键（不包括继承的属性）的数组。
 *    - Reflect.setPrototypeOf() – 设置对象的原型。
 *    - Reflect.getPrototypeOf() – 与 Object.getPrototypeOf() 相同。
 *    - Reflect.isExtensible() – 与 Object.isExtensible() 相同。
 *    - Reflect.preventExtensions() – 类似于 Object.preventExtensions()。它返回一个布尔值。
 ******************************************************************************/
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }
}

let args = ['Tom', 18];

// -----------------------------------------------------------------------------
// Reflect.construct | new 运算符
// -----------------------------------------------------------------------------
const user = Reflect.construct(User, args);
console.log(user);  // User { name: 'Tom', age: 18 }
console.log(user instanceof User); // true
console.log(user.name); // Tom
console.log(user.getAge()); // 18


// -----------------------------------------------------------------------------
// Reflect.apply | Function.prototype.apply.call()
// -----------------------------------------------------------------------------
let data = Function.prototype.apply.call(Math.max, Math, [1, 2, 3, 4, 5]);
console.log("Max:", data); // 5
console.log(Math.max.call(Math, 1, 2, 3, 4, 5)); // 5
console.log(Math.max.apply(Math, [1, 2, 3, 4, 5])); // 5

data = Reflect.apply(Math.max, Math, [1, 2, 3, 4, 5]);
console.log(data); // 5


// -----------------------------------------------------------------------------
// 定义属性: Reflect.defineProperty() | Object.defineProperty()
// -----------------------------------------------------------------------------
let flag = Reflect.defineProperty(user, 'lastname', {
    value: 'Jack',
    writable: true,
    enumerable: true,
    configurable: true
});

if (flag) {
    console.log('属性定义成功', user.lastname);
} else {
    console.log('属性定义失败');
}


// -----------------------------------------------------------------------------
// 删除属性: Reflect.deleteProperty()
//      - delete target[propertyName] | delete target.propertyName
// -----------------------------------------------------------------------------
flag = Reflect.deleteProperty(user, 'lastname');
if (flag) {
    console.log('删除成功', user.lastname);
} else {
    console.log('删除失败');
}


// -------------------------------------------------------------------------------
// 获取属性描述符: Reflect.getOwnPropertyDescriptor()
//      - Object.getOwnPropertyDescriptor() | Object.getOwnPropertyDescriptors()
// -------------------------------------------------------------------------------
let descriptor = Reflect.getOwnPropertyDescriptor(user, 'name');
console.log(descriptor);    // { value: 'Tom', writable: true, enumerable: true, configurable: true }
console.log(descriptor.value);


// -------------------------------------------------------------------------------
// 设置属性: Reflect.set()
//      - target[propertyName] = value | target.propertyName = value
// -------------------------------------------------------------------------------
flag = Reflect.set(user, 'age', 20);
if (flag) {
    console.log('设置成功', user.age);
} else {
    console.log('设置失败');
}


// -------------------------------------------------------------------------------
// 获取属性: Reflect.get()
//      - target[propertyName] | target.propertyName
// -------------------------------------------------------------------------------
let age = Reflect.get(user, 'age');
console.log(age);


// -------------------------------------------------------------------------------
// 判断属性是否存在: Reflect.has()
//      - in 运算符 | in target | in target.propertyName | user.hasOwnProperty('age')
// -------------------------------------------------------------------------------
flag = Reflect.has(user, 'age');
if (flag) {
    console.log('存在');
} else {
    console.log('不存在');
}

console.log(user.hasOwnProperty('age'));


// -------------------------------------------------------------------------------
// 获取所有属性: Reflect.ownKeys()
//      - Object.keys(user) | Object.getOwnPropertyNames() | Object.getOwnPropertySymbols()
// -------------------------------------------------------------------------------
let keys = Reflect.ownKeys(user);
console.log(keys);
console.log(Object.keys(user));


// -------------------------------------------------------------------------------
// 设置原型: Reflect.setPrototypeOf()
//      - Object.setPrototypeOf()
// -------------------------------------------------------------------------------
Reflect.setPrototypeOf(user, {
    getInfo() {
        return this.age + ' years old';
    }
});

console.log(user.getInfo()); // 20 years old


// -------------------------------------------------------------------------------
// 获取原型: Reflect.getPrototypeOf()
//      - Object.getPrototypeOf()
// -------------------------------------------------------------------------------
console.log(Reflect.getPrototypeOf(user));


// -------------------------------------------------------------------------------
// 判断是否可扩展: Reflect.isExtensible()
//      - Object.isExt
// -------------------------------------------------------------------------------
console.log(Reflect.isExtensible(user));    // true


// -------------------------------------------------------------------------------
// 扩展: Reflect.preventExtensions()
//      - Object.preventExtensions()
// -------------------------------------------------------------------------------
console.log(Reflect.preventExtensions(user));   // true;