/*******************************************************************************
 * Proxy 代理
 *  - 语法：
 *      new Proxy(target, handler)
 *      target：目标对象，也就是需要代理的对象
 *      handler：代理对象，也就是代理对象的代理对象
 *  - 使用场景：
 *      拦截对象操作，包括读取属性、赋值、枚举属性、删除属性、验证属性等
 *  - 特点：
 *      1. 代理对象代理目标对象，目标对象不变
 *      2. 代理对象可以继承目标对象的原型，目标对象也可以继承代理对象的原型
 *      3. 代理对象可以代理目标对象的所有操作，包括读取属性、赋值、枚举属性、删除属性、验证属性等
 *
 *   - 常用代理方法：
 *      get：读取属性  target[prop]
 *      set：赋值  target[prop] = value
 *      has：判断属性是否存在 property in target
 *      apply：方法被调用 target(...args)
 *      construct – 拦截new运算符的使用 new target(...args)
 *      deleteProperty：删除属性 delete target[prop]
 *      ownKeys：获取目标对象的所有属性 (Object.keys, Object.getOwnPropertyNames, Object.getOwnPropertySymbols)
 *      getPrototypeOf – 拦截对[[GetPrototypeOf]]的内部调用
 *      setPrototypeOf – 拦截对Object.setPrototypeOf的调用
 *      isExtensible – 拦截对Object.isExtensible的调用
 *      preventExtensions – 拦截对Object.preventExtensions的调用
 *      getOwnPropertyDescriptor – 拦截对Object.getOwnPropertyDescriptor的调用
 ******************************************************************************/
const user = {
    name: 'John',
    age: 30,
    city: 'New York',
    country: 'USA'
};

const handler = {
    get: function (target, prop, receiver) {
        console.log(`1 Getting ${prop}`);
        return Reflect.get(target, prop, receiver);
    },
    set: function (target, prop, value, receiver) {
        console.log(`1 Setting ${prop} to ${value}`);
        return Reflect.set(target, prop, value, receiver);
    },
    has: function (target, prop) {
        console.log(`1 Checking if ${prop} exists`);
    }
}

const userProxy = new Proxy(user, handler);
console.log(userProxy.name);
// Getting name
// John

console.log(userProxy.age);
// Getting age
// 30

userProxy.city = 'Beijing'; // Setting city to Beijing

console.log(userProxy.city);
// Getting city
// Beijing

console.log('name' in userProxy);
// Checking if name exists
// false


// -----------------------------------------------------------------------------
// 代理陷阱
// -----------------------------------------------------------------------------
const handler2 = {
    get: function (target, prop, receiver) {
        console.log(prop);
        console.log(typeof (prop)); // string
        console.log(receiver); // { name: 'John', age: 30, city: 'Beijing', country: 'USA' }
        console.log(target);    // { name: 'John', age: 30, city: 'Beijing', country: 'USA' }
        console.log(receiver === target); // false

        console.log(`Getting ${prop}`);
        return prop === "fullName" ? `FullName ${target.name}` : target[prop];
    },

    set: function (target, prop, value, receiver) {
        if (prop === "name") {
            console.log("name is not set");
            return false;
        }
        if (prop === "age") {
            if (value < 0) {
                throw "Age cannot be negative";
            }
        }

        console.log(`Setting ${prop} to ${value}`);
        target[prop] = value;
    }
}

console.log("---------------------------------")
const userProxy2 = new Proxy(user, handler2);
console.log(userProxy2.fullName);
// Getting fullName
// FullName John

console.log("-------")
console.log(userProxy2.name);

console.log("-------")
try {
    userProxy2.name = "John Doe"; // name is not set
    console.log(userProxy2.name); // John, 没有设置

    userProxy2.age = -30; // Age cannot be negative
} catch (e) {
    console.log(e);
}


// -----------------------------------------------------------------------------
// apply 陷阱, 对函数方法对象进行代理
// -----------------------------------------------------------------------------
const getFullName = function (name, age) {
    return `${name} ${age}`;
};

const getFullNameProxy = new Proxy(getFullName, {
    apply: function (target, thisArg, argArray) {
        console.log("apply", thisArg, argArray);
        return target(...argArray).toUpperCase();
    }
});

console.log("-------")
console.log(getFullNameProxy("John", 30));