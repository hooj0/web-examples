/******************************************************************************
 * Set 集合
 *      - add(value) – 将具有指定值的的新元素追加到集合中。它返回 Set 对象，因此您可以将此方法与另一个 Set 方法链接。
 *      - clear()  – 从 Set 对象中删除所有元素。
 *      - delete(value) – 删除由值指定的元素。
 *      - entries()– 返回一个新的 Iterator，其中包含 [value, value] 的数组。
 *      - forEach(callback [, thisArg]) – 对 Set 的每个元素调用 回调函数，在每次调用中将 this 值设置为 thisArg。
 *      - has(value) – 如果集合中存在具有给定值的元素，则返回 true，否则返回 false。
 *      - keys() – 与 values() 函数相同。
 *      - [@@iterator] – 返回一个新的 Iterator 对象，该对象包含以插入顺序存储的所有元素的值
 *****************************************************************************/
const users = new Set(['john', 'pete', 'ann']);
console.log(users); // Set(3) { 'john', 'pete', 'ann' }

console.log(typeof users);  // object
console.log(users instanceof Set);  // true
console.log(users.size);    // 3

users.add('alice').add('bob');

console.log(users.has('alice'));    // true
console.log(users.delete('bob'));   // true
console.log(users); // Set(4) { 'john', 'pete', 'ann', 'alice' }

users.clear();
console.log(users.size); // 0
console.log("-----------------");


// ----------------------------------------------------------------------------
// 遍历集合
// ----------------------------------------------------------------------------
let names = new Set(['john', 'pete', 'ann']);

for (let user of names) {
    console.log(user);
}

for (const [name, value] of names.entries()) {
    console.log(name == value);
}

names.forEach(name => console.log(name.toUpperCase()));


// ----------------------------------------------------------------------------
// WeakSet
// ----------------------------------------------------------------------------
let userArray = [
    { name: "John" },
    { name: "Pete" },
    { name: "Mary" },
];

const usersSet = new WeakSet(userArray);
console.log(usersSet);

console.log(usersSet.has({ name: "John" }));    // false
console.log(usersSet.has(userArray[0]));    // true

console.log(usersSet.add({name: "John2"}));
console.log(usersSet.delete(userArray[0])); // true

