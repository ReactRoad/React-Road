import "./App.css";
import { useState } from "react";

function App() {
  const [minutes, setMinutes] = useState(0);
  const handleChange = (evt) => {
    console.log(evt.target.value);
    setMinutes(evt.target.value);
  };
  const handleReset = () => {
    setMinutes(0);
  };

  return (
    <>
      <h1>Super Converter</h1>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={minutes}
          id="minutes"
          type="number"
          placeholder="Minutes"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={minutes / 60}
          id="hours"
          type="number"
          placeholder="Hours"
        />
      </div>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;
