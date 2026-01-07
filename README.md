# Мой первый сайт с Docker

Это учебный проект для практики:
- Git и GitHub
- Docker контейнеризация
- Веб-разработка (HTML/CSS)

## Как запустить локально:

```bash
# Собрать Docker образ
docker build -t my-site .

# Запустить контейнер
docker run -d -p 8080:80 --name my-site-container my-site

# Открыть в браузере
# http://localhost:8080

Структура проекта:

    index.html - главная страница

    style.css - стили

    Dockerfile - инструкция для Docker

    .dockerignore - файлы для игнорирования

Автор
cerberussolution

