// JavaScript для страницы gallery
// Загрузка изображений в галерею
const images = [
    { src: 'assets/images/gallery/1.jpg', title: 'Природа', category: 'nature' },
    { src: 'assets/images/gallery/2.jpg', title: 'Технологии', category: 'tech' },
    // ... больше изображений
];

function renderGallery(filter = 'all') {
    const filtered = filter === 'all' 
        ? images 
        : images.filter(img => img.category === filter);
    
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = filtered.map(img => `
        <div class="gallery-item" data-category="${img.category}">
            <img src="${img.src}" alt="${img.title}" loading="lazy">
            <div class="gallery-overlay">
                <h3>${img.title}</h3>
            </div>
        </div>
    `).join('');
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    
    // Поиск
    document.getElementById('search').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        // Фильтрация...
    });
    
    // Фильтр по категории
    document.getElementById('category').addEventListener('change', (e) => {
        renderGallery(e.target.value);
    });
});
