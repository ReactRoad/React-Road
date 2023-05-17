import React, { useState } from "react";
import { useSelector } from "react-redux";

function Home() {
  const [text, setText] = useState("");
  const todo = useSelector((state) => state);
  console.log(todo);

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
}

// function mapStateToProps(state) {
//   return { toDos: state };
// }

// export default connect(mapStateToProps)(Home);
export default Home;
