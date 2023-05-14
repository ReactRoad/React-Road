import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usd, setUsd] = useState(0);
  const [info, setInfo] = useState("");
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const handleUsd = (event) => setUsd(Number(event.target.value));
  const handleSelect = (event) => {
    setInfo(event.target.value);
  };
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <div>
            <input
              onChange={handleUsd}
              value={usd}
              type="number"
              style={{ width: "200px" }}
            />
          </div>
          <select onChange={handleSelect} value={info}>
            <option>코인을 선택하세요.</option>
            {coins.map((coin) => (
              <option key={coin.id}>
                {coin.name} ({coin.symbol}): {coin.quotes.USD.price}
              </option>
            ))}
          </select>
          <h3>
            {info === "" ? "예산을 입력하고 코인을 선택하세요!" : null}
            {Number(info.split(":")[1]) > usd && info !== ""
              ? "살 수 없습니다."
              : null}
            {Number(info.split(":")[1]) <= usd && info !== ""
              ? `\$${usd}로 ${Math.floor(
                  usd / Number(info.split(":")[1])
                )}개 살 수 있습니다.`
              : null}
          </h3>
        </div>
      )}
    </div>
  );
}

export default App;
