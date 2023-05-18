import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

//state값이 없다면 default값으로 0 지정
const countModifier = (count = 0, action) => {
	if (action.type === 'ADD') {
		return count + 1;
	} else if (action.type === 'MINUS') {
		return count - 1;
	} else {
		return count;
	}
};
const countStore = createStore(countModifier);
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'MINUS' });
console.log(countStore.getState());

/*
//data가 바뀌는 시점
let count = 0;

number.innerText = count;

const updateText = () => {
	number.innerText = count;
};

const handleAdd = () => {
	count = count + 1;
	updateText();
};

const handleMinus = () => {
	count = count - 1;
	updateText();
};
add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
*/
