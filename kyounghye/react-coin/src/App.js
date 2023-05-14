import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("http://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoding(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>나 로딩하는중!</strong> : null}
      <ul>
        {coins.map((coin) => {
          return (
            <li key={coin.id}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
