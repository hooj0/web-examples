/********************************************************************************
 * 函数返回多个值
 *     - 函数返回多个值，需要使用对象或者数组
 ********************************************************************************/
function getUsers() {
    return ["jack", "tom", "alen"]
}

let names = getUsers();
console.log(names); // ["jack", "tom", "alen"]

// 数组解构
let [name1, name2, name3] = getUsers();
console.log(name1, name2, name3); // jack tom alen

function getUserInfo() {
    return {
        name: "jack",
        age: 18,
        sex: "男"
    }
}

// 对象解构
let { name, age, sex, addr = "北京" } = getUserInfo();
console.log(name, age, sex, addr);

let { name: userName, age: userAge, sex: userSex } = getUserInfo();
console.log(userName, userAge, userSex);
