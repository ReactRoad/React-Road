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
  //음..어렵따
  const handleDelete = (props) => {
    console.log(props);
    setTodos((currentArray) => currentArray.splice(props, 1));
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
        <button>추가</button>
      </form>
      <ul>
        {todos.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <button>완료</button>
              <button onClick={handleDelete}>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
