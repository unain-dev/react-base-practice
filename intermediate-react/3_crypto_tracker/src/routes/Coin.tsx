import { useParams } from "react-router";

interface RouteParams {
  coinId: string;
}

// useParams로 url에 보내는 변수를 받을 수 있음.

function Coin() {
  // useParma 받는 방법(1)
  // const coinId = useParams();
  // console.log(coinId);

  // useParma 받는 방법(2)
  // const { coinId } = useParams<{ coinId: string }>();

  // useParma 받는 방법(3)
  // -> useParams의 타입도 interface로 정의해준다.
  const { coinId } = useParams<RouteParams>();
  return <h1>Coin: {coinId}</h1>;
}
export default Coin;
