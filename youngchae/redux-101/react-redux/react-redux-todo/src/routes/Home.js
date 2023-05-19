import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, set } from "../store";

function Home() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state);
  const todoData = JSON.parse(localStorage.getItem("toDos"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(set());
  }, []);

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(add(text));
    setText("");
  }

  function onClick(e) {
    const id = e.target.id;
    dispatch(remove(id));
  }

  function handleReset() {
    localStorage.clear();
    todoData.forEach((todo) => dispatch(remove(todo.id)));
  }

  return (
    <>
      <h1>To Do</h1>
      <button onClick={handleReset}>Reset</button>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>
            <Link to={`/${todo.id}`}>{todo.text}</Link>
            <button id={todo.id} onClick={onClick}>
              DEL
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

// connect 함수 사용
// function mapStateToProps(state) {
//   return { toDos: state };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     addToDo: text => dispatch(actionCreators.addToDo(text))
//   };
// }

// export default connect(mapStateToProps)(Home);
export default Home;
