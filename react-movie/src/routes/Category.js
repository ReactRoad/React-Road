import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Movie from '../components/Movie';

import styled from 'styled-components';
import CategoryNav from '../components/CategoryNav';
import Loading from '../components/Loading';

function Category() {
	const { category } = useParams();
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);

	//async - await
	const getMovies = async () => {
		const json = await (
			await fetch(
				`https://yts-proxy.nomadcoders1.now.sh/list_movies.json
				?minimum_rating=6.9&sort_by=year&query_term=2023`
			)
		).json();
		setMovies(json.data.movies);
		setLoading(false);
	};
	useEffect(() => {
		getMovies();
	}, []);

	return (
		<div>
			<Container>
				<CategoryNav />
				{loading ? (
					<Loading />
				) : (
					<Movies>
						<CategoryName>🍿 {category} 🍿</CategoryName>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'center',
								flexWrap: 'wrap',
							}}
						>
							{movies
								.filter((movie) => movie.genres.includes(category))
								.map((movie) => (
									<Movie
										key={movie.id}
										id={movie.id}
										coverImg={movie.medium_cover_image}
										title={movie.title}
										genres={movie.genres}
									/>
								))}
						</div>
					</Movies>
				)}
			</Container>
		</div>
	);
}

export default Category;
const Container = styled.section`
	background-color: #dbb8c6;
	margin: 0;
`;

const Movies = styled.div`
	display: flex;
	margin-right: 10px;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	text-align: center;
`;

const CategoryName = styled.div`
	color: #fee25b;
	font-size: 30px;
	font-weight: 900;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;
