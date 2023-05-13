import { useState } from 'react';

function TodoList() {
	const [toDo, setToDo] = useState('');
	const [toDos, setToDos] = useState('');
	const onChange = (event) => setToDo(event.target.value);
	const onSubmit = (event) => {
		event.preventDefault();
		if (toDo === '') {
			return;
		}
		setToDos((currentArray) => [toDo, ...currentArray]);
		setToDo('');
	};
	console.log(toDos);

	return (
		<div>
			<h1>My To Dos({toDos.length})</h1>
			<form onSubmit={onSubmit}>
				<input
					onChange={onChange}
					value={toDo}
					type='text'
					placeholder='write your to do...'
				/>
				<button>Add To Do</button>
			</form>
		</div>
	);
}

function App() {
	return (
		<div>
			<TodoList />
		</div>
	);
}

export default App;
