/*******************************************************************************
 * 全局通用的函数
 ******************************************************************************/
console.log(typeof Infinity);   // number

// 检查无穷大
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity));    // false
console.log(Number.isFinite(11));   // true

// 检查是否为数字
console.log(Number.isNaN(NaN));  // true
console.log(Number.isInteger(11));  // true

// 转换数字
console.log(Number("244")); // 244
console.log(Number.parseInt('11')); // 11
console.log(Number.parseInt('10cm'));   // 10
console.log(Number.parseInt('iam 10')); // NaN
console.log(Number.parseFloat('11')); // 11

// 保留小数
let num = 1.23456564646456;
console.log(num.toFixed(2));    // 1.23
console.log(num.toExponential(3));  // 1.2346e+0
console.log(num.toPrecision(3)); // 1.23

let x = 9.12345;
console.log(x.toPrecision());    // '9.12345'
console.log(x.toPrecision(4));   // '9.123'
console.log(x.toPrecision(3));   // '9.12'
console.log(x.toPrecision(2));   // '9.1'
console.log(x.toPrecision(1));   // '9'

// 进制转换
console.log(Number(0xff));  // 255
console.log(Number(0b1111));    // 15
console.log(Number(0o77));      // 63
console.log(Number(0xff).toString(2)); // 11111111
console.log(Number(0o77).toString(2));  // 111
console.log(Number(0xff).toString(8));  // 377
console.log(Number(0o77).toString(8));  // 77
console.log(Number(0xff).toString(16)); // ff
console.log(Number(0o77).toString(16)); // 77

console.log(Number(10).toString());         // 10
console.log(Number(10).toString(2));    // 1010
console.log(Number(10).toString(8));    // 12
console.log(Number(10).toString(16));   // a

const NUM = new Number(10);
console.log(typeof NUM);    // object
console.log(typeof num);    // number
console.log(NUM instanceof Number); // true
console.log(num instanceof Number); // false

// 数学函数
console.log(Math.PI);   // 3.141592653589793
console.log(Math.max(1, 2, 3, 4, 5));   // 5
console.log(Math.min(1, 2, 3, 4, 5));   // 1
console.log(Math.random());         // 0 - 1
console.log(Math.round(1.5));    // 2


// JSON 格式化
console.log(JSON.stringify({name: 'zhangsan', age: 18})); // {"name":"zhangsan","age":18}
console.log(JSON.parse('{"name":"zhangsan","age":18}'));    // {name: 'zhangsan', age: 18}

// -----------------------------------------------------------------------------
// 将 URL 参数 转换为对象
// -----------------------------------------------------------------------------
const urls = new URLSearchParams('name=张三&age=20&gender=男');
console.log(Object.fromEntries(urls)); // { name: '张三', age: '20', gender: '男' }