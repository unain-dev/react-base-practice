import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  return (
    <div>
      <p>this is a Detail</p>
      <p>{id}</p>
    </div>
  );
}

export default Detail;
