// get input components
const todoInput = document.getElementById('newtodo');
const todoList = document.getElementById('listComponent');

// function called for adding new todo
const addNewTodo = () => {
  const text = todoInput.value.trim();
  const listItem = document.createElement('li');
  const deleteButton = document.createElement('button');
  
  // build individual todo
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