import React, { useEffect, useState } from 'react';

function Movie() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	//async - await
	const getMovies = async () => {
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
			)
		).json();
		setMovies(json.data.movies);
		setLoading(false);
	};
	useEffect(() => {
		getMovies();
		/*fetch().then.then ....
		fetch(
			`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
		)
			.then((response) => response.json())
			.then((json) => {
				setMovies(json.data.movies);
				setLoading(false); //로딩이 끝났기 때문에 setLoading을 false로 만들어줘야함
			});
      */
	}, []);

	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					{movies.map((movie) => (
						<div key={movie.id}>
							<img src={movie.medium_cover_image} /> 
              <h2>{movie.title}</h2>
							<p>{movie.summary}</p>
							<ul>
								<li>
									{movie.genres.map((g) => (
										<li key={g}>{g}</li>
									))}
								</li>
							</ul>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

function App() {
	return (
		<div>
			<Movie />
		</div>
	);
}

export default App;
