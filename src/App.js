import './App.css'
import ColorButtons from './components/Buttons'
import { store } from './store/index'
import { Provider } from 'react-redux'
import { requestPermission } from './feats/pwa/push-notification'

function App() {

  return (

    <Provider store={store}>
      <div className="App">
        <ColorButtons/>

        <button onClick = { requestPermission } >
          Click to register
        </button>
        
      </div>
    </Provider>
  )
}

export default App
