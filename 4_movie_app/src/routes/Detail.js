import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  const [detail, setDetail] = useState();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setDetail(json.data.movie);
    console.log(detail);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <img src={detail.medium_cover_image} alt={detail.title} />
      <h2>{detail.title}</h2>
      <p>{detail.summary}</p>
      <ul>
        {detail.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
export default Detail;
