import "./App.css";

const Btn = ({ title }) => {
  return (
    <button
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

function App() {
  return (
    <>
      <Btn title="Save Change" />
      <Btn title="Contiue" />
    </>
  );
}

export default App;
