import { useEffect, useState } from "react";

function App() {
  const [loading, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoding(false);
      });
  }, []); //빈 배열이면 온리 원만 실행!

  return (
    <div>
      <h1>The Coin~! ({coins.length})</h1>
      {loading ? (
        <strong>Loding...</strong>
      ) : (
        <ul>
          {coins.map((item) => (
            <li>
              {item.name}({item.symbol}): ${item.quotes.USD.price} USD
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
