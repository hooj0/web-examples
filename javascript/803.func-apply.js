/********************************************************************************
 * 函数 apply：
 *   - apply 方法调用函数，并改变函数中的 this 指向
 *   - apply 方法接受两个参数，第一个参数是 this 指向的对象，第二个参数是数组
 *   - apply 方法接受一个数组作为参数，数组中的每个元素作为函数的参数
 *   - apply 方法返回函数的返回值
 *   - apply 方法与 call 方法的区别：call 方法接受多个参数，apply 方法接受一个数组
 * apply 语法：
 *   - function.apply(thisArg, [argsArray])
 *   - thisArg：函数调用者，默认为全局对象
 *   - argsArray：数组，数组中的每个元素作为函数的参数
 *   - 返回值：函数的返回值
 *******************************************************************************/
const person = {
    name: "Jack",
    addr: "china"
};

const say = function (age, sex) {
    console.log("hello, my name is " + this.name + ", my age is " + age + ", my sex is " + sex);
    return this.name;
};

console.log(say.apply(person, [18, "male"])); // hello, my name is Jack, my age is 18, my sex is male
console.log(say.apply(person, [19, "female"])); // hello, my name is Jack, my age is 19, my sex is female

// ------------------------------------------------------------------------------
// 方法借用
// ------------------------------------------------------------------------------
const user = {
    name: "Jack",
    addr: "china",
    show: function () {
        console.log("hello, my name is " + this.name);
    },
    display: function () {
        console.log("hi, my addr is " + this.addr);
    },
};

const tom = {
    name: "Tom",
    addr: "america",
};

// tom 借用 user 的 show 和 display 方法
user.show.apply(tom);
user.display.apply(tom);


// ------------------------------------------------------------------------------
// apply 将一个数组追加到 另一个数组
// ------------------------------------------------------------------------------
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr1.push.apply(arr1, arr2);
console.log(arr1);  // [1, 2, 3, 4, 5, 6]