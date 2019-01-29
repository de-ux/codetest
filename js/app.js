// Potential improvements and expansions
    // Hook up application to a database
    // Replace synchronous dynamic code insertions with async code
    // Handle the use case of very long to-do text addition for better UX
+function() {
    'use strict';

    const userPrompt = document.querySelector('.user-prompt-text');
    const todoAddButton = document.querySelector('.todo-button');
    const todoField = document.querySelector('.todo-field');
    const todoList = document.querySelector('.todos');

    todoField.addEventListener('keyup', () => {
        todoAddButton.classList.add('todo-button--active');
        if(todoField.value.trim() === '') {
            todoAddButton.classList.remove('todo-button--active');
        }
    });

    todoAddButton.addEventListener('click', (event) => {
        // Replace event.preventDefaul() database request when backend is active
        // Make addTodo() call asynchronous when backend is active
        event.preventDefault();
        if(todoField.value.trim() !== '') addTodo();
        todoAddButton.classList.remove('todo-button--active');
        todoField.value = '';
    });

    function addTodo() {
        let todoToAdd = document.createElement('div'); // Create container
        todoToAdd.classList.add('container');

        let todoLabel = document.createElement('label'); // Create label
        todoLabel.classList.add('todo-label');

        let todoInput = document.createElement('input'); // Create checkbox
        todoInput.setAttribute('type', 'checkbox');

        let checkmark = document.createElement('span'); // Create checkmark
        checkmark.classList.add('checkmark');
        
        let todoText = document.createElement('span'); // Create span with input value
        todoText.classList.add('todo-text');

        todoText.appendChild(document.createTextNode(todoField.value.trim()));        
        todoToAdd.appendChild(todoLabel);
        todoLabel.appendChild(todoText);
        todoLabel.appendChild(todoInput);
        todoLabel.appendChild(checkmark);
        
        todoList.appendChild(todoToAdd);
        userPrompt.remove();
       
        todoLabel.addEventListener('click', () => {
            // Remove event listeners here on todoToAdd children if using legacy IE versions
            todoToAdd.remove();
            if(todoList.childElementCount === 0) todoList.prepend(userPrompt);
        });
    }
}();