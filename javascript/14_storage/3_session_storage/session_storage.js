/******************************************************************************
 * Session Storage
 *      - setItem(name, value) – 设置名称的值
 *      - removeItem(name) – 删除由名称标识的名称-值对。
 *      - getItem(name) – 获取给定名称的值。
 *      - key(index) – 获取给定数字位置的值的名称。
 *      - clear() – 删除 sessionStorage 中的所有值。
 *****************************************************************************/
console.log('sessionStorage: ', window.sessionStorage);

window.sessionStorage.setItem('name', 'zhangsan');
window.sessionStorage.setItem('age', 18);

console.log('sessionStorage: ', window.sessionStorage);
console.log('length: ', window.sessionStorage.length);

console.log('name: ', window.sessionStorage.getItem('name'));

window.sessionStorage.removeItem('age');
console.log('length: ', window.sessionStorage.length);
console.log('age: ', window.sessionStorage.getItem('age'));

window.sessionStorage.setItem('theme', 'dark');
window.sessionStorage.setItem('color', 'red');

console.log(window.sessionStorage.key(0));

const keys = Object.keys(window.sessionStorage);
for (let key of keys) {
    console.log(key, window.sessionStorage.getItem(key));
}

const user = {
    name: 'zhangsan',
    age: 18,
    theme: 'dark',
    color: 'red',
};
window.sessionStorage.setItem('user', JSON.stringify(user));

console.log('user: ', JSON.parse(window.sessionStorage.getItem('user')));