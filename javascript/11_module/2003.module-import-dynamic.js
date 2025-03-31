/********************************************************************************
 * 动态导入
 *      - import() 接受一个模块说明符 (moduleSpecifier)，
 *          它与用于 import 语句的模块说明符具有相同的格式。
 *          此外，moduleSpecifier 可以是一个表达式，该表达式计算为字符串。
 *      - import() 返回一个Promise，该 Promise 在模块完全加载后将被兑现
 *
 * 总结
 *      - 使用 JavaScript import() 动态加载模块。
 *      - import() 返回一个 Promise，该 Promise 在模块完全加载后将被兑现。
 *      - 使用 async / await 处理 import() 的结果。
 *      - 使用 Promise.all() 方法一次加载多个模块。
 *      - 使用对象解构将变量分配给模块的导出对象。
 *      - 使用 default 关键字访问默认导出
 ********************************************************************************/
import("./2000.module-lib.js").then(module => {
    console.log(module);

    module.testString("import dynamic");
});

import("./2000.module-lib.js").then(module => {
    module.testString("import dynamic 3");
}).catch((error) => {
    console.log(error);
});


// ------------------------------------------------------------------------------
// 异步等待方式导入
// ------------------------------------------------------------------------------
// 等待导入后执行
let module = await import("./2000.module-lib.js");
module.testString("await import dynamic 2");

let { testString, myTest} = await import("./2001.module-export.js");
testString("await import dynamic 5");
myTest("await myTest");


// ------------------------------------------------------------------------------
// 动态导入，导入多个模块 加载模块
// ------------------------------------------------------------------------------
Promise.all([
    import("./2000.module-lib.js"),
    import("./2001.module-export.js")
]).then(([module1, module2]) => {
    module1.testString("import dynamic 4");
    module2.myTest("toLocaleUpperCase");

    // 访问默认导入
    console.log(module2.default);
});