//SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//Functions
function addTodo(event) {
  //Prevent form from submitting
  event.preventDefault();
  //Create to do div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //Create check button
  const checkedButton = document.createElement("button");
  checkedButton.innerHTML = "<i class= 'fas fa-check'></i>";
  checkedButton.classList.add("complete-btn");
  todoDiv.appendChild(checkedButton);
  //Create trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<i class= 'fas fa-trash'></i>";
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //Append to do list
  todoList.appendChild(todoDiv);
  //clear input value aftert storing
  todoInput.value = "";
}

function deleteCheck(event) {
  const item = event.target;
  if (item.classList[0] === "trash-btn") {
    item.parentElement.remove();
  }
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
