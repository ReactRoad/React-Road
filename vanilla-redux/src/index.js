import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

number.innerText = 0;

//---------------------------------------------
//state값이 없다면 default값으로 0 지정
//유일하게 data를 수정하는 곳 (Reducer 안)
const countModifier = (count = 0, action) => {
	if (action.type === 'ADD') {
		return count + 1;
	} else if (action.type === 'MINUS') {
		return count - 1;
	} else {
		return count;
	}
};
//---------------------------------------------

const countStore = createStore(countModifier);
// console.log(countStore);
const onChange = () => {
	// console.log(countStore.getState());
	number.innerText = countStore.getState();
};
countStore.subscribe(onChange);

add.addEventListener('click', () => {
	countStore.dispatch({ type: 'ADD' });
});

minus.addEventListener('click', () => {
	countStore.dispatch({ type: 'MINUS' });
});
