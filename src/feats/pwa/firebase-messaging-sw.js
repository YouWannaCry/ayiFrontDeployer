import { getMessaging, getToken } from "firebase/messaging";

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
getToken(messaging, { vapidKey: '<BGyemsmHL0qsNMjq1Cpe1qUsBTNBSPkL7USYbnMyBrqhgoVTVUhFzG6O530UH83gmaG-DP-6TMc87PSRgUXhIdY' }).then((currentToken) => {
  if (currentToken) {
    console.log(currentToken)
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});