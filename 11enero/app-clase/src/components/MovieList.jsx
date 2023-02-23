import React from 'react';

const MovieList = ({ movieList, deleteMovie, selectMovie }) => {
	
  const movieListOrder = movieList.sort((a, b) => a.name.localeCompare(b.name));

  return (
		<div className="dutie-list">
			<h1>Movie List</h1>
			<ul>
				{movieListOrder.map(movie => (

					<li key={movie.id}><h4>{movie.name}</h4>

						<div>
							<b>Gender: </b>
							{movie.genre}
						</div>

						<div>
							<b>Duration: </b>
							{movie.duration}
						</div>

						<div>
							<b>Release Date: </b>
							{movie.release_date}
						</div>
						<div className='container-general-btn'>
							<button className='delete-btn' onClick={() => deleteMovie(movie)}>Delete</button>
							<button className='select-btn' onClick={() => selectMovie(movie)}>Edit</button>
						</div>
					</li>
				))}
			</ul>
		</div>

	);
};

export default MovieList;