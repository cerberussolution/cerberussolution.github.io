#!/bin/bash

# Скрипт для создания новых страниц

if [ -z "$1" ]; then
    echo "Использование: ./new-page.sh имя-страницы"
    echo "Пример: ./new-page.sh services"
    exit 1
fi

PAGE_NAME=$1
TEMPLATE="<!DOCTYPE html>
<html lang=\"ru\">
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <title>${PAGE_NAME^} | DockerSite</title>
    <link rel=\"stylesheet\" href=\"style.css\">
    <link rel=\"stylesheet\" href=\"assets/css/${PAGE_NAME}.css\">
</head>
<body>
    <div class=\"navbar-container\"></div>

    <main class=\"container\">
        <h1>${PAGE_NAME^}</h1>
        <!-- Содержимое страницы -->
        <p>Содержимое страницы ${PAGE_NAME}</p>
    </main>

    <footer></footer>

    <script src=\"assets/js/components.js\"></script>
    <script src=\"assets/js/${PAGE_NAME}.js\"></script>
</body>
</html>"

# Создаём HTML файл
echo "$TEMPLATE" > "${PAGE_NAME}.html"

# Создаём CSS файл
mkdir -p assets/css
echo "/* Стили для страницы ${PAGE_NAME} */" > "assets/css/${PAGE_NAME}.css"

# Создаём JS файл
mkdir -p assets/js
echo "// JavaScript для страницы ${PAGE_NAME}" > "assets/js/${PAGE_NAME}.js"

# Добавляем в навигацию (автоматически)
sed -i "/<ul class=\"nav-links\">/a\                <li><a href=\"${PAGE_NAME}.html\">${PAGE_NAME^}</a></li>" components/header.html

echo "✅ Страница ${PAGE_NAME}.html создана!"
echo "✅ Добавлена ссылка в навигацию"
echo "📁 Файлы:"
echo "   - ${PAGE_NAME}.html"
echo "   - assets/css/${PAGE_NAME}.css"
echo "   - assets/js/${PAGE_NAME}.js"
