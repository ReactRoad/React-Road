import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => {
    setValue((prev) => prev + 1);
  };

  const [keyword, setKeyword] = useState("");
  const onChange = (evt) => {
    setKeyword(evt.target.value);
  };

  console.log("난 항상 실행중~!!!");
  const iRunOnlyOnce = () => {
    console.log("난 한번만 실행중~~");
  };

  //우리 코드가 딱 한번만 실행될 수 있도록 한다.
  //왜? react가 지켜볼게 아무것도 업따...그래서 처음 한 번만 실행된다..
  useEffect(() => {
    console.log("API 부르는중...");
  }, []);

  //나는 내 코드의 특정한 부분만이 변화했을 때, 원하는 코드들을 실행할 수 있는 방법을 배우고싶다..ㅠ
  //키워드가 변화될 때만 검색하고싶음
  //키워드 지켜봐~~
  useEffect(() => {
    if (keyword !== "" && keyword.length > 3) {
      //키워드가 빈값이 아니라면 그 때 검색 시작
      console.log("검색하는중...", keyword);
    }
  }, [keyword]);

  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={onChange}
        placeholder="검색하세용..."
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
