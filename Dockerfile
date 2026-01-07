# Используем официальный легковесный образ Nginx
FROM nginx:alpine

# Копируем файлы сайта в папку Nginx
COPY . /usr/share/nginx/html/

# Открываем порт 80 (стандартный для HTTP)
EXPOSE 80

# Nginx запускается автоматически
# Можно добавить свою конфигурацию если нужно:
# COPY nginx.conf /etc/nginx/conf.d/default.conf
