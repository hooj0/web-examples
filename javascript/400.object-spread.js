/****************************************************************************
 *  JavaScript 对象展开 (...) 来克隆对象或将多个对象合并为一个
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