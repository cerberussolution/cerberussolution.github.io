// Обработка формы обратной связи
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const messageDiv = document.getElementById('formMessage');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Показываем загрузку
        messageDiv.textContent = 'Отправка...';
        messageDiv.className = 'form-message loading';
        
        // Здесь будет отправка на сервер
        // Пока просто имитируем
        setTimeout(() => {
            messageDiv.textContent = 'Сообщение отправлено! Я отвечу в ближайшее время.';
            messageDiv.className = 'form-message success';
            form.reset();
            
            // Через 5 секунд скрываем сообщение
            setTimeout(() => {
                messageDiv.textContent = '';
                messageDiv.className = 'form-message';
            }, 5000);
        }, 1500);
    });
});
