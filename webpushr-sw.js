const CACHE_NAME = 'grigorov-chat-v1.2.5';
const ASSETS = ['/', '/index.html', '/Keylimba_260124162943.mp3'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
});

self.addEventListener('push', (e) => {
  const data = e.data ? e.data.json() : { title: 'GrigorovChat', body: 'Новое сообщение!' };
  e.waitUntil(self.registration.showNotification(data.title, {
    body: data.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/1041/1041916.png'
  }));
});

self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  e.waitUntil(clients.matchAll({ type: 'window' }).then((list) => {
    if (list.length > 0) return list[0].focus();
    return clients.openWindow('/');
  }));
});
