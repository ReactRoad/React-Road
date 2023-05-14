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

  const [showing, setShowing] = useState(false);
  const onShowing = () => {
    setShowing(!showing);
  };

  //우리 코드가 딱 한번만 실행될 수 있도록 한다.
  //왜? react가 지켜볼게 아무것도 업따...그래서 처음 한 번만 실행된다..
  useEffect(() => {
    console.log("난 카운터가 변화할 때 실행되용");
  }, [counter]);

  //나는 내 코드의 특정한 부분만이 변화했을 때, 원하는 코드들을 실행할 수 있는 방법을 배우고싶다..ㅠ
  //키워드가 변화될 때만 검색하고싶음
  //키워드 지켜봐~~
  useEffect(() => {
    if (keyword !== "" && keyword.length > 3) {
      //키워드가 빈값이 아니라면 그 때 검색 시작
      console.log("난 키워드가 변화할 때 실행되용", keyword);
    }
  }, [keyword]);

  //컴포넌트가 파괴될 때도 functhion을 실행하고 싶어효...
  function Hello() {
    // const byFn = () => {
    //   console.log("뽀개졌다! :(");
    // };
    // const hiFn = () => {
    //   console.log("만들어졌다! :D");
    //   return byFn;
    // };

    useEffect(() => {
      console.log("만들어졌다! :D");
      return () => {
        console.log("뽀개졌다! :(");
      };
    }, []);
    return <div>나 보여!</div>;
  }

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
      <h3>{showing ? <Hello /> : null}</h3>
      <button onClick={onShowing}>{showing ? "Show" : "Hide"}</button>
    </div>
  );
}

export default App;
