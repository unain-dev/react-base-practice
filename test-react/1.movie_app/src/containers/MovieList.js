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
      {loading ? (
        <p>loading...</p>
      ) : (
        movies.map((movie) => (
          <Movie
            id={movie.id}
            key={movie.id}
            year={movie.year}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
            rating={movie.rating}
          />
        ))
      )}
    </div>
  );
}

export default MovieList;
