import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import './app.css'
import Card from './components/Card'
import Prueba from './components/Prueba'


export function App() {
  const [count, setCount] = useState(0)
  
  
  return (
    <>
     <Card/>
    </>
  )
}
