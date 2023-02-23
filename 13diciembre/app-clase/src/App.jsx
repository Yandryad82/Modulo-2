import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Story from './componentes/Story'

function App() {

  const [count, setCount] = useState(0)

  
  return (
    <div className="App">
      
      <button>Cambiar Mensaje</button>
    </div>
  )
}

export default App
