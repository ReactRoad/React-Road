import { createStore } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

/*
const reducer = (state = [], action) => {
	//state에 값을 넣으면 브라우저에 상태가 보이게 됌
	switch (action.type) {
		case addToDo.type:
			console.log(action);
			return [{ text: action.payload, id: Date.now() }, ...state];
		case deleteToDo.type:
			return state.filter((toDo) => toDo.id !== action.payload);
		default:
			return state;
	}
};
*/
const reducer = createReducer([], {
	[addToDo]: (state, action) => {
		state.push({ text: action.payload, id: Date.now() });
	},
	[deleteToDo]: (state, action) => {},
});

const store = createStore(reducer);

export const actionCreators = {
	addToDo,
	deleteToDo,
};
export default store;
