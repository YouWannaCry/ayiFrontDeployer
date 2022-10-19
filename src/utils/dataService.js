let persona = {   name: "",
  cellphone: "",
  longitude: 0.0,
  latitude: 0.0,
  contacts: [],
};

const BASE_URL = "https://ayifrontdeployer.pages.dev";

export const getUserLocation = async () => {
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      persona.longitude = coords.longitude;
      persona.latitude = coords.latitude;

      console.log(
        "Your location is aprox: " + persona.latitude + " " + persona.longitude
      );
      console.log(
        "https://www.google.com/maps/search/?api=1&query=" + persona.latitude + "%2c" + persona.longitude
      )

      fetch(BASE_URL + "/takeData", {
        method: "POST",
        body: JSON.stringify(persona),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log("Marker creado " + data));
    },
    (error) => {
      alert("No se pudo obtener la geolocalización.");
      console.log(error);
    }
  );
};