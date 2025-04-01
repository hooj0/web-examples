/******************************************************************************
 * IndexedDB
 *****************************************************************************/
if (!window.indexedDB) {
    alert('IndexedDB not supported');
}
console.log('IndexedDB: ', window.indexedDB);

// 打开数据库
const db = window.indexedDB.open('test-db', 3);

db.onerror = function (e) {
    console.log('db error: ', e.target);
};

db.onsuccess = function (e) {
    console.log('db success: ', e);

    let testDB = e.target.result;
    addData(testDB, {name: '张三', age: 18});
    putData(testDB, {name: '李四', age: 20});

    getData(testDB, 1);
    getData(testDB, 2);
};

// 首次打开时，创建数据库触发。如果版本号变得也会触发
// 可以使用 onupgradeneeded 事件处理程序来初始化对象存储和索引
db.onupgradeneeded = function (e) {
    console.log('db upgrade: ', e.target);

    // 获取数据库
    const testDB = e.target.result;
    if (!testDB.objectStoreNames.contains('test-store')) {
        // 创建对象存储, keyPath 为主键，autoIncrement 为自增
        const store = testDB.createObjectStore('test-store', {
            keyPath: 'id',
            autoIncrement: true
        });

        // 创建索引, 索引名称，索引字段，索引配置
        store.createIndex('name', 'name', { unique: false });
        store.createIndex('age', 'age', { unique: false });
    }
};

// 插入数据到对象存储
function addData(testDB, data) {
    const transaction = testDB.transaction('test-store', 'readwrite');
    const store = transaction.objectStore('test-store');
    let request = store.add(data);
    console.log(request.result)
}

function putData(testDB, data) {
    const transaction = testDB.transaction('test-store', 'readwrite');
    const store = transaction.objectStore('test-store');

    let request = store.put(data);
    request.onsuccess = function (e) {
        console.log('put success: ', e.target);
    };
    request.onerror = function (e) {
        console.log('put error: ', e);
    };

    transaction.oncomplete = function (e) {
        console.log('put complete: ', e);
        testDB.close();
    };
}

function getData(testDB, key) {
    const transaction = testDB.transaction('test-store', 'readonly');
    const store = transaction.objectStore('test-store');

    let request = store.get(key);
    request.onsuccess = function (e) {
        console.log('get success: ', e.target.result);
    };
    request.onerror = function (e) {
        console.log('get error: ', e);
    };

    transaction.oncomplete = function (e) {
        testDB.close();
    }
}

