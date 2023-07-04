import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Detail from '../components/Detail';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import styled from 'styled-components';

function MovieDetail() {
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState({});
	const { id } = useParams();

	const getMovie = async () => {
		try {
			const response = await fetch(
				`https://yts-proxy.nomadcoders1.now.sh/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`
			);
			const json = await response.json();
			setMovie(json.data.movie);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getMovie();
	}, [id]);

	return (
		<Container>
			<Navbar />
			{loading ? (
				<Loading />
			) : (
				<div className='movie'>
					<Detail
						key={movie.id}
						id={movie.id}
						coverImg={movie.medium_cover_image}
						title={movie.title}
						year={movie.year}
						rating={movie.rating}
						description_full={movie.description_full}
						genres={movie.genres}
					/>
				</div>
			)}
		</Container>
	);
}

export default MovieDetail;

const Container = styled.section`
	background-color: #dbb8c6;
	overflow: hidden;
	height: 100vh;
	margin: 0;
`;
