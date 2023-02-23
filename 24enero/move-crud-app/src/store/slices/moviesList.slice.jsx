import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { setIsLoading } from './isLoading.slice';

export const moviesListSlice = createSlice({
    name: 'moviesList',
    initialState: [],
    reducers: {
        setMovies: (state, action) => {
            const movies = action.payload;
            return movies;
        }
    }
})

export const getMoviesThunk = () => (dispatch) => {
    dispatch(setIsLoading(true)) 
    axios
      .get("https://movies-crud-2.academlo.tech/movies/")
      .then((res) => dispatch(setMovies(res.data)))
      .finally(() => dispatch(setIsLoading(false)))
  };
  
export const createMovieThunk = (data) => dispatch => {
    dispatch(setIsLoading(true));
    axios.post('https://movies-crud-2.academlo.tech/movies/', data)
    .then(() => dispatch(getMoviesThunk()))
    .finally(() => dispatch(setIsLoading(false)))
}

export const deleteMovieThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .delete(`https://movies-crud-2.academlo.tech/movies/${id}/`)
      .then(() => dispatch(getMoviesThunk()))
      .finally(() => dispatch(setIsLoading(false)));
  };

export const { setMovies } = moviesListSlice.actions;

export default moviesListSlice.reducer;
