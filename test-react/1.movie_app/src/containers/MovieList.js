import { getMovies } from "common/api/movie.js";
import { useEffect, useState } from "react";
import Movie from "components/Movie";

function MovieList() {
  let [movies, setMovies] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies(
      function ({ data }) {
        setMovies(data.data.movies);
        setLoading(false);
      },
      function fail() {
        console.log("fail");
      }
    );
  }, []);

  return (
    <div>
      {loading && <p>loading...</p>}
      {loading == false &&
        movies.map((movie, index) => (
          <Movie id={movie.id} title={movie.title} rating={movie.rating} />
        ))}
    </div>
  );
}

export default MovieList;
