import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, coverImg, title, summary, genres, year }) {
	return (
		<div>
			<img
				src={coverImg}
				alt={title}
			/>
			<h2>
				<Link to={`/movie/${id}`}>{title}</Link>
			</h2>
			<h3>{year}</h3>
			<p>{summary.length > 235 ? `${summary.slice(0, 235)}` : summary}</p>
			<ul>
				<li>
					{genres.map((g) => (
						<li key={g}>{g}</li>
					))}
				</li>
			</ul>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
