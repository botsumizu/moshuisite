function activateColumn(column) {
    // 检查是否为手机端
    if (window.innerWidth <= 768) {
        // 手机端直接显示按钮
        const buttons = column.querySelector('.buttons');
        buttons.style.display = 'flex';
        buttons.style.flexDirection = 'row-reverse'; // 从右向左排列
        return;
    }

    // 如果栏目已经是激活状态，则不重复触发
    if (column.classList.contains('active')) return;

    // 添加 active 类到点击的栏目
    column.classList.add('active');

    // 显示按钮
    const buttons = column.querySelector('.buttons');
    buttons.style.display = 'flex'; // 确保按钮容器显示
    buttons.style.flexDirection = 'row-reverse'; // 确保按钮从右向左排列

    // 隐藏其他栏目
    const columns = document.querySelectorAll('.column');
    columns.forEach(col => {
        if (col !== column) {
            col.classList.add('hidden');
        }
    });

    // 显示遮罩层
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('active');
}

function deactivateColumn() {
    // 移除 active 类和 hidden 类
    const columns = document.querySelectorAll('.column');
    columns.forEach(col => {
        col.classList.remove('active', 'hidden');
        const buttons = col.querySelector('.buttons');
        buttons.style.display = 'none'; // 隐藏按钮
    });

    // 隐藏遮罩层
    const overlay = document.querySelector('.overlay');
    overlay.classList.remove('active');
}

// 初始化：手机端按钮默认显示，PC端按钮默认隐藏
document.querySelectorAll('.column').forEach(column => {
    const buttons = column.querySelector('.buttons');
    if (window.innerWidth > 768) {
        buttons.style.display = 'none'; // PC端默认隐藏按钮
    } else {
        buttons.style.display = 'flex'; // 手机端默认显示按钮
        buttons.style.flexDirection = 'row-reverse'; // 从右向左排列
    }
});

// 为遮罩层绑定点击事件
document.querySelector('.overlay').addEventListener('click', deactivateColumn);