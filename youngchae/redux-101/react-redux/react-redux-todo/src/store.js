import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");

JSON.parse(localStorage.getItem("toDos")) ||
  localStorage.setItem("toDos", JSON.stringify([]));

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       const addItem = [{ text: action.payload, id: Date.now() }, ...state];
//       localStorage.setItem("toDos", JSON.stringify(addItem));
//       return addItem;
//     case deleteToDo.type:
//       const delItem = state.filter(
//         (todo) => todo.id !== parseInt(action.payload)
//       );
//       localStorage.setItem("toDos", JSON.stringify(delItem));
//       return delItem;
//     default:
//       return state;
//   }
// };

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.unshift({ text: action.payload, id: Date.now() });
    localStorage.setItem("toDos", JSON.stringify(state));
    return state;
  },
  [deleteToDo]: (state, action) => {
    const delItem = state.filter(
      (todo) => todo.id !== parseInt(action.payload)
    );
    localStorage.setItem("toDos", JSON.stringify(delItem));
    return delItem;
  },
});

const store = createStore(reducer);

const save = (state) => {
  localStorage.setItem("toDos", JSON.stringify(state));
  return state;
};

export default store;
