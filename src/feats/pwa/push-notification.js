// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcvNeXDIH4T_Yonn50ExKChAaDUbgQxMY",
  authDomain: "ayifrontdeployer.firebaseapp.com",
  projectId: "ayifrontdeployer",
  storageBucket: "ayifrontdeployer.appspot.com",
  messagingSenderId: "34992869207",
  appId: "1:34992869207:web:847d474edfed7b2092f812",
  measurementId: "G-7LQZXZWG9S"
};
// Add the public key generated from the console here.
const app = initializeApp( firebaseConfig );
// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging( app );

messaging.getToken( { vapidKey:"BGyemsmHL0qsNMjq1Cpe1qUsBTNBSPkL7USYbnMyBrqhgoVTVUhFzG6O530UH83gmaG-DP-6TMc87PSRgUXhIdY" } );

export function requestPermission() {
  Notification.requestPermission().then( ( permission ) => {
    if ( permission === 'granted' ) {
      console.log( 'Notification permission granted.' );
    } else {
      console.log( 'Unable to get permission to notify.' );
    }
  });
}