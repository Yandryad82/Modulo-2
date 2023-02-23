import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getMoviesThunk, setMovies } from './store/slices/moviesList.slice'
import { Spinner } from 'react-bootstrap'
import MoviesForm from './components/MoviesForm'
import MoviesList from './components/MoviesList'

function App() {
  //const [count, setCount] = useState(0)
  
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.isLoading)

  useEffect(() => {
    dispatch(getMoviesThunk());
  }, []);

  return (
    <div className="App">
     {isLoading && <Spinner animation="border" variant="primary" />}
      <MoviesForm/>
      <MoviesList/>
    </div>
  )
}

export default App
