import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AboutMe from './componentes/AboutMe'
import Hobbies from './componentes/Hobbies'
import FreeTime from './componentes/FreeTime'
import Food from './componentes/Food'
import Tecnologies from './componentes/Tecnologies'
import Card from './componentes/Card'

function App() {
  const [count, setCount] = useState(0)

  const objeto = {
    nombre: 'Yandry',
    apellido: 'Almaguer',
    edad: '40',
    telefono: '091713567'
  }



  return (
    <div className="App">

      <div className='contenedor-principal'>
          
        <Card
          titulo='Datos Usuario'
          item1='Yandry'
          item2='Almaguer'
          item3='Dueñas'
          background='blue' />

        <Card
          titulo='Datos Usuario'
          item1='item1'
          item2='item2'
          item3='item3'
          background='red' />

        <Card
          titulo='Datos Usuario'
          item1='item1'
          item2='item2'
          item3='item3'
          background='chocolate' />

      </div>
    </div>
  )
}

export default App
