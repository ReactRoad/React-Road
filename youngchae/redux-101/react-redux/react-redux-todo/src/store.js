import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

export const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

JSON.parse(localStorage.getItem("toDos")) ||
  localStorage.setItem("toDos", JSON.stringify([]));

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      const addItem = [{ text: action.text, id: Date.now() }, ...state];
      localStorage.setItem("toDos", JSON.stringify(addItem));
      return addItem;
    // return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      const delItem = state.filter((todo) => todo.id !== parseInt(action.id));
      localStorage.setItem("toDos", JSON.stringify(delItem));
      return delItem;
    // return state.filter((toDo) => toDo.id !== parseInt(action.id));
    default:
      return state;
  }
};

const store = createStore(reducer);

const save = (state) => {
  localStorage.setItem("toDos", JSON.stringify(state));
  return state;
};

export default store;
