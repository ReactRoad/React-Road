import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");

JSON.parse(localStorage.getItem("toDos")) ||
  localStorage.setItem("toDos", JSON.stringify([]));

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

const store = configureStore({ reducer });

export default store;
