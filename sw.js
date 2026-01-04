// sw.js - Фоновый слушатель
self.addEventListener('push', function(event) {
    const data = event.data.json();
    const options = {
        body: data.body,
        icon: 'icon.png', // Путь к иконке твоего чата
        badge: 'icon.png',
        vibrate: [100, 50, 100],
        data: { url: 'index.html' }
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(clients.openWindow(event.notification.data.url));
});
