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
    // addData(testDB, {name: '张三', age: 18});
    // putData(testDB, {name: '李四', age: 20});

    getData(testDB, 1);
    getData(testDB, 2);

    getByName(testDB, '张三');
    getAllData(testDB);
    cursorData(testDB);

    deleteData(testDB, 2);
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
        store.createIndex('name', 'name', {unique: false});
        store.createIndex('age', 'age', {unique: false});
    }
};

// 插入数据到对象存储
function addData(testDB, data) {
    const transaction = testDB.transaction('test-store', 'readwrite');
    const store = transaction.objectStore('test-store');
    let request = store.add(data);
    console.log(request);
}

function putData(testDB, data) {
    const transaction = testDB.transaction('test-store', 'readwrite');
    const store = transaction.objectStore('test-store');

    let request = store.put(data);
    request.onsuccess = function (e) {
        console.log('put success: ', e.target.result);
    };
    request.onerror = function (e) {
        console.log('put error: ', e.target.error);
    };

    transaction.oncomplete = function (e) {
        console.log('put complete: ', e);
        testDB.close();
    };
}

// 获取数据
function getData(testDB, key) {
    const transaction = testDB.transaction('test-store', 'readonly');
    const store = transaction.objectStore('test-store');

    let request = store.get(key);
    request.onsuccess = function (e) {
        if (!e.target.result) {
            console.log('no data');
            return;
        }

        console.table(e.target.result);
    };

    request.onerror = function (e) {
        console.log('get error: ', e.target.error);
    };

    transaction.oncomplete = function (e) {
        console.log('get complete: ', e);
        testDB.close();
    };
}

// 通过索引获取数据
function getByName(testDB, name) {
    const transaction = testDB.transaction('test-store', 'readonly');
    const store = transaction.objectStore('test-store');
    if (!store.indexNames.contains('name')) {
        console.log('no index');
        return;
    }

    let request = store.index('name').get(name);
    request.onsuccess = function (e) {
        if (!e.target.result) {
            console.log('no data');
            return;
        }

        console.table(e.target.result);
    };

    request.onerror = function (e) {
        console.log('get error: ', e.target.error);
    };

    transaction.oncomplete = function (e) {
        console.log('get complete: ', e);
        testDB.close();
    };
}

// 获取所有数据
function getAllData(testDB) {
    const transaction = testDB.transaction('test-store', 'readonly');
    const store = transaction.objectStore('test-store');
    let request = store.getAll();
    request.onsuccess = function (e) {
        if (!e.target.result) {
            console.log('no data');
            return;
        }

        console.table(e.target.result);
    };

    request.onerror = function (e) {
        console.log('get all error: ', e.target.error);
    };

    transaction.oncomplete = function (e) {
        console.log('get all complete: ', e);
        testDB.close();
    };
}

// 游标遍历数据
function cursorData(testDB) {
    const transaction = testDB.transaction('test-store', 'readonly');
    const store = transaction.objectStore('test-store');
    let request = store.openCursor();
    request.onsuccess = function (e) {
        let cursor = e.target.result;
        if (cursor) {
            console.table(cursor.value);
            cursor.continue();
        }
    };

    request.onerror = function (e) {
        console.log('cursor error: ', e.target.error);
    };

    transaction.oncomplete = function (e) {
        console.log('cursor complete: ', e);
        testDB.close();
    };
}

// 删除数据
function deleteData(testDB, key) {
    const transaction = testDB.transaction('test-store', 'readwrite');
    const store = transaction.objectStore('test-store');

    let request = store.delete(key);
    request.onsuccess = function (e) {
        console.log('delete success: ', e.target.result);
    };

    request.onerror = function (e) {
        console.log('delete error: ', e.target.error);
    };

    transaction.oncomplete = function (e) {
        console.log('delete complete: ', e);
        testDB.close();
    };
}