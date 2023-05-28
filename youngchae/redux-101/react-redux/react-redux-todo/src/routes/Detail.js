import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { remove, set } from "../store";

function Detail() {
  const toDos = useSelector((state) => state);
  const id = useParams().id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(set());
  }, []);

  const todoText = toDos.find((todo) => todo.id === parseInt(id));

  const handleDelete = () => {
    dispatch(remove(Number(todoText?.id)));
  };

  return (
    <>
      <h1>{todoText?.text}</h1>
      <h5>Created at: {Number(todoText?.id)}</h5>
      <Link to="/">
        <button onClick={handleDelete}>DELETE</button>
      </Link>
      <Link to="/">
        <button>목록으로</button>
      </Link>
    </>
  );
}

export default Detail;
