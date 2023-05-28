import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    fetch("http://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoding(false);
      });
  }, []);
  const handleChange = (event) => {
    setMoney(event.target.value);
  };
  const onClick = (props) => {
    console.log(props);
  };
  const handleChangePrice = (event) => {
    let targetIndex = event.target.selectedIndex;
    const selectPrice = coins[targetIndex].quotes.USD.price;
    setPrice(selectPrice);
    console.log(price);
  };
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>나 로딩하는중!</strong> : null}
      <input value={money} onChange={handleChange} type="number" />
      <select onChange={handleChangePrice}>
        {coins.map((coin) => {
          return (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
            </option>
          );
        })}
      </select>
      <button onClick={onClick}>몇 개 살수있죠?</button>
      <div>
        난 {money}달러 있고 {money / price}개 살 수있다!
      </div>
    </div>
  );
}

export default App;
