// 侧边栏切换
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('-translate-x-full');
}

// 搜索功能
const searchBox = document.querySelector('.search-box');
const gameCards = document.querySelectorAll('.game-card');

searchBox.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    gameCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const tags = Array.from(card.querySelectorAll('.category-tag'))
            .map(tag => tag.textContent.toLowerCase());
        
        const matches = title.includes(searchTerm) || 
                       description.includes(searchTerm) ||
                       tags.some(tag => tag.includes(searchTerm));
        
        card.style.display = matches ? 'block' : 'none';
    });
});
