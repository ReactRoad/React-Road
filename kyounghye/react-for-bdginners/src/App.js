import "./App.css";
import { useState } from "react";

function App() {
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
      <h1>Super Converter</h1>
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

export default App;
