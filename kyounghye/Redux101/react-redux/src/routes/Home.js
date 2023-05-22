import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { actionCreators, addTodo } from "./store";

function Home(toDos, dispatch) {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    addTodo(text);
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    dddTodo: (text) => {
      dispatch(actionCreators.addTodo(text));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
