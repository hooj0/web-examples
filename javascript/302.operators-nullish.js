/*******************************************************************************
 * 空值运算符
 *   - 空值合并运算符 (??) 是一种逻辑运算符，它接受两个值，如果第一个值为 null 或 undefined，则返回第二个值。
 *   - 空值合并运算符是短路运算符，不能直接与逻辑 AND 或 OR 运算符组合使用。
 ******************************************************************************/

const nullable = null;
const unknown = undefined;
const empty = "";
const flag = false;

// -----------------------------------------------------------------------------
// 判断处理 null 或 undefined 值情况，以及 空字符串情况和 false 情况
// -----------------------------------------------------------------------------
let result = nullable || "a";
console.log(result);    // a

result = unknown || "b";
console.log(result);    // b

result = empty || "c";
console.log(result);    // c

result = flag || "d";
console.log(result);    // d


// -----------------------------------------------------------------------------
// 判断处理 null 或 undefined 值情况
// -----------------------------------------------------------------------------
result = nullable ?? "a";
console.log(result);    // a

result = unknown ?? "b";
console.log(result);    // b

result = empty ?? "c";
console.log(result);    // ""

result = flag ?? "d";
console.log(result);    // false