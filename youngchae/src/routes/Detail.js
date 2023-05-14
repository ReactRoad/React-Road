import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Detail.css";

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
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container">
          <h1>
            {movie.title} ({movie.year})
          </h1>{" "}
          <section>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <div id="info">
              <div className="genres">
                <h3>장르</h3>
                <p>{movie.genres.join(", ")}</p>
              </div>
              <div className="rating">
                <h3>평점</h3>
                <p>{movie.rating}</p>
              </div>
              <div className="description">
                <h3>줄거리</h3>
                <p>{movie.description_full}</p>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default Detail;
