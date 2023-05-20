import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

const reducer = createReducer([], {
	[addToDo]: (state, action) => {
		//push는 아무것도 리턴하지 않아, 대신 state를 mutate해줌
		state.push({ text: action.payload, id: Date.now() });
	},
	[deleteToDo]: (state, action) =>
		//filter는 state를 mutate하지 않음, filter는 새로운 array를 리턴
		state.filter((toDo) => toDo.id !== action.payload),
});

const store = configureStore({reducer});

export const actionCreators = {
	addToDo,
	deleteToDo,
};
export default store;
