// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyBcvNeXDIH4T_Yonn50ExKChAaDUbgQxMY",
  authDomain: "ayifrontdeployer.firebaseapp.com",
  projectId: "ayifrontdeployer",
  storageBucket: "ayifrontdeployer.appspot.com",
  messagingSenderId: "34992869207",
  appId: "1:34992869207:web:847d474edfed7b2092f812",
  measurementId: "G-7LQZXZWG9S"
};

const app = initializeApp( firebaseConfig );

const analytics = getAnalytics(app);

export const messaging = getMessaging(app);