/******************************************************************************
 * Exception try catch finally 异常捕捉
 *****************************************************************************/
try {
    let result = add(10, 20);
    console.log(result);
} catch (e) {
    console.log({name: e.name, message: e.message});
}

console.log('done');


// ----------------------------------------------------------------------------
// try catch finally 异常捕捉
// ----------------------------------------------------------------------------
try {
    let result = remove(10, 20);
    console.log(result);
} catch (e) {
    console.log({name: e.name, message: e.message});
} finally {
    console.log('finally');
}