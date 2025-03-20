/*******************************************************************************
 * Generator 生成器
 *    生成器是一个特殊的函数，在调用时，会返回一个迭代器，迭代器可以返回一个值，
 *    迭代器可以返回一个值，直到函数体结束。
 *    生成器函数使用 yield 关键字，yield 关键字用于返回一个值，并暂停函数的执行。
 *    生成器函数使用 yield* 关键字，yield* 关键字用于调用另一个生成器函数。
 ******************************************************************************/


// -----------------------------------------------------------------------------
// 生成器函数
// function* 表示是生成器
// yield 表示暂停，返回值
// -----------------------------------------------------------------------------
function* sayHello() {
    console.log('Hello');
    yield 1;
    console.log('World');
    yield 2;
    console.log('!');
}

// 生成器可以中途暂停，然后从暂停的地方继续。
let generator = sayHello();
console.log(generator); // Generator {<suspended>} 返回生成器对象

// next 方法可以调用生成器函数，并返回一个迭代器。
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: undefined, done: true }

console.log('------------------------------------------');
// for...of 循环可以遍历生成器函数，并返回一个迭代器。
for (let value of sayHello()) {
    console.log("yield ==>>", value);
}