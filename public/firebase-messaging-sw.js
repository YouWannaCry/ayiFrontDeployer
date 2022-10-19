importScripts("https://www.gstatic.com/firebasejs/9.12.1/firebase-app-compat.js") 
importScripts("https://www.gstatic.com/firebasejs/9.12.1/firebase-messaging-compat.js")

const firebaseConfig = {
  apiKey: "AIzaSyBcvNeXDIH4T_Yonn50ExKChAaDUbgQxMY",
  authDomain: "ayifrontdeployer.firebaseapp.com",
  projectId: "ayifrontdeployer",
  storageBucket: "ayifrontdeployer.appspot.com",
  messagingSenderId: "34992869207",
  appId: "1:34992869207:web:847d474edfed7b2092f812",
  measurementId: "G-7LQZXZWG9S"
};

const app = firebase.initializeApp( firebaseConfig );
const messaging = firebase.messaging(app);

//previo a notificacion

messaging.onBackgroundMessage(payload => {
  console.log("Recibiste un mensaje mientras no estabas")
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo192.png"
  }
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  )
})