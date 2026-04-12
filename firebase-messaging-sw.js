importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC1HbmuQBtg1CNxyUIGbPJjPebEXf-Kav8",
  authDomain: "grigorovchat-mess.firebaseapp.com",
  projectId: "grigorovchat-mess",
  storageBucket: "grigorovchat-mess.firebasestorage.app",
  messagingSenderId: "239359861054",
  appId: "1:239359861054:web:ef6ea0283b88bc9782cc6f"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Сообщение в фоне:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://i127.fastpic.org/big/2026/0209/6d/fa33f92b6a5bdf0c853010d17ddb446d.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
