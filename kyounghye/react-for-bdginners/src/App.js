import "./App.css";
import { useState } from "react";

function MinutesToHours() {
  const [amount, setAmount] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const handleChange = (evt) => {
    console.log(evt.target.value);
    setAmount(evt.target.value);
  };
  const handleReset = () => {
    setAmount(0);
  };
  const handleFilp = () => {
    handleReset();
    setFlipped((current) => !current);
  };

  return (
    <>
      <h3>Minutes To Hours</h3>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={flipped ? amount : amount * 60}
          id="minutes"
          type="number"
          placeholder="Minutes"
          onChange={handleChange}
          disabled={!flipped}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={flipped ? amount / 60 : amount}
          id="hours"
          type="number"
          placeholder="Hours"
          onChange={handleChange}
          disabled={flipped}
        />
      </div>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleFilp}>Flip</button>
    </>
  );
}

function KmToMiles() {
  const [amount, setAmount] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const handleChange = (evt) => {
    console.log(evt.target.value);
    setAmount(evt.target.value);
  };
  const handleReset = () => {
    setAmount(0);
  };
  const handleFilp = () => {
    handleReset();
    setFlipped((current) => !current);
  };

  return (
    <>
      <h3>KM to Milse</h3>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={flipped ? amount : amount * 60}
          id="minutes"
          type="number"
          placeholder="Minutes"
          onChange={handleChange}
          disabled={!flipped}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={flipped ? amount / 60 : amount}
          id="hours"
          type="number"
          placeholder="Hours"
          onChange={handleChange}
          disabled={flipped}
        />
      </div>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleFilp}>Flip</button>
    </>
  );
}

function App() {
  const [index, setIndex] = useState(0);
  const onSelect = (evt) => {
    setIndex(evt.target.value);
  };

  return (
    <div>
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="xx">고르세요😶‍🌫️</option>
        <option value="0">Time Converter</option>
        <option value="1">Distance Converter</option>
      </select>
      {index === "xx" ? <h3>🥱</h3> : null}
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </div>
  );
}

export default App;
