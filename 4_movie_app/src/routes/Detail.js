import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  // const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
    console.log(movie);
    // setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {/* {loading ? (
        <div>
          <span>Loading...</span>
        </div>
      ) : (
        <div>{movie.id}</div>
      )} */}
      {Object.keys(movie).length === 0 ? (
        "Loading..."
      ) : (
        <div>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.description_full}</p>
          <ul>
            {movie.genres && movie.genres.map((g) => <li key={g}>{g}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Detail;
