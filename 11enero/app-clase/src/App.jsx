import axios from 'axios';
import { useState, useEffect } from 'react'
import './App.css'
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import '../src/css/styles.css'

function App() {
  
  const [movieList, setMovieList] = useState([]);
  const [movieSelected, setMovieSelected] = useState(null);
  
  useEffect(() => {
    axios.get('https://movies-crud-2.academlo.tech/movies/')
    .then(res => setMovieList(res.data))
  }, [])

  
  const getMovieList = () => {
    axios.get('https://movies-crud-2.academlo.tech/movies/')
    .then(res => setMovieList(res.data))
  }

  const deleteMovie = (movieDelete) => {
    axios.delete(`https://movies-crud-2.academlo.tech/movies/${movieDelete.id}/`)
    .then(() => getMovieList());
  }

  const selectMovie = (movie) => {
    setMovieSelected(movie)
    
  }
  
  return (
    <div className="App">
      <MovieForm getMovieList={getMovieList} movieSelected={movieSelected} selectMovie={selectMovie}/>
      <MovieList movieList={movieList} deleteMovie={deleteMovie} selectMovie={selectMovie}/>
    </div>
  )
}

export default App
