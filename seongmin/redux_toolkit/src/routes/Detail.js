import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function Detail({ toDos }) {
	const myId = useParams().id;
	const toDo = toDos.find((toDo) => toDo.id === parseInt(myId));
	return (
		<>
			<h1>{toDo?.text}</h1>
			<h5>Created at: {toDo?.id}</h5>
		</>
	);
}
function mapStateToProps(state) {
	return { toDos: state };
}
export default connect(mapStateToProps)(Detail);

/*
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { remove } from '../store';

const Detail = ({ toDos, onBtnClick }) => {
	const { id } = useParams();
	const toDo = toDos.find((toDo) => toDo.id === parseInt(id));
	const navigate = useNavigate();

	const handleDel = () => {
		onBtnClick(id);
		navigate('/');
	};

	return (
		<>
			<h1>{toDo?.text}</h1>
			<h2>Created at: {toDo?.id}</h2>
			<button onClick={handleDel}>DEL</button>
		</>
	);
};

function mapStateToProps(state) {
	return {
		toDos: state,
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		onBtnClick: (id) => dispatch(remove(id)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
*/
