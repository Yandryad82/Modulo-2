import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MisHobbies from './components/MisHobbies'
import DatosUser from './components/DatosUser'


function App() {
  const [count, setCount] = useState(0)

  

  return (
    <div className="App">
      <div className='contenedor-general'> 
        <div className='tarjeta-sobreMi'>
        </div>            
      </div>   
    </div>
  )
}

export default App
