/******************************************************************************
 * 箭头函数
 ******************************************************************************/
const add = (a, b) => a + b;
console.log(add(1, 2));

const add2 = (a, b) => {
  return a + b;
};
console.log(add2(1, 2));

console.log(typeof add);    // function
console.log(add instanceof Function); // true


// 箭头函数排序
let nums = [1, 2, 3, 4, 5];
nums.sort((a, b) => -a - b);
console.log(nums);

// 单个参数的箭头函数
let data = nums.map(item => item * 2);
console.log(data);

let out = () => console.log("hi");
out();