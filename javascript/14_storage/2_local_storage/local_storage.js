/*******************************************************************************
 * Local Storage
 *   - Storage类型旨在存储名称-值对。Storage类型是一个Object，它具有以下附加方法
 *      - setItem(name, value) – 为名称设置值
 *      - removeItem(name) – 删除由名称标识的名称-值对。
 *      - getItem(name) – 获取给定名称的值。
 *      - key(index) – 获取给定数字位置的值的名称。
 *      - clear() – 删除所有值。
 *
 * storage 事件:
 *      - domain – 存储更改所针对的域。
 *      - key – 已设置或删除的键。
 *      - newValue – 键设置为的值或null（如果键已删除）。
 *      - oldValue – 设置或删除键之前的值。
 ******************************************************************************/
console.log('localStorage: ', window.localStorage);

window.localStorage.setItem('name', 'zhangsan');
window.localStorage.setItem('age', 18);

console.log('localStorage: ', window.localStorage);
console.log('length: ', window.localStorage.length);

console.log('name: ', window.localStorage.getItem('name'));

window.localStorage.removeItem('age');
console.log('length: ', window.localStorage.length);
console.log('age: ', window.localStorage.getItem('age'));

window.localStorage.setItem('theme', 'dark');
window.localStorage.setItem('color', 'red');

console.log(window.localStorage.key(0));

const keys = Object.keys(window.localStorage);
for (let key of keys) {
    console.log(key, window.localStorage.getItem(key));
}

const user = {
    name: 'zhangsan',
    age: 18,
    theme: 'dark',
    color: 'red',
};
window.localStorage.setItem('user', JSON.stringify(user));

console.log('user: ', JSON.parse(window.localStorage.getItem('user')));