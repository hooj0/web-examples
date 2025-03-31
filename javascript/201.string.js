/*******************************************************************************
 *  字符串常用方法：
 *      - search()	检索与正则表达式相匹配的值
 *      - indexOf()	返回字符串中检索指定字符第一次出现的位置
 *      - lastIndexOf()	返回字符串中检索指定字符最后一次出现的位置
 *      - includes() – 检查字符串是否包含子字符串。
 *      - startsWith() – 检查字符串是否以另一个字符串开头。
 *      - endsWith() – 确定字符串是否以另一个字符串结尾。
 *
 *      - trim()	移除字符串首尾空白
 *      - trimStart() – 删除字符串开头的空白字符。
 *      - trimEnd() – 删除字符串结尾的空白字符
 *
 *      - padStart() – 使用另一个字符串填充当前字符串（从左侧开始）
 *      - padEnd() – 使用另一个字符串填充当前字符串（从右侧开始）
 *
 *      - split()	把字符串分割为子字符串数组
 *      - substring()	提取字符串中两个指定的索引号之间的字符
 *      - substr()	从起始索引号提取字符串中指定数目的字符
 *      - slice()	提取字符串的片断，并在新的字符串中返回被提取的部分
 *
 *      - concat()	连接两个或多个字符串，返回连接后的字符串
 *      - replace()	替换与正则表达式匹配的子串
 *      - replaceAll()	替换与正则表达式匹配的子串
 *
 *      - toUpperCase()	把字符串转换为大写
 *      - toLowerCase()	把字符串转换为小写
 *
 *      - match()	找到一个或多个正则表达式的匹配
 *      - charAt()	返回指定索引位置的字符
 *      - charCodeAt()	返回指定索引位置字符的 Unicode 值
 *      - fromCharCode()	将指定的 Unicode 值转换为字符串
 *      - localeCompare()	用本地特定的顺序来比较两个字符串
 *      - toLocaleLowerCase()	根据主机的语言环境把字符串转换为小写，只有几种语言（如土耳其语）具有地方特有的大小写映射
 *      - toLocaleUpperCase()	根据主机的语言环境把字符串转换为大写，只有几种语言（如土耳其语）具有地方特有的大小写映射
 *      - toString()	返回字符串对象值
 *      - valueOf()	返回某个字符串对象的原始值
 ******************************************************************************/

// ----------------------------------------------------------------------------
// 1. search()	检索与正则表达式相匹配的值
// ----------------------------------------------------------------------------
let str = 'Hello World!';
let reg = /World/;

console.log(str.search(reg)); // 6
console.log(str.search(/[a-z]/));   // 1

console.log(str.indexOf('World')); // 6
console.log(str.indexOf('l'));  // 2

console.log(str.lastIndexOf('World')); // 6
console.log(str.lastIndexOf('l'));  // 9

console.log(str.includes('World')); // true
console.log(str.includes('ldd'));  // false

console.log(str.startsWith('Hello')); // true
console.log(str.startsWith('World'));  // false

console.log(str.endsWith('!')); // true
console.log(str.endsWith('World'));  // false

str = '   Hello World!   ';
console.log(str.trim()); // Hello World!
console.log(str.trimStart());   // Hello World!
console.log(str.trimEnd());     //   Hello World!

console.log(str.padStart(20, '*')); // ******Hello World!
console.log(str.padEnd(20, '*'));   // Hello World!******

str = 'Hello World!';
console.log(str.split(' '));    // ['Hello', 'World!']
console.log(str.split(' ', 1)); // ['Hello']

console.log(str.substring(1, 4)); // ell
console.log(str.substr(1, 4));   // ell

console.log(str.slice(1, 4));   // ell
// 从后面开始
console.log(str.slice(-4));     // rld!

console.log(str.concat(' ', 'Hello')); // Hello World! Hello
console.log(str.replace('World', 'World!'));    // Hello World!
console.log(str.replace(/World/g, 'World!'));   // Hello World! World!
console.log(str.replaceAll("l", ''));    // Hello World! World!

console.log(str.toUpperCase()); // HELLO WORLD!
console.log(str.toLowerCase()); // hello world!

console.log(str.match(/[a-z]/g));   // ['e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
console.log(str.match(/[a-z]/));    // ['e']

console.log(str.charAt(1)); // l
console.log(str.charCodeAt(1)); // 108

console.log(String.fromCharCode(108)); // l
console.log(String.fromCharCode(108, 111)); // lo
console.log(String.fromCharCode(108, 111, 119)); // low

console.log(str.localeCompare('Hello World!')); // 0
console.log(str.localeCompare('Hello World!', 'en', {sensitivity: 'base'})); // 0

console.log(str.toLocaleLowerCase());   // hello world!
console.log(str.toLocaleUpperCase());   // HELLO WORLD!

console.log(str.toString());    // Hello World!
console.log(str.valueOf());     // Hello World!