// get input components
const todoInput = document.getElementById('newtodo');
const todoList = document.getElementById('todolist');

// function called for adding new todo
const addNewTodo = () => {
  // build individual todo
  const text = todoInput.value.trim();
  const listItem = document.createElement('li');
  const deleteButton = document.createElement('button');
  
  listItem.textContent = text;
  deleteButton.classList.add('delete-button')
  deleteButton.textContent = "delete"
  deleteButton.addEventListener('click', () => {
    todoList.removeChild(listItem);
  })
  listItem.appendChild(deleteButton);

  // add todo built into list & flushing input
  todoList.appendChild(listItem);
  todoInput.value = "";
}

// reset button
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
  todoInput.value = "";
})

// submit button
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', addNewTodo);

// reset all button
const resetAllButton = document.getElementById('resetall');
resetAllButton.addEventListener('click', () => {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild)
  };
});