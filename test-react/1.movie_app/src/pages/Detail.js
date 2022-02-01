import { useParams } from "react-router-dom";
import { getDetail } from "common/api/movie";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  let [movie, setMovie] = useState({});

  useEffect(() => {
    getDetail(
      id,
      ({ data }) => {
        setMovie(data.data.movie);
      },
      () => {
        console.log("fail");
      }
    );
    // console.log(movie);
  }, [id]);

  return (
    <div>
      {Object.keys(movie).length === 0 ? (
        <p>loading...</p>
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
