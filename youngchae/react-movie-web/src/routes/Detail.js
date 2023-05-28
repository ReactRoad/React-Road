import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Loading from "../components/Loading";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <Header />
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <Movie>
            <Title>
              {movie.title} ({movie.year})
            </Title>
            <Info>
              <CoverImage src={movie.medium_cover_image} alt={movie.title} />
              <div id="info">
                <Genres>
                  <h3>장르</h3>
                  <p>{movie.genres.join(" | ")}</p>
                </Genres>
                <Rating>
                  <h3>평점</h3>
                  <p>{movie.rating}</p>
                </Rating>
                <Description>
                  <h3>줄거리</h3>
                  <p>{movie.description_full}</p>
                </Description>
              </div>
            </Info>
          </Movie>
        )}
      </Container>
    </>
  );
}

export default Detail;

const Container = styled.div`
  background-color: black;
  height: 100vh;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Movie = styled.div`
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  background-color: black;
  color: #ffffff;
  margin-bottom: 60px;
  padding: 0;
`;

const Info = styled.section`
  display: flex;
  justify-content: center;
  width: 80%;
  color: #ffffff;
`;

const CoverImage = styled.img`
  width: 230px;
  height: 345px;
`;

const Genres = styled.div`
  display: flex;
  padding-left: 40px;

  & p {
    display: flex;
    align-items: center;
    padding: 0 20px;
  }
`;

const Rating = styled.div`
  display: flex;
  padding-left: 40px;

  & p {
    display: flex;
    align-items: center;
    padding: 0 20px;
  }
`;

const Description = styled.div`
  padding-left: 40px;
`;
