import "./App.css";
import { useState } from "react";

function App() {
  const [minutes, setMinutes] = useState();
  const [hours, sethours] = useState();
  const handleChange = (evt) => {
    console.log(evt.target.value);
    setMinutes(evt.target.value);
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
      <div>너가 입력한 {minutes}~~</div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input value={hours} id="hours" type="number" placeholder="Hours" />
      </div>
    </>
  );
}

export default App;
