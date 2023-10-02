```javascript
import { initializeApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Function to handle incoming messages
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // Customize notification here
  const notificationTitle = 'New Post Notification';
  const notificationOptions = {
    body: 'A new post has been published on AInext Insights Blog Platform.',
    icon: '/logo.png'
  };

  if (!("Notification" in window)) {
    console.log("This browser does not support system notifications");
  }
  else if (Notification.permission === "granted") {
    new Notification(notificationTitle, notificationOptions);
  }
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        new Notification(notificationTitle, notificationOptions);
      }
    });
  }
});

export default messaging;
```