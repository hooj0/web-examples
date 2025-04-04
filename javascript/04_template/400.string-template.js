/*******************************************************************************
 * 字符串模板
 *    - 字符串模板，使用${}表示变量，变量名可以包含字母、数字、下划线，不能以数字开头。
 *  示例：
 *      var str = `Hello, ${name}!`;
 *
 *  - 多行字符串：一个可以跨越多行的字符串。
 *  - 字符串格式化：能够将字符串的一部分替换为变量或表达式的值。此功能也称为字符串插值。
 *  - HTML 转义：能够转换字符串，使其安全地包含在 HTML 中。
 ******************************************************************************/
let template = `this is a template literal`;

console.log(template);
console.log(template.length);   // 23
console.log(typeof template);   // string


// -----------------------------------------------------------------------------
// 无需进行字符串引号转义
// -----------------------------------------------------------------------------
let escape_string = `this is a I'am "str"`;
console.log(escape_string);


// -----------------------------------------------------------------------------
// 多行字符串
// -----------------------------------------------------------------------------
let escape_html = `<div>
    <a href="http://www.baidu.com">百度</a>
</div>`;
console.log(escape_html);


// -----------------------------------------------------------------------------
// 字符串格式化
// -----------------------------------------------------------------------------
let name = 'Tom';
let str = `Hello, ${name}!`;
console.log(str);


let user = {
    name: 'Tom',
    age: 18,
    sex: '男',
    amount: 23424.3312
};

let str2 = `Hello, ${user.name}! Your age is ${user.age + 1}. ${user.amount.toFixed(2)}`;
console.log(str2);