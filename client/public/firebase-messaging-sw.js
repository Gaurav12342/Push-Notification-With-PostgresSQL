/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js'
);

// "Default" Firebase configuration (prevents errors)
const defaultConfig = {
  apiKey: true,
  projectId: true,
  messagingSenderId: true,
  appId: true,
};

// Initialize Firebase app
// eslint-disable-next-line no-undef
firebase.initializeApp(defaultConfig);
const messaging = firebase.messaging();

//Listens for background notifications
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);

  //customise notification
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || '/icon.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
