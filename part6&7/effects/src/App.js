import { useState, useEffect } from 'react';

function CountAndKeyword() {
	const [counter, setCounter] = useState(0);
	const [keyword, setKeyword] = useState('');
	const onClick = () => setCounter((prev) => prev + 1);
	const onChange = (event) => setKeyword(event.target.value);

	useEffect(() => {
		console.log('I run only once.');
	}, []);
	useEffect(() => {
		console.log("I run when 'keyword' changes.");
	}, [keyword]);

	useEffect(() => {
		console.log("I run when 'counter' changes.");
	}, [counter]);

	//두가지 state를 합칠 수 있음
	useEffect(() => {
		console.log("I run when 'keyword & counter' changes.");
	}, [keyword, counter]);

	return (
		<div>
			<input
				value={keyword}
				onChange={onChange}
				type='text'
				placeholder='Search here...'
			/>
			<h1>{counter}</h1>
			<button onClick={onClick}>click me</button>
		</div>
	);
}

function CleanUp() {
	const [showing, setShowing] = useState(false);
	const onClick = () => setShowing((prev) => !prev);
	return (
		<div>
			{showing ? <Hello /> : null}
			<button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
		</div>
	);
}

function Hello() {
	return <h1>Hello</h1>;
}

function App() {
	return (
		<div>
			<CountAndKeyword />
			<br />
			<hr />
			<CleanUp />
		</div>
	);
}

export default App;
