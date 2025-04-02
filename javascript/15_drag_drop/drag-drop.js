/*******************************************************************************
 * Drag and Drop
 *      - 将draggable 属性及其值为 true 添加到元素，以使其可拖放。
 *      - dragstart、drag 和 dragend 事件将在可拖放元素上触发。
 *      - dragenter、dragover、dragleave 或 drop 事件将在放置目标上触发。
 *      - 在 dragenter 和 dragover 事件处理程序上调用 event.preventDefault()，以使元素成为有效的放置目标。
 *      - 使用 event.dataTransfer 对象及其 setData() 和 getData() 方法在拖放操作中传输数据
 ******************************************************************************/
const item = document.querySelector('.item');

item.addEventListener('dragstart', e => {
    console.log(e.target.id);

    e.dataTransfer.setData('text/plain', e.target.id);
    // setTimeout(() => e.target.classList.add('hide'), 0);
    // 添加一个动画帧，以使元素在拖动过程中淡出。
    // 确保样式更新在浏览器下一帧渲染时同步，避免因事件队列顺序导致的样式延迟问题
    requestAnimationFrame(() => e.target.classList.add('hide'));
});

// 新增 dragend 事件处理，确保元素在拖拽结束后可见
item.addEventListener('dragend', () => {
    item.classList.remove('hide'); // 强制恢复可见性
});

// 全局处理拖拽到非目标区域时的默认行为
document.addEventListener('dragover', (e) => {
    e.preventDefault();
});
document.addEventListener('drop', (e) => {
    e.preventDefault();
});

const boxes = document.querySelectorAll('.drag-drop-box');
boxes.forEach(box => {
    // 合并 dragenter 和 dragover 的逻辑
    const handleDragOver = (e) => {
        e.preventDefault();
        e.target.classList.add('drag-over');
    };

    box.addEventListener('dragenter', handleDragOver);
    box.addEventListener('dragover', handleDragOver);

    box.addEventListener('dragleave', e => {
        // 仅当鼠标完全离开当前元素时触发
        if (e.target === e.currentTarget) {
            e.target.classList.remove('drag-over');
        }
    });

    box.addEventListener('drop', e => {
        e.target.classList.remove('drag-over');

        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);
        if (!draggable) return; // 防止元素不存在时出错

        e.target.appendChild(draggable);
        draggable.classList.remove('hide');
    });
});