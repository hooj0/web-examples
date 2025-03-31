/********************************************************************************
 * 顶层 导入 await 模块
 *      - 顶层 await 模块的行为类似于 async 函数。
 *      - 当模块导入顶层 await 模块时，它会等待顶层 await 模块完成，然后再评估其主体。
 ********************************************************************************/
import promise, {html} from "./2004.module-import-await-lib.js";

function render(html) {
    if (!html) {
        throw "html is empty.";
    }

    return `<iframe>${html}</iframe>`
}

// 等待导入结果
promise.then(() => {
    console.log(render(html));
}).catch(console.log);


// -------------------------------------------------------------------------------
// 导入的 html5 是 await 方式
// -------------------------------------------------------------------------------
import {html5} from "./2004.module-import-await-lib.js";

function renderHtml5(html) {
    if (!html) {
        throw "html is empty.";
    }

    return `<iframe>${html}</iframe>`
}

console.log(renderHtml5(html5));


// -------------------------------------------------------------------------------
// 等待导入结果
// -------------------------------------------------------------------------------
let module = await import("./2004.module-import-await-lib.js");
console.log(module.html5);