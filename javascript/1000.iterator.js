/*******************************************************************************
 * Iterator (ES6) 迭代器
 *      - ES6 引入了 Iterator 接口，为各种不同的数据结构提供统一的访问机制。
 *      - Iterator 的作用有三个：
 *          1. 为各种数据结构，提供一个统一的、简便的访问接口；
 *          2. ES6 原生提供 Iterator 接口，
 *              Array、Map、Set、String、函数参数对象（arguments）等等都是 Iterator。
 *              遍历器对象（Iterator）是一个接口，
 *              它的实现是各种数据结构（Array、Map、Set、String）的 Symbol.iterator 属性。
*           3. Iterator 接口主要供 for...of 循环使用，
 ******************************************************************************/
class Range {
    constructor(start = 0, end = Infinity) {
        this.start = start;
        this.end = end;
    }

    // 1. 创建一个遍历器对象
    [Symbol.iterator]() {
        let nextVal = this.start;
        let count = 0;
        return {
            // 2. 遍历器对象必须实现 next 方法
            next: () => {
                // this.end 的 this 指向遍历器对象（返回的 { next() { ... } }），而非 Range 实例。因此 this.end 的值为 undefined
                // 使用箭头函数 的 next方法或者 使用箭头函数的 this.end 的 this 指向 Range 实例。
                if (nextVal <= this.end) {
                    let result = {
                        value: nextVal,
                        done: false
                    };

                    nextVal++;
                    count++;
                    return result;
                }

                return { done: true, value: count};
            },

            // return 方法可以终止迭代
            return: () => {
                console.log('return .......');
                return { done: true };
            }
        }
    }
}

let range = new Range(3, 10);
for (const val of range) {
    console.log(val);  // 3 4 5 6 7 8 9 10
    if (val > 5) {
        break; // 跳出循环，触发 return 方法 的效果
    }
}
console.log(range);


// -----------------------------------------------------------------------------
// 显示的调用iterator
// -----------------------------------------------------------------------------
let iterator = range[Symbol.iterator]();
let result = iterator.next();
console.log(result);

while (!result.done) {
    console.log(result.value);

    result = iterator.next();
    if (result.value > 5) {
        break; // 跳出循环，触发 return 方法 的效果
    }
}