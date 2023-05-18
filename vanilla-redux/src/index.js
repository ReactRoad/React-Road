import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

//state값이 없다면 default값으로 0 지정
const countModifier = (state = 0) => {
	console.log(state);
	return state;
};
const countStore = createStore(countModifier);

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
