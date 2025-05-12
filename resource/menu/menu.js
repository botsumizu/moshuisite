function searchText() {
    // 获取搜索输入框的值
    const searchInput = document.getElementById('sidebarSearchInput').value.trim().toLowerCase();
    if (!searchInput) {
        alert('請輸入關鍵字進行搜索！');
        return;
    }

    // 清除之前的高亮
    const highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach((el) => {
        el.classList.remove('highlight');
        el.innerHTML = el.textContent; // 恢复原始内容
    });

    // 搜索并高亮匹配的内容
    const content = document.querySelector('.content');
    const elements = content.querySelectorAll('*');
    let found = false;

    elements.forEach((el) => {
        if (el.children.length === 0 && el.textContent.toLowerCase().includes(searchInput)) {
            el.innerHTML = el.textContent.replace(
                new RegExp(searchInput, 'gi'),
                (match) => `<span class="highlight">${match}</span>`
            );
            found = true;
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });

    if (!found) {
        alert('未找到匹配的內容！');
    }
}