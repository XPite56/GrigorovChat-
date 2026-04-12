importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "БЕРЕМ_ИЗ_ПАРАМЕТРОВ_WEB_APP_В_FIREBASE", // См. ниже как найти
  authDomain: "grigorovchat-mess.firebaseapp.com",
  projectId: "grigorovchat-mess",
  storageBucket: "grigorovchat-mess.appspot.com",
  messagingSenderId: "1020535754956", // Это начало твоего client_id
  appId: "БЕРЕМ_ИЗ_ПАРАМЕТРОВ_WEB_APP_В_FIREBASE"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://i127.fastpic.org/big/2026/0209/6d/fa33f92b6a5bdf0c853010d17ddb446d.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
