import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => {
    setValue((prev) => prev + 1);
  };
  console.log("난 항상 실행중~!!!");
  const iRunOnlyOnce = () => {
    console.log("난 한번만 실행중~~");
  };
  //우리 코드가 딱 한번만 실행될 수 있도록 한다.
  useEffect(iRunOnlyOnce, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
