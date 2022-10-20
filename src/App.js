import './App.css'
import { ColorButtons } from './components/Buttons'
import React from "react"
import { getToken, onMessage } from "firebase/messaging"
import { messaging } from './firebase'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css" 
import NavBar from './components/appbar'
import { getUserLocation } from './utils/dataService'
import { useForm } from "react-hook-form"

function App() {


const { register, handleSubmit } = useForm();
const onSubmit = (data, e) => console.log(data, e);
const onError = (errors, e) => console.log(errors, e);

const messagingEnabling = async()=>{
  const token = await getToken(messaging, { 
    vapidKey: "BGyemsmHL0qsNMjq1Cpe1qUsBTNBSPkL7USYbnMyBrqhgoVTVUhFzG6O530UH83gmaG-DP-6TMc87PSRgUXhIdY"
  }).catch(error => console.log("Token generation error"))
  if (token) console.log("Your Token: ",token);
  toast(token)
  if(!token) {console.log("There is no token");}
}

React.useEffect(()=> {
  onMessage(messaging, message=> {
    console.log(message);
    toast(message.notification.title)
  })
}, [])

  return (
    
      <div className="App">
        <form onSubmit={handleSubmit(onSubmit, onError)}>
        <NavBar/>
        </form>

        <ToastContainer/>

        <ColorButtons/>
        <button onClick={getUserLocation}>
          Locate
        </button>
        <button onClick={messagingEnabling}>
          Token
        </button>

      </div>
  )
}

export default App
