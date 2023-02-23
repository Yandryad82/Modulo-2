import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Countries from './components/countries'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Countries/>
    </div>
  )
}

export default App
