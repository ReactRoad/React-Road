import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Movie({ id, coverImg, title, year, genres }) {
  return (
    <Link to={`/movie/${id}`}>
      <Item>
        <Link to={`/movie/${id}`}>
          <CoverImage src={coverImg} alt={title} />
        </Link>
        <Info>
          <Title>
            <Link to={`/movie/${id}`}>
              {title} ({year})
            </Link>
          </Title>
          {<GenreItem>{genres.join(" | ")}</GenreItem>}
        </Info>
      </Item>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f0f0f0;
  margin: 20px;
  border-radius: 10px;
  z-index: 1;

  &:hover {
    transition: all 0.3s ease;
    transform: translateY(-5px);
    box-shadow: 4px 12px 20px 6px rgba(0, 0, 0, 0.5);
  }

  & a {
    width: 230px;
    height: 345px;
  }

  &:hover a img {
    opacity: 0.15;
    cursor: pointer;
  }
  &:hover div {
    opacity: 1;
    cursor: pointer;
  }
`;

const CoverImage = styled.img`
  width: 230px;
  height: 345px;
  border-radius: 10px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 230px;
  height: 345px;
  position: absolute;
  opacity: 0;

  box-sizing: border-box;
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 10px;
  text-align: left;

  & a {
    color: black;
    text-decoration: none;
  }
`;

const GenreItem = styled.div`
  margin-right: 8px;
  font-size: 14px;
  color: #555555;
`;
