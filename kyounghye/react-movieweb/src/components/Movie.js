import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ title, coverImg, genres, summary, id }) => {
  return (
    <div>
      <h2>
        {/* a태그 대신 Link 태그를 사용합니다~ + link to에 id값도 넘겨줍니다~ */}
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img src={coverImg} alt={title} />
      <ul>
        {genres.map((genres) => {
          return <li key={genres}>{genres}</li>;
        })}
      </ul>
      <p>{summary.length > 233 ? `${summary.slice(0, 233)}` : summary}</p>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
