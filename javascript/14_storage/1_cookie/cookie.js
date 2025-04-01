/*******************************************************************************
 * Cookie 客户端存储
 ******************************************************************************/
class Cookie {
    // 设置 cookie，添加编码和参数校验
    static set(name, value, options = {}) {
        // 参数校验
        if (typeof name !== 'string') {
            throw new TypeError('name must be strings');
        }

        // 编码处理特殊字符
        const encodedName = encodeURIComponent(name);
        const encodedValue = encodeURIComponent(value);

        let cookieStr = `${encodedName}=${encodedValue}`;
        // 过滤非自身属性并处理特殊值
        Object.entries(options).forEach(([key, val]) => {
            cookieStr += `; ${key}${val !== undefined ? '=' + val : ''}`;
        });

        console.log('cookieStr: ', cookieStr);
        document.cookie = cookieStr;
    }

    // 安全获取 cookie，处理空格和解码
    static get(name) {
        const encodedName = encodeURIComponent(name);
        const cookieItem = document.cookie
            .split(';')
            .map(c => c.trim())
            .find(c => c.startsWith(encodedName + '='));

        return cookieItem
            ? decodeURIComponent(cookieItem.split('=', 2)[1])
            : undefined;
    }

    // 支持自定义路径的删除方法
    static remove(name, options = { path: '/' }) {
        // 强制过期并覆盖路径参数
        Cookie.set(name, '', {
            ...options,
            expires: new Date(0),
            maxAge: -1 // 双重保障
        });
    }
}


// 获取 cookie
console.log('cookie: ', document.cookie);

// 设置 cookie，注意：设置错误的path将导致无法设置cookie，必须和浏览器URL路径进行关联
document.cookie= 'name=tom';
document.cookie= 'age=122; path=/';
document.cookie = "username=Doe; expires=Mon, 01 Apr 2025 12:00:00 UTC; path=/web-examples/javascript/";


// ------------------------------------------------------------------------------
// 利用 Cookie 类
// ------------------------------------------------------------------------------
// 设置带路径的 cookie
Cookie.set('token', 'abc123', {
    expires: new Date(Date.now() + 86400),
    path: '/'
});

Cookie.set('username', 'jack', {
    expires: new Date(Date.now() + 86400),
    path: '/web-examples/javascript/14_storage/',
    secure: true,
    sameSite: 'Strict'
});

// 安全获取
console.log(Cookie.get('token'));
console.log(Cookie.get('username'));
console.log(Cookie.get('name'));
console.log(Cookie.get('age'));

// 路径隔离删除
Cookie.remove('token', { path: '/' });