/*******************************************************************************
 * Generator 生成器
 *    生成器是一个特殊的函数，在调用时，会返回一个迭代器，迭代器可以返回一个值，
 *    迭代器可以返回一个值，直到函数体结束。
 *    生成器函数使用 yield 关键字，yield 关键字用于返回一个值，并暂停函数的执行。
 *    生成器函数使用 yield* 关键字，yield* 关键字用于调用另一个生成器函数。
 * 总结：
 *    生成器由生成器函数 function* f(){} 创建。
 *    生成器在被调用时不会立即执行其主体。
 *    生成器可以中途暂停并从暂停的地方恢复执行。yield 语句暂停生成器的执行并返回一个值。
 *    生成器是可迭代的，因此您可以将它们与 for...of 循环一起使用
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


// -----------------------------------------------------------------------------
// 自增生成器
// -----------------------------------------------------------------------------
function* generateSequence() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const identifier = generateSequence();
console.log(identifier.next().value);   // 0
console.log(identifier.next().value);   // 1
console.log(identifier.next().value);   // 2
console.log(identifier.next().value);   // 3


// -----------------------------------------------------------------------------
// 使用生成器函数实现 range() 方法
// -----------------------------------------------------------------------------
class Range {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    *[Symbol.iterator]() {
        for (let nextVal = this.start; nextVal <= this.end; nextVal++) {
            yield nextVal;
        }
    }
}

console.log('------------------------------------------');
for (let num of new Range(1, 5)) {
    console.log(num);
}


// -----------------------------------------------------------------------------
// 使用生成器函数实现 数据结构
// -----------------------------------------------------------------------------
class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    *[Symbol.iterator]() {
        for (let item of this.items) {
            yield item;
        }
    }
}

console.log('------------------------------------------');
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());

for (let item of stack) {
    console.log(item);
}