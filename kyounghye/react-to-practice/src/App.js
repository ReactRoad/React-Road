import "./App.css";
import { useState } from "react";
import Button from "./Button";
import styles from "./App.module.css";

//정의되지 않은 props에 대한 기본값을 설정한다.
const Btn = ({ title, changeValue, fontSize = 16 }) => {
  return (
    <button
      onClick={changeValue}
      style={{
        backgroundColor: "skyblue",
        color: "white",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
        fontSize: fontSize,
      }}
    >
      {title}
    </button>
  );
};

// //props의 타입을 지정하는 방법!
// Btn.propType = {
//   text: PropType.string,
//   fontSize: PropType.number,
// };

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
      <Btn title={value} changeValue={changeValue} fontSize={18} />
      <Btn title="Contiue" />
      <Button text={"히히 난 버튼"} />
      <h1 className={styles.title}>히히 난 타이틀</h1>
    </>
  );
}

export default App;
