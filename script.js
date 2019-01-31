const addTodoButton = document.querySelector('.add-todo-button');
const textUserEnters = document.getElementById('text-user-enters');
const todoListContainer = document.getElementById('todo-list-container')
const placeHolderText = document.querySelector('.placeholder-text');

addTodoButton.addEventListener('click', (event) => {
  event.preventDefault();

  let label = document.createElement('label');
  label.classList.add('label-container');
  todoListContainer.appendChild(label);

  //checkbox
  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('check-boxes');
  label.appendChild(checkbox);

  //Check mark that appears in todo list boxes.
  const checkmark = document.createElement('span');
  checkmark.classList.add('check-mark-element');
  label.appendChild(checkmark);

  //text of each entered todo item that is displayed in todo list
  let individualTodoItems = document.createElement('span')
  individualTodoItems.classList.add('individual-todo-items');
  individualTodoItems.innerHTML = textUserEnters.value;
  label.appendChild(individualTodoItems);
  addTodoButton.classList.remove('add-todo-button-active');

  // Populate list
  todoListContainer.appendChild(label);
  textUserEnters.value = '';
  placeHolderText.remove();
  checkbox.addEventListener('click', () => {
    label.remove();

  });

});

textUserEnters.addEventListener('keydown', (event) => {
  //  if (textUserEnters.event == true) {

  addTodoButton.classList.add('add-todo-button-active');
});



