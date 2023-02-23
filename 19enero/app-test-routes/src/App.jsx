import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Pokemons from './components/Pokemons'
import PokemonDetail from './components/PokemonDetail'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/pokemons' element={<Pokemons/>}/>
          <Route path='/pokemons/:id' element={<PokemonDetail/>}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
