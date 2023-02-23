import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const MovieForm = ({getMovieList, movieSelected, selectMovie }) => {

	const { handleSubmit, register, reset } = useForm();

	const emptyMovie = {name: '', genre: '', duration: '', release_date: '' }
	
	useEffect(() => {
		if (movieSelected !== null) {
		  reset(movieSelected);
		}else{
			reset(emptyMovie)
		}
	  }, [movieSelected]);
	
	const submit = (data) => {
		
		if (movieSelected) {
			axios
			  .put(`https://movies-crud-2.academlo.tech/movies/${movieSelected.id}/`, data)
			  .then(() => {
				getMovieList()
				selectMovie(null)
			  });
		  } else {
			axios
			  .post("https://movies-crud-2.academlo.tech/movies/", data)
			  .then(() => {
				getMovieList()
				reset(emptyMovie)
			  });
		  }
		
	}
	
	return (
		<form onSubmit={handleSubmit(submit)}>
			<div className="input-container">
				<label htmlFor="name">Movie Name</label>
				<input type="text" id="name" {...register("name")}/>
			</div>

			<div className="input-container">
				<label htmlFor="genre">Gender</label>
				<input type="text" id='genre' {...register("genre")}/>
			</div>

			<div className="input-container">
				<label htmlFor="duration">Duration</label>
				<input type="text" id='duration' {...register("duration")}/>
			</div>

			<div className="input-container">
				<label htmlFor="release_date">Release Date</label>
				<input type="date" id='release_date' {...register("release_date")}/>
			</div>
			<button>Submit</button>
		</form>
	);
};

export default MovieForm;