/******************************************************************************
 * 对象 链运算符
 * 可选链运算符 (?.) 就像一个访问对象系列中嵌套属性的快捷方式。
 * 无需检查链中每个步骤是否为空 (null 或 undefined)，而是可以使用运算符 ?. 直接访问所需的属性。
 ******************************************************************************/
const user = {
    firstName: 'tom',
    lastName: 'china',
    address: {
        street: '小红',
        number: 33221456
    },
    sayHello: function () {
        console.log("hello, my name is " + this.firstName)
    },
    sayHallo(name) {
        console.log("hello, my name is " + name)
    },
};

// 访问属性
let street = user?.address?.street;
let mail = user?.address?.mail;
console.log(street, mail);  // 小红 undefined

// 访问不存在的属性
let mail2 = user?.address?.mail ?? '22345678';
console.log(mail2); // 22345678

// 调用方法
user?.sayHello();   // hello, my name is tom
user?.sayHello?.(); // hello, my name is tom
user?.sayHallo?.("jack");   // hello, my name is jack

// 调用不存在的方法
user?.sayHi?.();    // 不执行、不报错