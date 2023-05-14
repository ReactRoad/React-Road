import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    // const response = await fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    // );
    // const json = await response.json();
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  console.log(movies);
  //api에서 데이터를 가져와서 movies에 저장
  useEffect(() => getMovies, []);
  return (
    <>
      <div>
        {loading ? (
          <h1> 나 로딩중이야! </h1>
        ) : (
          <div>
            {movies.map((movie) => {
              return (
                <div key={movie.id}>
                  <h2>{movie.title}</h2>
                  <img src={movie.medium_cover_image} />
                  <ul>
                    {movie.genres.map((genres) => {
                      return <li key={genres}>{genres}</li>;
                    })}
                  </ul>
                  <p>{movie.summary}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
