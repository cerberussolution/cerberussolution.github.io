// Данные проектов (можно потом вынести в JSON файл)
const projects = [
    {
        id: 1,
        title: "Docker + GitHub Pages",
        description: "Мой первый сайт, размещённый через Docker и GitHub Pages",
        tags: ["Docker", "GitHub", "HTML/CSS"],
        image: "assets/images/projects/docker-site.jpg",
        link: "https://github.com/cerberussolution/my-first-docker-site",
        github: "https://github.com/cerberussolution/my-first-docker-site"
    },
    {
        id: 2,
        title: "Портфолио на чистом JS",
        description: "Адаптивный сайт-портфолио без фреймворков",
        tags: ["JavaScript", "CSS Grid", "Flexbox"],
        image: "assets/images/projects/portfolio.jpg",
        link: "#",
        github: "#"
    },
    {
        id: 3,
        title: "Конвертер валют",
        description: "Простое приложение для конвертации валют с API",
        tags: ["API", "JavaScript", "Bootstrap"],
        image: "assets/images/projects/converter.jpg",
        link: "#",
        github: "#"
    },
    {
        id: 4,
        title: "Трекер задач",
        description: "Приложение для управления задачами с localStorage",
        tags: ["LocalStorage", "CRUD", "JavaScript"],
        image: "assets/images/projects/todo.jpg",
        link: "#",
        github: "#"
    }
];

// Загрузка проектов на страницу
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('projects-container');
    
    if (container) {
        container.innerHTML = projects.map(project => `
            <div class="project-card">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="project-overlay">
                        <a href="${project.link}" class="btn-view">Посмотреть</a>
                    </div>
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.link}" class="btn">Демо</a>
                        <a href="${project.github}" class="btn btn-secondary">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Код
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }
});
