/******************************************************************************
 * Object.fromEntries() 方法将键值对列表转换为对象
 ******************************************************************************/
const user = {
    name: '张三',
    age: 20,
    gender: '男'
};

// 将 Object 转换为 数组
console.log(Object.entries(user));  // [['name', '张三'], ['age', 20], ['gender', '男']]


const entries = [
    ['name', '张三'],
    ['age', 20],
    ['gender', '男']
];

console.log(Object.fromEntries(entries));   // { name: '张三', age: 20, gender: '男' }


// -----------------------------------------------------------------------------
// 将 Map 转换为对象
// -----------------------------------------------------------------------------
const map = new Map([
    ['name', '张三'],
    ['age', 20],
    ['gender', '男']
]);

map.set('address', '北京');
map.set('phone', '123456789');

console.log(Object.fromEntries(map));   // { name: '张三', age: 20, gender: '男', address: '北京', phone: '123456789' }


// -----------------------------------------------------------------------------
// 将 URL 参数 转换为对象
// -----------------------------------------------------------------------------
const urls = new URLSearchParams('name=张三&age=20&gender=男');

console.log(Object.fromEntries(urls)); // { name: '张三', age: '20', gender: '男' }