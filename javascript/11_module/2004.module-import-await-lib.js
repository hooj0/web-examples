let html;
export default (async () => {
    const response = await fetch('https://www.baidu.com');
    html = await response.text();
    // html = await fetch('https://www.baidu.com').then(res => res.text());
    // console.log(html);
})();

export {html};


const response = await fetch('https://www.baidu.com');
const html5 = await response.text();

export {html5};