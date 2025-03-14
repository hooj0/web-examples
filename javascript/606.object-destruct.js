/***************************************************************************
 * 对象结构 destructure
 *    - 赋值结构
 ***************************************************************************/
const person = {
    name: "小红",
    age: 28,
    sex: "女",
    address: undefined,
    nickname: "tom"
};

// 定义变量接收对象的属性
let { name, age, sex } = person;
console.log(name, age, sex);    // 小红 28 女

// 定义变量接收对象的属性，并重命名
let { name: personName, age: my_age, sex2 } = person;
console.log(personName, my_age, sex2);  // 小红 28 undefined

// 接收不存在的属性
let { name2  } = person;
console.log(name2);     // undefined


// ------------------------------------------------------------------------
// 定义变量接收对象的属性，并重命名，没有值的情况赋默认值
// ------------------------------------------------------------------------
let user = {
    realname: "小红",
    address: undefined,
    nickname: "tom"
};

// 定义变量接收对象的属性，并重命名，没有值的情况赋默认值
let { nickname, address: personAddr = "china", realname = "小红女", tel= "33221456" } = user;
console.log(nickname, personAddr, realname, tel);    // tom china 小红 33221456


// ------------------------------------------------------------------------
// 空对象解构
// ------------------------------------------------------------------------
function nullable() {
    return null;
}

// let { a, b } = nullable(); // 报错 TypeError: Cannot destructure property 'a' of 'nullable(...)' as it is null.
let { a, b } = nullable() ?? {};
// let { a, b } = nullable() || {};
console.log(a, b);    // undefined undefined


// ------------------------------------------------------------------------
// 嵌套解构
// ------------------------------------------------------------------------
const person2 = {
    name: "小红",
    age: 28,
    sex: "女",
    address: {
        city: "北京",
        street: "北京路"
    },
    nickname: "tom"
};

let { name: personName2, age: my_age2, address: { city, street }, address } = person2;
console.log(personName2, my_age2, city, street);    // 小红 28 北京 北京路
console.log(address);   // {city: '北京', street: '北京路'}


// ------------------------------------------------------------------------
// 函数参数解构
// ------------------------------------------------------------------------
const display = ({ name, age, sex, mail=22345678, nickname: nick }) => {
    console.log(name, age, sex, mail, nick);    // 小红 28 女 22345678 tom
};

display(person2);
