import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import ResidentCard from './components/ResidentCard';

function App() {
  
  //Variable con esteroides del useEffects..............

  const [universe, setUniverse] = useState({});

  //....................................................
  
  //Variable con esteroides del Buscador................

  const [searchId, setSearchId] = useState('');

  //....................................................

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}/`)
      .then((res) => setUniverse(res.data));
  }, []);

  //console.log(universe);
  
  // Esta funcion es para hacer el buscador de Universos................

  const searchType = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${searchId}/`)
      .then(res => setUniverse(res.data))
      
  }
  
  //..................................................................
  
  return (
    <div className="App">
     
     <input type="text"
       placeholder='name a universe for id'
       value={searchId} 
       onChange={(e) => setSearchId(e.target.value)}
     />

      <button onClick={searchType}>Search Location</button>

      <h2>Universe: {universe?.name}</h2>
      <h2>Type: {universe?.type}</h2>
      <h2>Dimension: {universe?.dimension}</h2>      
      <h2>Population: {universe.residents?.length}</h2>
      
      {universe.residents?.map((resident) => (
          <ResidentCard url={resident}/> 
        ))}
      
    </div>
  );
}

export default App
