import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ToDosList from './components/ToDosList'
import ToDosForms from './components/ToDosForms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='container-form'>
       <ToDosForms/>
      </div>
      <div className='container-list'>
        <ToDosList/>
      </div>
    </div>
  )
}

export default App
