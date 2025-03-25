/******************************************************************************
 * Map class
 *      - 键和值可以是任何值
 *      - 键的顺序是按照插入进行排序
 *      - 键不能重复
 *
 * 常用方法：
 *      - clear() – 从 map 对象中删除所有元素。
 *      - delete(key) – 删除由键指定的元素。 如果元素在 map 中，则返回 true，否则返回 false。
 *      - entries() – 返回一个新的 Iterator 对象，该对象包含 map 对象中每个元素的 [key, value] 数组。 map 中对象的顺序与插入顺序相同。
 *      - forEach(callback[, thisArg]) – 以插入顺序对 map 中的每个键值对调用回调。 可选的 thisArg 参数为每个回调设置 this 值。
 *      - get(key) – 返回与键关联的值。 如果键不存在，则返回 undefined。
 *      - has(key) – 如果与键关联的值存在，则返回 true，否则返回 false。
 *      - keys() – 返回一个新的 Iterator，该 Iterator 包含元素的键，以插入顺序排列。
 *      - set(key, value) – 设置 map 对象中键的值。 它返回 map 对象本身，因此您可以将此方法与其他方法链接起来。
 *      - values() 返回一个新的 Iterator 对象，该对象包含每个元素的值，以插入顺序排列。
 *
 * 使用Object模拟Map的缺点：
 *      - 一个对象总是具有默认键，例如 原型
 *      - 键值只能是字符串
 *      - 键值只能是简单类型，不能是引用类型
 *      - 对象没有表示 map 大小的属性
 *****************************************************************************/
const map = new Map();

console.log(map);   // Map {}
console.log(typeof map);    // object
console.log(map instanceof Map);    // true

map.set('name', 'zhangsan');
map.set('age', 18);

let jack = {name: 'jack chen'},
    tom = {name: 'tom chen'};

map.set(jack, 'admin');
map.set(tom, 'guest');

map.set("addr", "beijing").set("tel", "123456789");
console.log(map);


// ----------------------------------------------------------------------------
// 创建Map对象
// ----------------------------------------------------------------------------
const users = new Map([
    ['name', 'zhangsan'],
    ['age', 18],
    ['addr', 'beijing'],
    ['tel', '123456789'],
]);

console.log(users.get("name")); // zhangsan
console.log(map.get(jack));     // admin

console.log(map.get("email"));  // undefined
console.log(map.has("email"));  // false
console.log(map.has("name"));   // true

console.log(map.delete('name'));    // true
console.log(map.size);  // 5

// ----------------------------------------------------------------------------
// 遍历Map对象
// ----------------------------------------------------------------------------
for (const user of users) {
    console.log("user: ", user);
}

for (const key of users.keys()) {
    console.log("key: ", key);
}

for (const value of users.values()) {
    console.log("value:", value);
}

for (const entry of users.entries()) {
    console.log("entry: ", entry, entry[0], entry[1]);
}

for (const [key, value] of users.entries()) {
    console.log("key value：", key, value);
}

map.forEach((value, key) => {
    console.log("each：", key, value);
});


// ----------------------------------------------------------------------------
// 将map键值对转换为数组
// ----------------------------------------------------------------------------
const userArray = [...users];
console.log(userArray);

const userKeys = [...users.keys()];
console.log(userKeys); // ['name', 'age', 'addr', 'tel']
console.log([...users.values()]);   // ['zhangsan', 18, 'beijing', '123456789']

// 清空map
users.clear();


// ------------------------------------------------------------------------------
// WeakMap
//    - WeakMap 只有 Map 对象的子集方法
//           - get(key)
//           - set(key, value)
//           - has(key)
//           - delete(key)
//
// 以下是 Map 和 WeekMap 之间的主要区别
//           - 无法迭代 WeakMap 的元素。
//           - 无法一次清除所有元素。
//           - 无法检查 WeakMap 的大小。
// ------------------------------------------------------------------------------
const weakMap = new WeakMap();
weakMap.set(jack, 'admin');
weakMap.set(tom, 'guest');

console.log(weakMap)
console.log(weakMap.get(jack)); // admin
console.log(weakMap.has(jack)); // true
console.log(weakMap.delete(jack));  // true
console.log(weakMap.size);  // undefined
