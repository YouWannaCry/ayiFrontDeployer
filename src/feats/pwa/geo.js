/** Import Main Dependencies */
import geolocation from './geolocation.js';

// Get current position method.
geolocation.getCurrentPosition();

// Init document listener for get success or error.
document.addEventListener('getCurrentPositionSuccess', (data) => {
  const { coords, timestamp } = data.details;
  const { latitude, longitude } = coords;
  console.log(`🌎 Lng: ${longitude.toFixed(4)} \ Lat: ${latitude.toFixed(4)} | 🕜: ${timestamp}`);
});
document.addEventListener('getCurrentPositionError', (event) => {
  console.error('getCurrentPositionError', event);
  leyendGeolocation.innerHTML = event.error.message;
});
