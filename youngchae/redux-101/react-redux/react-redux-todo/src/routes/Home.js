import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo } from "../store";

function Home() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(addToDo(text));
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

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
