import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import users from './user.json'
import UsersItems from './componentes/UsersItems';

function App() {
  
  return (
    <div className="App">
      <UsersItems users={users} />
    </div>
  );
}

export default App
