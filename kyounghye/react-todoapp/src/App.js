import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo("");
    console.log(todos);
  };
  return (
    <div>
      <h1> My Todo ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={todo}
          placeholder="뭔가 해야할걸 적으렴"
          onChange={onChange}
        />
        <button>등록</button>
      </form>
    </div>
  );
}

export default App;
