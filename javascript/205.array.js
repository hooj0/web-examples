/*******************************************************************************
 * Array 数组
 *      - 创建数组
 * 常用方法：
 *      - 第 1 节：数组属性
 *          - length 属性 – 向您展示如何有效地使用数组的 length 属性。
 *      - 第 2 节：添加/删除元素
 *          - push() – 在数组的末尾添加一个或多个元素。
 *          - unshift() – 在数组的开头添加一个或多个元素。
 *          - pop() – 从数组的末尾删除一个元素。
 *          - shift() – 从数组中删除第一个元素。
 *          - splice() – 操作数组中的元素，例如删除、插入和替换元素。
 *          - slice() – 复制数组中的元素。
 *      - 第 3 节：查找元素
 *          - indexOf() – 在数组中定位元素。
 *          - includes() – 检查数组中是否存在元素。
 *          - find() – 在数组中查找元素
 *          - findIndex() – 在数组中查找元素的索引。
 *      - 第 4 节：高阶方法
 *          - map() – 转换数组元素。
 *          - filter() – 过滤数组中的元素。
 *          - reduce() – 将数组的元素缩减为一个值。
 *          - every() – 检查数组中每个元素是否通过测试。
 *          - some() – 检查数组中至少有一个元素是否通过测试。
 *          - sort() – 对数组中的元素进行排序。
 *          - forEach() – 循环遍历数组元素。
 *      - 第 5 节：操作数组
 *          - concat() – 将两个数组合并为一个数组。
 *      - 第 6 节：创建数组
 *          - of() – 改进数组创建。
 *          - from() – 从类似数组或可迭代对象创建数组。
 *      - 第 7 节：扁平化数组
 *          - flat() – 递归地扁平化数组，直到指定深度。
 *          - flatMap() – 对每个元素执行映射函数，并扁平化结果。
 *      - 第 8 节：数组到字符串
 *          - join() – 将数组的所有元素连接成一个字符串，由分隔符分隔。
 *      - 第 9 节：高级操作
 *          - 解构 – 向您展示如何将数组的元素分配给变量。
 *          - 扩展运算符 – 学习如何有效地使用扩展运算符。
 *      - 第 10 节：访问元素
 *          - at() – 使用正数和负数索引访问数组元素。
 *      - 第 11 节：反转元素
 *          - reverse() – 反转元素的顺序，并返回具有反转顺序元素的相同数组。
 *          - toReversed() – 反转数组元素的顺序，并返回具有反转顺序元素的新数组。
 ******************************************************************************/
let colors = ['red', 'green', 'blue'];
let numbers = [1, 2, 3, ,, 4];


// ----------------------------------------------------------------------------
// 数组属性
// ----------------------------------------------------------------------------
console.log(colors.length);     // 3
console.log(numbers.length);    // 6

numbers[10] = 5;
console.log(numbers.length);    // 11

// 修改属性，清空数组
colors.length = 0;
console.log(colors);    // []

// 修改属性，删除数组
colors = ['red', 'green', 'blue'];
colors.length = 1;
console.log(colors);    // [ 'red' ]

// 稀疏数组
colors.length = 3;
console.log(colors);    // [ 'red', , ]


colors.length = 0;
console.log("--------------------------------------")
// ----------------------------------------------------------------------------
// 添加元素：push() 和 unshift()
// ----------------------------------------------------------------------------
console.log(colors.push('yellow')); // 1
console.log(colors.push('black', 'white', 'gray'));    // 4
console.log(colors);    // [ 'yellow', 'black', 'white', 'gray' ]

let arrays = ["red", "blue"]
console.log(colors.push(...arrays)); // 6
console.log(colors);    // [ 'yellow', 'black', 'white', 'gray', 'red', 'blue' ]


const names = {
    0: "jack",
    1: "rose",
    2: "lily",
    length: 3,
    append(name) {
        [].push.call(this, name);
    },
    add(name) {
        this[this.length] = name;
        this.length++;
    },
    push: Array.prototype.push,
    toString: Array.prototype.toString,
    join: Array.prototype.join,
};

names.append("tom");
names.append("jim");
console.log(names); // [ 'jack', 'rose', 'lily', 'tom', 'jim' ]

names.add("joe");
console.log(names); // [ 'jack', 'rose', 'lily', 'tom', 'jim', 'joe' ]
// {
//   '0': 'jack',
//   '1': 'rose',
//   '2': 'lily',
//   '3': 'tom',
//   '4': 'jim',
//   '5': 'joe',
//   length: 6,
//   append: [Function: append],
//   add: [Function: add],
//   push: [Function: push],
//   toString: [Function: toString],
//   join: [Function: join],
// }

console.log(names.join(" "));

console.log("--------------------------------------")
// 添加到最前面
console.log(colors.unshift("white")); // 7
console.log(colors); // [ 'white', 'yellow', 'black', 'white', 'gray', 'red', 'blue' ]

console.log(colors.unshift("#111", "#CCC")); // 9
console.log(colors); // [ '#111', '#CCC', 'white', 'yellow', 'black', 'white', 'gray', 'red', 'blue' ]

// 添加数组到最前面
colors.unshift(...arrays);
console.log("--------------------------------------")

// ----------------------------------------------------------------------------
// 删除元素：pop() 和 shift()
// ----------------------------------------------------------------------------
// 删除末尾，弹出末尾元素
console.log(colors.pop()); // blue
console.log(colors);    // [ '#111', '#CCC', 'white', 'yellow', 'black', 'white', 'gray', 'red' ]
