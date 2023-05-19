import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Detail() {
  const toDos = useSelector((state) => state);
  const id = useParams().id;
  const todoText = toDos.find((todo) => todo.id === parseInt(id));
  return (
    <>
      <h1>{todoText?.text}</h1>
      <h5>Created at: {Number(todoText?.id)}</h5>
    </>
  );
}

export default Detail;
