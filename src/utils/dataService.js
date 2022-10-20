import axios from "axios"

let persona = {
    name: "Rodrigo Egea",
    cellphone: "5492634400151",
    longitude: 0.0,
    latitude: 0.0,
    contacts: [ "" ],
};

const BASE_URL = "localhost:3000";

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
    )})

axios.post(BASE_URL + "/takeData", {
    name: persona.name,
    cellphone: persona.cellphone,
    longitude: persona.longitude,
    latitude: persona.latitude,
    contacts: persona.contacts
})
    .then((response) => {
        console.log(response)
        console.log(response.data)
        console.log(response.status)
    })
}