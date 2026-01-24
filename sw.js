const CACHE_NAME = 'grigorov-chat-v1.2.5';
const ASSETS = [
  '/',
  '/index.html',
  '/Keylimba_260124162943.mp3'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : { title: 'GrigorovChat', body: 'Новое сообщение!' };
  const options = {
    body: data.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/1041/1041916.png',
    vibrate: [200, 100, 200]
  };
  event.waitUntil(self.registration.showNotification(data.title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((list) => {
      if (list.length > 0) return list[0].focus();
      return clients.openWindow('/');
    })
  );
});
