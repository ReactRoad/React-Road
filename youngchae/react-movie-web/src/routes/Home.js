import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styled from "styled-components";
import Header from "../components/Header";
import Loading from "../components/Loading";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <Header />
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <MovieList>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                year={movie.year}
                genres={movie.genres}
              />
            ))}
          </MovieList>
        )}
      </Container>
    </>
  );
}

export default Home;

const Container = styled.div`
  background-color: black;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
