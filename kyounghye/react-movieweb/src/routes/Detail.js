import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
//useParams 함수를 사용하면 리액트 라우터는 바로 변수의 값을 넘겨준다
const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    console.log(movie);
  };
  useEffect(() => {
    getMovie();
    setLoading(false);
  }, []);
  return (
    <>
      <div>
        <h1>Detail</h1>;
        {loading ? (
          <h1> 나 로딩중이야! </h1>
        ) : (
          <div>
            {console.log(movie)}
            <h2>{movie.title_long}</h2>
            <img src={movie.medium_cover_image} />
            {movie.genres &&
              movie.genres.map((e) => {
                return <li key={e}>{e}</li>;
              })}
            <p>RUN TIME : {movie.runtime}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Detail;
