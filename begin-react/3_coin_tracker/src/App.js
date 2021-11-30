import { useEffect, useState } from "react";

// input으로 받아서 해당 input으로 받은 돈이 얼마만큼의 코인을 살 수 있는지 보여주기

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); // 빈 괄호을 주면 오류!

  //첫 렌더링 시만 실행.
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {/* 백틱으로 안감싸면 오류남 */}
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>

      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}

      {/* <ul>
        {coins.map((coin) => (
          <li>
            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;

//api.coinpaprika.com/v1/tickers
