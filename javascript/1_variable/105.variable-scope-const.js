/*******************************************************************************
 * const 常量声明
 *      - const 关键字确保它创建的变量是只读的, 不能被重新赋值,但可以改变引用值
 ******************************************************************************/
const PI = 3.1415926;
// PI = 3; // 报错

// const COLOR; // 报错

const user = {
    name: '小明',
    age: 18
};
user.age = 22;

console.log(user); // { name: '小明', age: 22 }

// -----------------------------------------------------------------------------
// person 对象的值不可变，则必须使用 Object.freeze() 方法冻结它
// Object.freeze() 是浅层的，这意味着它可以冻结对象的属性，而不是属性引用的对象。
// -----------------------------------------------------------------------------
const person = Object.freeze(user);
// person.age = 11; // 报错

const student = {
    name: '小红',
    age: 18,
    addr: {
        city: '北京',
        street: 'LeF'
    }
};

// 可以修改student.addr.street
student.addr.street = 'AAB';
console.log(student);


const colors = ['red', 'green', 'blue'];
colors.push('yellow');
console.log(colors); // ['red', 'green', 'blue', 'yellow']

colors.pop();
// colors = []; // 报错

// for (const i = 0; i < 5; i++) {} // 报错 i++