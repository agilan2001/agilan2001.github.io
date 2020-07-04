importScripts('https://www.gstatic.com/firebasejs/7.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.2.1/firebase-messaging.js');
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics. 
importScripts('https://www.gstatic.com/firebasejs/7.2.1/firebase-analytics.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  'messagingSenderId': '741527072483'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  var notification=JSON.parse(payload.data.notification);
  const notificationTitle = notification.title;
  const notificationOptions = {
    body: notification.body,
    icon: notification.icon,
    image: notification.icon,
    actions: [  
      {action: 'g', title: '👍GOOGLE'},  
      {action: 's', title: '⤻ SoloLearn'}]  
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});

self.addEventListener('notificationclick', function(event) {

  event.notification.close();  

  if (event.action === 'g') {  
    clients.openWindow("https://www.google.com/")
    return;
  }  
  else if (event.action === 's') {  
    clients.openWindow("https://www.sololearn.com/Profile/14014563/?ref=app");  
    return;
  }  
  
  clients.openWindow("https://agilan2001.github.io");  
  
  }, false);
