import './App.css'
import ColorButtons from './components/Buttons'
import { store } from './store/index'
import { Provider } from 'react-redux'
import React from "react"
import { getAuth, signInAnonymously } from "firebase/auth"
import { getToken, onMessage } from "firebase/messaging"
import { messaging } from './firebase'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css" 
import { geolocation, success } from './feats/pwa/geolocation'

function App() {

// const logIn = () => {
//   signInAnonymously(getAuth()).then(usuario=>console.log(usuario))
// }

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

    <Provider store={store}>
      <div className="App">
        <ToastContainer/>

        <ColorButtons onClick = { success }/>

        {/* <button onClick={logIn}>
          Log In
        </button> */}
        <button onClick={messagingEnabling}>
          Token
        </button>
      </div>
    </Provider>
  )
}

export default App
