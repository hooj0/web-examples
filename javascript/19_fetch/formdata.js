/*******************************************************************************
 * FormData 表单数据
 * 方法：
 *       1. FormData() 构造函数
 *       2. append() 添加数据
 *       3. delete() 删除数据
 *       4. get() 获取数据
 *       5. getAll() 获取所有数据
 *       6. has() 判断数据是否存在
 *       7. set() 设置数据
 *       8. entries() 获取所有键值对
 *       9. keys() 获取所有键
 *       10. values() 获取所有值
 *       11. forEach() 遍历数据
 *       12. toString() 转换为字符串
 *******************************************************************************/
const data = new FormData();

data.append('name', 'zhangsan');
data.append('age', 18);
const file = new File(['Hello World'], 'hello.txt', {type: 'text/plain'});
data.append('file', file, "file.txt");

console.log(data.get('name'));
data.delete('name');

console.log(data.entries().toArray());
console.log(data.keys());
console.log(data.values());
console.log(data.getAll("file"));
