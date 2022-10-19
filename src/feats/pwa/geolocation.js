const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

export function GeoLocate(pos) {
  const crd = pos.coords;
  console.log(`More or less ${crd.accuracy} meters.`);
  let url =
    "https://www.google.com/maps/search/?api=1&query=" +
    crd.latitude +
    "%2c" +
    crd.longitude;
  console.log(url);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(GeoLocate, error, options);
