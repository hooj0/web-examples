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
 *          - toSorted() – 对数组进行排序，并返回一个新数组。
 *          - fill() – 用一个值填充数组。
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

console.log("--------------------------------------");
// 添加到最前面
console.log(colors.unshift("white")); // 7
console.log(colors); // [ 'white', 'yellow', 'black', 'white', 'gray', 'red', 'blue' ]

console.log(colors.unshift("#111", "#CCC")); // 9
console.log(colors); // [ '#111', '#CCC', 'white', 'yellow', 'black', 'white', 'gray', 'red', 'blue' ]

// 添加数组到最前面
colors.unshift(...arrays);
console.log("--------------------------------------");


// ----------------------------------------------------------------------------
// 删除元素：pop() 和 shift()
// ----------------------------------------------------------------------------
colors = ["blue", "white", "yellow", "black"];
// 删除末尾，弹出末尾元素
console.log(colors.pop()); // black
console.log(colors);    // [ 'blue', 'white', 'yellow' ]

// 删除最前面，弹出最前面元素
console.log(colors.shift()); // blue
console.log(colors);    // [ 'white', 'yellow' ]
console.log("--------------------------------------");


// ----------------------------------------------------------------------------
// 删除元素：splice()
// ----------------------------------------------------------------------------
colors = ["blue", "white", "yellow", "black"];
console.log(colors.splice(1, 1)); // [ 'white' ]
console.log(colors);    // [ 'blue', 'yellow', 'black' ]

// 从第1个位置，删除1个，并插入2个
console.log(colors.splice(1, 1, "#red", "#green")); // [ 'yellow' ]
console.log(colors);    // [ 'blue', 'red', 'green', 'black' ]

// 第1个位置插入元素
console.log(colors.splice(1, 0, "#ins")); // []
console.log(colors); // [ 'blue', '#ins', 'red', 'green', 'black' ]

console.log(colors.splice(2, 2, "#ins"));   // [ 'green', 'black' ]
console.log(colors); // [ 'blue', '#ins', 'red', '#ins' ]


// ----------------------------------------------------------------------------
// 复制元素：slice()
// ----------------------------------------------------------------------------
colors = ["blue", "white", "yellow", "black"];

// 克隆数组
let newColors = colors.slice();
console.log({ newColors }); // [ 'blue', 'white', 'yellow', 'black' ]
console.log(colors === newColors);  // false

newColors.push("red");
console.log({ colors });

// 复制数组
console.log(colors.slice(1, 3));

console.log("--------------------------------------");
function copyArray() {
    return Array.prototype.slice.call(arguments);
}
console.log(copyArray(1, 2, 3, 4, 5));


// ----------------------------------------------------------------------------
// indexOf() 和 lastIndexOf()
// ----------------------------------------------------------------------------
colors = ["blue", "white", "yellow", "black", "blue"];
console.log(colors.indexOf("blue"));    // 0
console.log(colors.indexOf("#blue"));   // -1
console.log(colors.lastIndexOf("blue"));    // 4


// ----------------------------------------------------------------------------
// includes() 和 find()
// ----------------------------------------------------------------------------
colors = ["blue", "white", "yellow", "black", "blue"];
console.log(colors.includes("blue"));  // true
console.log(colors.includes("#blue")); // false
console.log(colors.includes("white", 2));  // false

// 查找数组中第一个满足的元素
console.log(colors.find(color => color === "blue"));  // blue
console.log(colors.find(color => color === "#blue")); // undefined

const context = {
    name: "jack",
    age: 18,
    sex: "male"
};
colors.find(function (value, index, arrays) {
    console.log({ value, index, arrays });

    // 使用上下文时，不要使用箭头函数
    console.log(this.name); // this 指向 context
    return value === "blue";
}, context);
// {
//   value: 'blue',
//   index: 0,
//   arrays: [ 'blue', 'white', 'yellow', 'black', 'blue' ]
// }


// ----------------------------------------------------------------------------
// findIndex()，类似find的语法
// ----------------------------------------------------------------------------
colors = ["blue", "white", "yellow", "black", "blue"];
console.log(colors.findIndex(color => color === "blue"));  // 0

