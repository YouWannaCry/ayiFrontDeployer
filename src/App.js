import './App.css'
import ColorButtons from '../src/components/Buttons'
import { store } from '../src/store'
import { Provider } from 'react-redux'

function App() {

  return (

    <Provider store={store}>
      <div className="App">
        <ColorButtons/>
        <script type="module" src="js/app.js" async></script>
      </div>
    </Provider>
  )
}

export default App
