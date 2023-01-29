let todos = ["Сделать домашку", "Убраться в комнате"];

const container = document.querySelector(".container");

todos.forEach((todo, index) => {
  const element = document.createElement("h2");
  element.innerHTML = `${index + 1} - ${todo}`;
  container.appendChild(element);
});

const changeText = () => {
  const el = document.querySelector(".title");
  el.innerHTML = "You have clicked";
};

const addTodo = () => {
  const todo = prompt("Что вы хотите сделать?");
  todos.push(todo);
  const element = document.createElement("h2");
  element.innerHTML = `${todos.length} - ${todo}`;
  container.appendChild(element);
};

// const container = document.querySelector(".container");
//
// let todos = JSON.parse(localStorage.getItem("todos")) || [];
//
// todos.forEach((todo, index) => {
//   const element = document.createElement("h2");
//   element.innerHTML = `${index + 1} - ${todo}`;
//   container.appendChild(element);
// });
//
// const handleClick = () => {
//   const el = document.querySelector(".title");
//   el.innerHTML = "You have clicked";
// };
//
// const addTodo = () => {
//   const todo = prompt("Что вы хотите сделать?");
//   todos.push(todo);
//   localStorage.setItem("todos", JSON.stringify(todos));
//   const element = document.createElement("h2");
//   element.innerHTML = `${todos.length} - ${todo}`;
//   container.appendChild(element);
// };
