/******************************************************************************
 * 函数
 *****************************************************************************/

// -----------------------------------------------------------------------------
// arguments 对象
// -----------------------------------------------------------------------------
function foo() {
    console.log(arguments);       // [Arguments] { '0': 'a', '1': 'b', '2': 3, '3': { a: 1, y: 3 } }
    console.log(arguments.length);  // 4
    console.log(arguments[0]);      // a
    console.log(arguments[1]);      // b
    console.log(arguments[2]);      // 3
}

foo("a", 'b', 3, {"a": 1, "y": 3});


// -----------------------------------------------------------------------------
// 箭头函数
// -----------------------------------------------------------------------------
let foo2 = function () {
    console.log("foo2")
}

const bar = () => {
    console.log("bar");
};

bar();  // bar

// 省略大括号
const baz = (x) => console.log(x);

baz("baaaazz"); // baaaazz


// ---------------------------------------------------------------------------
// 函数的默认参数
// ---------------------------------------------------------------------------
function defaultParams(x = 1, y = 2) {
    console.log(x, y);
}

defaultParams();        // 1 2
defaultParams(y = 3);   // 3 2
defaultParams(4, 5); // 4 5

// 当传入的实参是undefined时，默认参数生效
defaultParams(undefined, 5);    // 1 5

function requiredArg() {
    throw new Error('The argument is required');
}
function add(x = requiredArg(), y = requiredArg()){
    return x + y;
}

// add(10); // Error: The argument is required
add(10,20); // OK