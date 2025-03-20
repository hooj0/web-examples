/****************************************************************************
 *  JavaScript 对象展开，扩展运算符（spread operator）和剩余参数（rest parameters）
 *    - 使用 (...) 来克隆对象或将多个对象合并为一个
 *    - 将可迭代对象（如数组、字符串等）或者对象展开为单独的元素
 ****************************************************************************/

// ---------------------------------------------------------------------------
// 数组展开
// ---------------------------------------------------------------------------
const foo = [1, 2];
const bar = [3, 4];

// 合并两个数组
const merges = [...foo, ...bar];
console.log(merges);  // [1, 2, 3, 4]

// 创建一个新数组，复制 bar 的值
let list = [...bar];
console.log(list);      // [3, 4]


// ---------------------------------------------------------------------------
// 对象展开
// ---------------------------------------------------------------------------
const user = {
    name: 'Jerry',
    age: 18,
    sex: 'male'
};

// 合并user属性值，创建新对象
const newUser = {
    ...user,
    name: 'Tom',
    age: 20,
    address: 'beijing'
};
console.log(newUser);  // { name: 'Tom', age: 20, sex: 'male', address: 'beijing' }

const address = {
    city: 'beijing',
    street: 'dongcheng'
};

console.log({
    ...user,
    ...address
});   // { name: 'Jerry', age: 18, sex: 'male', city: 'beijing', street: 'dongcheng' }


// 克隆对象，浅复制
const cloneUser = {...user};
console.log(cloneUser);


// ---------------------------------------------------------------------------
// 函数调用
// ---------------------------------------------------------------------------
const params = [1, 2, 3, 4, 5];
function sum(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5));    // 15
console.log(sum(...params));    // 15

function add(a, b, c) {
    return a + b + c;
}
console.log(add(...params));    // 6，会省略超出的长度的参数