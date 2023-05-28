import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MovieCover = styled.div`
	width: 230px;
	height: 345px;
	margin: 10px 0px 0px 10px;
	position: relative;
	cursor: pointer;
	border-radius: 30px;
`;

const MovieCard = styled.div`
	&:hover {
		transition: all 0.3s ease;
		transform: translateY(-5px);
		box-shadow: 4px 12px 20px 6px rgba(0, 0, 0, 0.5);
		opacity: 0.3;
		border-radius: 30px;
	}
	& a {
		width: 230px;
		height: 345px;
	}

	&:hover div {
		opacity: 1;
	}
`;

const Img = styled.img`
	display: block;
	border-radius: 30px;
`;

const MovieData = styled.div`
	width: 230px;
	height: 345px;
	display: flex;
	transform: translate(0, -100%);
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	color: dark-gray;
	opacity: 0;
	position: absolute;
	box-sizing: border-box;
`;

const MovieTitle = styled.h2`
	margin: 20px;
	color: black;
`;

const Genres = styled.ul`
	color: black;
	list-style: none;
	padding: 0;
`;

function Movie({ id, coverImg, title, description_full, genres, year }) {
	return (
		<MovieCover>
			{/* <div className='movie__swipe'></div> */}
			<Link to={`/movie/${id}`}>
				<MovieCard>
					<Link to={`/movie/${id}`}>
						<Img
							src={coverImg}
							alt={title}
						/>
					</Link>

					<MovieData>
						<MovieTitle className='movie__title'>{title}</MovieTitle>
						<h3 className='movie__year'>{year}</h3>
						<p className='movie__description'>{description_full}</p>
						<Genres>
							{genres.map((g) => (
								<li key={g}>{g}</li>
							))}
						</Genres>
					</MovieData>
				</MovieCard>
			</Link>
		</MovieCover>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	description_full: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
