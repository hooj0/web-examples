/********************************************************************************
 * 对象字面量，让对象创建和赋值更简单
 ********************************************************************************/

// ------------------------------------------------------------------------------
// 通过函数参数 构建简单对象
// ------------------------------------------------------------------------------
const createPerson = (name, age, sex) => {
    return {
        name,
        age,
        sex,
        sayHello: function () {
            console.log("hello, my name is " + this.name)
        }
    }
};

const person = createPerson("小明", 18, "男");
console.log(person);    // { name: '小明', age: 18, sex: '男', sayHello: [Function: sayHello] }
person.sayHello();      // hello, my name is 小明

// ------------------------------------------------------------------------------
// 通过变量 构建简单对象
// ------------------------------------------------------------------------------
let address = "china", tel = "1234567890";
const data = {
    address,
    tel
};
console.log(data);  // { address: 'china', tel: '1234567890' }


// ------------------------------------------------------------------------------
// 通过变量定义 对象键值
// 简单对象命名
// ------------------------------------------------------------------------------
let key = "address";
const user = {
    [key]: "china",
    [`tel-${key}`]: "1234567890",
    getAge() {
        return 22;
    },
    'say hallo'() {
        console.log("hello");
    },
};

console.log(user); // { address: 'china', 'tel-address': '1234567890' }
console.log(user.address); // china
console.log(user["tel-address"]);  // 1234567890
console.log(user[key]);  // china

user['say hallo']();
console.log(user.getAge());
