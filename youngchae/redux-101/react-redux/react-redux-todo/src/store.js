import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.unshift({ text: action.payload, id: Date.now() });
      localStorage.setItem("toDos", JSON.stringify(state));
      return state;
    },
    remove: (state, action) => {
      const delItem = state.filter(
        (todo) => todo.id !== parseInt(action.payload)
      );
      localStorage.setItem("toDos", JSON.stringify(delItem));
      return delItem;
    },
  },
});

const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
