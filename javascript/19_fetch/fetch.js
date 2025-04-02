/*******************************************************************************
 * fetch api:
 *      https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 * 语法：
 *      fetch(url, options)
 *      参数：
 *          url：请求地址
 *          options：请求选项，可选
 *      返回值：
 *          Promise对象
 ******************************************************************************/
fetch('https://api.github.com/users/octocat').then(response => {
    console.log(response.status, response.statusText, response.ok);
}).catch(error => {
    console.log(error);
});


// ------------------------------------------------------------------------------
// 使用同步方式
// ------------------------------------------------------------------------------
const response = await fetch('https://api.github.com/users/octocat');
const json = await response.json(); // 除json，还有 text()、blob()、formData() 和 arrayBuffer()
console.log(json);


// ------------------------------------------------------------------------------
// 使用请求选项
// ------------------------------------------------------------------------------
const response2 = await fetch('https://api.github.com/users/octocat', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    // 请求体
    body: JSON.stringify({
        name: 'octocat'
    })
});
const json2 = await response2.json();
console.log(json2);