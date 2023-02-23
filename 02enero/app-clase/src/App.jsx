import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Countries from './componentes/Countries'


function App() {
  const [nombre, setNombre] = useState("Valor por Defecto");

  const alertInput = () => {
    alert(nombre);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}/>
      <h2>{nombre}</h2>
    </div>
  );
}

export default App
