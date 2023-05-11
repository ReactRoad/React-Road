import "./App.css";
import { useState } from "react";

const Btn = ({ title, changeValue }) => {
  return (
    <button
      onClick={changeValue}
      style={{
        backgroundColor: "skyblue",
        color: "white",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
      }}
    >
      {title}
    </button>
  );
};

//state에 변화가 있을 때만 re-rend를 해줘!
//const MemorizedBtn = React.memo()

function App() {
  const [value, setValue] = useState("Save Change");
  const changeValue = () => {
    setValue("Revert Change");
  };
  return (
    <>
      {/*강조! props로서 넣으면 그건 절대 자동적으로 우리의 return에 들어가지
      않는다!!*/}
      <Btn title={value} changeValue={changeValue} />
      <Btn title="Contiue" />
    </>
  );
}

export default App;