colors.findIndex(function (value, index, arrays) {
    // 使用上下文时，不要使用箭头函数
    console.log(this.name); // this 指向 context
    return value === "blue";
}, context);


// ----------------------------------------------------------------------------
// map 转换元素
// ----------------------------------------------------------------------------
colors = ["blue", "white", "yellow", "black", "blue"];
console.log(colors.map(color => color.toUpperCase()));  // [ 'BLUE', 'WHITE', 'YELLOW', 'BLACK', 'BLUE' ]

colors.map(function (value, index, arrays) {
    return value.toUpperCase();
}, context);


// ----------------------------------------------------------------------------
// filter 过滤元素
// ----------------------------------------------------------------------------
console.log(colors.filter(color => color === "blue"));  // [ 'blue', 'blue' ]
colors.filter(function (value, index, arrays) {
    return value === "blue";
}, context);


// ----------------------------------------------------------------------------
// reduce 累加元素 & reduceRight
// -----------------------------------------------------------------------------
colors = ["a", "b", "c", "d", "e"];
console.log(colors.reduce((pre, cur) => pre + cur.toUpperCase()));    // aBCDE
// 从右边开始累加，倒序
console.log(colors.reduceRight((pre, cur) => pre + cur.toUpperCase())); // eDCBA

colors.reduce(function (pre, cur, index, arrays) {
    console.log({ pre, cur, index, arrays });
    return false;
}); // { pre: 'a', cur: 'b', index: 1, arrays: [ 'a', 'b', 'c', 'd', 'e' ] }

// 带初始值, 指定了 initialValue，则 callbackFn 函数将在第一次调用时将 previousValue 初始化为 initialValue，并将 currentValue 初始化为第一个数组元素。
colors.reduce(function (pre, cur, index, arrays) {
    console.log({ pre, cur, index, arrays });
    return false;
}, "X"); // { pre: 'X', cur: 'a', index: 1, arrays: [ 'a', 'b', 'c', 'd', 'e' ] }


// ----------------------------------------------------------------------------
// 判断是否满足条件：every() 和 some()
// ----------------------------------------------------------------------------
colors = ["blue", "white", "yellow", "black", "blue"];
// 判断所有元素匹配条件
console.log(colors.every(color => color === "blue"));  // false
console.log(colors.every(color => color.length > 3));  // true

// 判断至少有一个满足条件
console.log(colors.some(color => color === "blue"));    // true
console.log(colors.some(color => color === "Xxx"));     // false


// ----------------------------------------------------------------------------
// 填充元素 fill()
// ----------------------------------------------------------------------------
colors = new Array(5);
console.log(colors.fill("1", 0, 3));    // [ '1', '1', '1', <2 empty items> ]
console.log(colors);    // [ '1', '1', '1', <2 empty items> ]

console.log(colors.fill("x")); // [ 'x', 'x', 'x', 'x', 'x' ]


// ----------------------------------------------------------------------------
// 数组排序： sort()
// ----------------------------------------------------------------------------
colors = ["blue", "white", "yellow", "black", "blue"];
console.log(colors.sort()); // [ 'black', 'blue', 'blue', 'white', 'yellow' ]
console.log(colors); // [ 'black', 'blue', 'blue', 'white', 'yellow' ]
console.log(colors.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
})); // [ 'yellow', 'white', 'blue', 'blue', 'black' ]


// ------------------------------------------------------------------------------
// 数组排序： toSorted() 排序但不更改原始数组
// ------------------------------------------------------------------------------
colors = ["blue", "white", "yellow", "black", "blue"];
const sorted = colors.toSorted((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
});
console.log(colors);    // [ 'blue', 'white', 'yellow', 'black', 'blue' ]
console.log(sorted);    // [ 'yellow', 'white', 'blue', 'blue', 'black' ]

console.log(colors.toSorted()); // [ 'black', 'blue', 'blue', 'white', 'yellow' ]

// 非数组排序
console.log(Array.prototype.toSorted.call(names));  // [ 'jack', 'jim', 'joe', 'lily', 'rose', 'tom' ]

// 稀疏数组排序
console.log(["jack", , "tom", "",,].toSorted());    // [ '', 'jack', 'tom', undefined, undefined ]


