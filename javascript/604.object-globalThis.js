/********************************************************************************
 * Object.globalThis：为了标准化这一点，ES2020 引入了 globalThis，它在所有环境中都可用。
 *   环境             全局
 * ----------------------------
 *  Web 浏览器         this
 *  Web Workers	      self
 *  Node.js	          global
 ********************************************************************************/
const canFetch = typeof globalThis.fetch === 'function';
console.log(canFetch);  // true

// Web 浏览器中返回 true
// console.log(globalThis === window);