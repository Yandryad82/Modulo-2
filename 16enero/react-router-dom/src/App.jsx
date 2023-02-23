import { useState } from 'react'
import './App.css'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Tecnologies from './components/Tecnologies'
import Projects from './components/Projects'
import Home from './components/Home'
import ProjectsId from './components/ProjectsId'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <ul>
          <li>
            <Link to='/'>Home</Link>

          </li>
          <li>
            <Link to='/projects'>Projects</Link>

          </li>
          <li>
            <Link to='/tecnologies'>Tecnologies</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/tecnologies' element={<Tecnologies />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/' element={<Home />} />
          <Route path='/projects/:id' element={<ProjectsId/>}/>
        </Routes>

      </HashRouter>

    </div>
  )
}

export default App
