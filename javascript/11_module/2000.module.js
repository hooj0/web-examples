/******************************************************************************
 * Modules 模块ES6
 *      - ES6 模块允许您将 JavaScript 文件组织成模块。
 *      - ES 模块是 JavaScript 文件，它们在严格模式下执行。
 *      - 使用 export 语句导出变量、函数和类。
 *      - 使用 import 语句从其他模块导入变量、函数和类。
 *      - 在脚本标签中使用 type="module" 指示 Web 浏览器将 JavaScript 文件加载为模块。
 *
 *      - 模块文件扩展名为 .mjs。
 *
 * 注意：
 *      如果模块中定义了export，则必须通过import引入
 *      import {testString} from "./201.string.js";
 *
 *      如果模块中定义了export default，则必须通过import引入
 *      import testString from "./201.string.js";
 *
 *      如果需要在HTML中引入模块，则必须通过script标签引入
 *      <script type="module" src="./2000.modules.js"></script>
 *****************************************************************************/
import {
    testString
} from "./2000.module-lib.js";

testString("import modules");