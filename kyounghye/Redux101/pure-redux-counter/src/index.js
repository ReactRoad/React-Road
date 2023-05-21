import { creaStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("spam");

let count = 0;
number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count = count + 1;
};

const handleMinus = () => {
  count = count - 1;
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
