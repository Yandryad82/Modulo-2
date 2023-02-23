import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  
  const array = [];

  for (let i = 0; i < 600; i++){
    array.push(i)
  }

    
  const [count, setCount] = useState(0)
   
    const [data, setData] = useState({})

    const [change, setChange] = useState(false);

    const [index, setindex] = useState(Math.floor(Math.random() * array.length+1))
     
    

    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${index}/`)
      .then(res => setData(res.data));
    }, [index]);

    
    console.log(data);

    const changeMasa = () => {
      setChange(!change)
    }

    function random() {
      setindex(Math.floor(Math.random() * array.length));
    }
    
    const hectograms = data?.weight
    const kilograms = data?.weight / 10

      return (
    <div className="App">
       <div className='contenedor-principal'>
            <h1>{data?.name}</h1>
            <img src={data.sprites?.other.dream_world.front_default} alt="" />
            <h2>Weight: {change ? hectograms : kilograms} {" "} {change ? 'hectograms' : 'kilograms'}</h2>
            <h2>Height: {data?.height} decimeters</h2>
            <h2>Type: {data.types?.[0].type.name}</h2>
            <h2>Pokemon#: {index}</h2>
            <button onClick={changeMasa}>Cambiar Peso</button>
            <button onClick={random}>ALEATORIO</button>
       </div>
    </div>
  )
}

export default App
