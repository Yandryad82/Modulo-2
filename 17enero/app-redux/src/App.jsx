import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {increment} from './store/slices/message.slice'
import { decrement } from './store/slices/message.slice'

function App() {
  //const [count, setCount] = useState(0)
  
  
  //const username = useSelector(state => state.username)
  //const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();
  
  const message = useSelector(state => state.message);

  const [inputValue, setInputValue] = useState("");
  

  return (
    <div className="App">
     
      <h1>{message}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => dispatch(increment(inputValue))}>Message</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      

    </div>
  )
}

export default App
