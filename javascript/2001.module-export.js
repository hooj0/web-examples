/********************************************************************************
 * module export 模块导出
 *      - ES6 允许模块化的导出 JS代码，并使用 import 引入。
 *      - 使用 export 关键字导出模块，使用 import 关键字引入模块。
 *      - 使用 export default 关键字导出默认模块，使用 import 关键字引入模块。
 *      - 使用 export * as 关键字导出模块，使用 import 关键字引入模块。
 *      - 使用 export { ... } 关键字导出模块，使用 import 关键字引入模块。
 *      - 使用 export * 关键字导出模块，使用 import 关键字引入模块。
 *
 * 可导出类型：变量、函数、类等
 * 一个模块可以具有多个命名导出，但只有一个默认导出
 ********************************************************************************/

// ------------------------------------------------------------------------------
// 命名导出
// ------------------------------------------------------------------------------
let name = '小明';
export {name};

// 和上面的导出一样，一行写法更简洁
export let age = 18;

// 导出常量
export const SEX = '男';

// 导出多个变量
let username = '小明';
const MIN = 18, MAX = 60;
export {username, MIN, MAX};


// ------------------------------------------------------------------------------
// 函数导出
// ------------------------------------------------------------------------------
function sayHi(name) {
    console.log('hi, my name is ' + name);
}

export {sayHi};

export function sayHello(name) {
    console.log('hello, my name is ' + name);
}


// ------------------------------------------------------------------------------
// 导出类
// ------------------------------------------------------------------------------
class Person {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log('hi, my name is ' + this.name);
    }
}

export {Person};

export class Student extends Person {
    constructor(name) {
        super(name);
    }

    sayHello() {
        console.log('hello, my name is ' + this.name);
    }
}


// ------------------------------------------------------------------------------
// 默认导出
// ------------------------------------------------------------------------------
let message = 'HELLO WORLD';
// export default message;

let content = 'hello world';
// export { content as default}

// export default function () {
//     console.log('hello world, NO NAME');
// };

// export default function sayHallo() {
//     console.log('hello world');
// }

export default class Hello {
    constructor() {
        console.log('hello world');
    }
}


// ------------------------------------------------------------------------------
// 重命名导出
// ------------------------------------------------------------------------------
class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log('hi, my name is ' + this.name);
    }
}

export {User as MyUser};

export {
    Person as MyPerson,
    Student as MyStudent,
    Hello as MyHello
}

// 导入的模块也可以在导入时重命名它
export {
    name as myName,
    age as myAge,
    SEX as mySex,
    sayHi as mySayHi,
}


// ------------------------------------------------------------------------------
// 模块导入并导出
// ------------------------------------------------------------------------------
import {testString} from "./2000.module-lib.js";
export {testString};

// 导入并导出
export {testString as myTest} from "./2000.module-lib.js";