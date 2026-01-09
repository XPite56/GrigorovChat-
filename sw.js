// sw.js
self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : { title: 'GrigorovChat', body: 'Новое сообщение!' };
    
    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: 'https://cdn-icons-png.flaticon.com/512/733/733585.png',
            badge: 'https://cdn-icons-png.flaticon.com/512/733/733585.png',
            vibrate: [200, 100, 200],
            tag: 'chat-msg', // Чтобы уведомления не плодились, а заменяли друг друга
            renotify: true
        })
    );
});

// Открываем чат при клике на уведомление
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({type: 'window'}).then(windowClients => {
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                if (client.url === '/' && 'focus' in client) return client.focus();
            }
            if (clients.openWindow) return clients.openWindow('/');
        })
    );
});