// ------------------------------------------------------------------------------
// 数组遍历：forEach()
// ------------------------------------------------------------------------------
colors = ["blue", "white", "yellow", "black", "blue"];
colors.forEach((value, index, arrays) => {
    console.log({value, index, arrays});
});


// ------------------------------------------------------------------------------
// 数组合并：concat()
// ------------------------------------------------------------------------------
colors = ["blue", "white", "yellow", "black", "blue"];
console.log(colors.concat("Xxx"));  // [ 'blue', 'white', 'yellow', 'black', 'blue', 'Xxx' ]
console.log(colors.concat(["Xxx", "#red", "#yellow"])); // [ 'blue', 'white', 'yellow', 'black', 'blue', 'Xxx', '#red', '#yellow' ]

// 合并后返回新数组
console.log(colors.concat(...["Xxx1", "#red2", "#yellow3"])); // [ 'blue', 'white', 'yellow', 'black', 'blue', 'Xxx1', '#red2', '#yellow3' ]
console.log(colors.concat("#CCC", "#ddd")); // [ 'blue', 'white', 'yellow', 'black', 'blue', '#CCC', '#ddd' ]

// 合并多个数组
const odds = [1, 3, 5];
const evens = [2, 4, 6];
console.log([].concat(odds, evens));    // [ 1, 3, 5, 2, 4, 6 ]


// ------------------------------------------------------------------------------
// 创建数组：of()
// ------------------------------------------------------------------------------
const bar = new Array(2);
console.log(bar);
console.log(bar.length);
console.log(bar.fill(1));

console.log(Array.of(7));       // [ 7 ]
console.log(Array.of(1, 2, 3));  // [ 1, 2, 3 ]

// 如果没有of 方法，可以用下面的方法创建数组
if (!Array.of) {
    Array.of = function () {
        return Array.prototype.slice.call(arguments);
    }
}


// ------------------------------------------------------------------------------
// 创建数组：from()
// ------------------------------------------------------------------------------
console.log(Array.from("ABCDEFG"));     // [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
console.log(Array.from("abc", (x) => x.toUpperCase()));     // [ 'A', 'B', 'C' ]
console.log(Array.from({length: 5}, (x, i) => i)); // [ 0, 1, 2, 3, 4 ]

const doubler = {
    factor: 2,
    double(x) {
        console.log(this); // { factor: 2, double: [Function: double] }
        return x * this.factor;
    },

}
const nums = [1, 2, 3, 4, 5];
// 参数 doubler 改变doubler.double方法的 this 指向
console.log(Array.from(nums, doubler.double, doubler)); // [ 2, 4, 6, 8, 10 ]

// 从可迭代对象创建数组
const even = {
    *[Symbol.iterator]() {
        for (let i = 0; i < 10; i += 2) {
            yield i;
        }
    }
}
console.log(Array.from(even));  // [ 0, 2, 4, 6, 8 ]


// ------------------------------------------------------------------------------
// 扁平化数组：flat()
// ------------------------------------------------------------------------------
const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr.flat());    // [ 1, 2, 3, 4, [ 5, 6, [ 7, 8, [ 9, 10 ] ] ] ]
// 改变深度
console.log(arr.flat(2));   // [ 1, 2, 3, 4, 5, 6, [ 7, 8, [ 9, 10 ] ] ]
console.log(arr.flat(Infinity));   // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const arr2 = [1, 2, , 3, ,];
// 删除稀疏数组
console.log(arr2.flat());   // [1, 2, 3]


// ------------------------------------------------------------------------------
// 扁平化数组：flatMap()
// ------------------------------------------------------------------------------
const subjects = ["math is JavaScript", , "english", "is", "", "chinese"];
console.log(subjects.flatMap((x) => x.split(" "))); // [ 'math', 'is', 'JavaScript', 'english', 'is', '', 'chinese' ]
console.log(subjects.flatMap((x, i, arrays) => {
    console.log({x, i, arrays});
    return x.split(" ");
}));


// ------------------------------------------------------------------------------
// 数组排序： toReversed() 反转数组，但不更改原始数组
// ----------
