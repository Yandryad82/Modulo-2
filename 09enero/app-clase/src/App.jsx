import { useEffect, useState } from 'react'
import './App.css'
import ProductsForm from './components/ProductsForm'
import DutiesList from './components/DutiesList'
import "./styles.css";
import axios from 'axios';

function App() {
    
  const [dutieList, setDutieList] = useState([]);
  const [dutieSelected, setDutieSelected] = useState(null);

  useEffect(() => {
    axios.get('https://todos-crud.academlo.tech/todos/')
      .then((res) => setDutieList(res.data));
  }, [])
 
    
  const getDuties = () => {
    axios.get('https://todos-crud.academlo.tech/todos/')
      .then((res) => setDutieList(res.data));
      
  } 
  
  const addDuties = (dutie) => {
    
    //setDutieList([...dutieList, dutie])
    axios.post('https://todos-crud.academlo.tech/todos/', dutie)
    .then(() => {
      getDuties()
      setDutieSelected(null)
    })
    .catch(error => console.error(error.response?.data))
    
  }

  const deleteDutie = (tareaDelete) => {
    //const filterduties = dutieList.filter(dutie => dutie.id !== tareaDelete.id)
    //setDutieList(filterduties);
    axios.delete(`https://todos-crud.academlo.tech/todos/${tareaDelete.id}/`)
    .then(() => getDuties());
  }

  const selectDutie = (dutie) => {
    setDutieSelected(dutie);
  };

  const updateDutie = (dutie) => {
    axios.put(`https://todos-crud.academlo.tech/todos/${dutieSelected.id}/`, dutie)
    .then(() => getDuties())
     setDutieSelected(null);
  };

  return (
    <div className="App">
      <ProductsForm addDuties={addDuties} dutieSelected={dutieSelected} updateDutie={updateDutie}/>
      <DutiesList dutieList={dutieList} deleteDutie={deleteDutie} selectDutie={selectDutie}/>
    </div>
  )
}

export default App
