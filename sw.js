self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : { title: 'GrigorovChat', body: 'Новое сообщение!' };
    event.waitUntil(
        self.registration.showNotification('GrigorovChat', {
            body: data.body,
            icon: 'https://cdn-icons-png.flaticon.com/512/733/733585.png',
            vibrate: [200, 100, 200]
        })
    );
});
