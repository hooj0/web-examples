/***************************************************************************
 * 常量，常量不能修改不可赋值
 *  - const 大写命名 硬编码变量数据
 *  - const 常量小写命名 函数、对象赋值等
 * https://www.w3school.com.cn/js/js_const.asp
 ***************************************************************************/
const f = undefined;
const g = null;

console.log(f);
console.log(g);

// 以下编译不通过
// f = 1;
// g = true;

const size = 12;
// 硬编码变量 使用常量申明并大写命名
const COLOR = 'red';

console.log(size);
console.log(COLOR);

