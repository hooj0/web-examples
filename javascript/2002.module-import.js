/********************************************************************************
 * module import 模块导入
 *      - JavaScript 代码结构化为模块并在它们之间共享值（变量、函数、类等）
 *      - 模块化开发，可维护性高，可测试性高，可维护性高，可扩展性高
 *      - 要从模块导入值，请使用import关键字
 *      - HTML 中 通过在 script 标签中指定type="module"来实现
 *      
 * 总结：
 *      - 简单导入
 *      - 多个export 导入合并成一个
 *      - 默认导入，通过default关键字
 *      - 导入别名
 *      - 命名空间导入，通过命名空间引用方法、变量
 ********************************************************************************/
import {name} from './2001.module-export.js';
console.log(name);

import { age } from './2001.module-export.js';
console.log(age);

import { SEX } from './2001.module-export.js';
console.log(SEX);

import { username, MIN } from './2001.module-export.js';
console.log(username, MIN);


// -------------------------------------------------------------------------------
// 函数导入
// -------------------------------------------------------------------------------
import { sayHi } from './2001.module-export.js';
sayHi("tom");

import { sayHello } from './2001.module-export.js';
sayHello("jack");


// -------------------------------------------------------------------------------
// 类导入
// -------------------------------------------------------------------------------
import { Person } from './2001.module-export.js';
new Person("jack").sayHi();

import {Student} from "./2001.module-export.js";
new Student("tom", 18, "男").sayHello();


// -------------------------------------------------------------------------------
// 默认导入
// -------------------------------------------------------------------------------
// import { default as defaultName } from './2001.module-export.js';
// console.log(defaultName);

// import message from "./2001.module-export.js";
// console.log(message);

// import content from "./2001.module-export.js";
// console.log(content);

// 导入匿名函数
// import noName from "./2001.module-export.js";
// noName();

// 导入 函数
// import sayHallo from "./2001.module-export.js";
// sayHello("Xxxx");

// 导入类
import Hello from './2001.module-export.js';
new Hello();


// --------------------------------------------------------------------------------
// 导入对象和别名
// --------------------------------------------------------------------------------
import { MyUser } from './2001.module-export.js';
new MyUser("Lyxn").sayHi();

import { name as myName, age as myAge, SEX as mySex } from './2001.module-export.js';
console.log(myName, myAge, mySex);


// --------------------------------------------------------------------------------
// 导入 导出的导入
// --------------------------------------------------------------------------------
import { myTest } from './2001.module-export.js';
myTest(".....")


// --------------------------------------------------------------------------------
// 合并导入：将多个export 语句合并成一个导入
// --------------------------------------------------------------------------------
import { testString, myTest as myTestString } from './2001.module-export.js';

testString("test.");
myTestString("test string.");


// ---------------------------------------------------------------------------------
// 命名空间导入
// ---------------------------------------------------------------------------------
import * as myModule from './2001.module-export.js';

console.log(myModule);
console.log(myModule.MIN);
myModule.sayHello("NAMESPACE")