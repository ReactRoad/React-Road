import PropTypes from "prop-types";

const Movie = ({ title, coverImg, genres, summary }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={coverImg} alt={title} />
      <ul>
        {genres.map((genres) => {
          return <li key={genres}>{genres}</li>;
        })}
      </ul>
      <p>{summary}</p>
    </div>
  );
};

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
