//object for the todo list array
let todoList = {
    todos: [],
    addTodoItem: function (todoText) {
        this.todos.push({
            todoText: todoText,
        });
    },
    deleteTodoItem: function (position) {
        this.todos.splice(position, 1);
    }
};

//object for event handlers
let eventHandlers = {
    toggleSubmitBtn: function () {
        let todoInput = document.getElementById("todoInput");

        if (todoInput.value === "") {
            document.getElementById("submitBtn").disabled = true;
        } else {
            document.getElementById("submitBtn").disabled = false;
        };
    },
    addTodoItem: function () {
        let addTodoInput = document.getElementById('todoInput');
        todoList.addTodoItem(addTodoInput.value);
        todoInput.value = '';
        view.displayTodos();

        var question = document.getElementById("questionText");
        question.setAttribute("hidden", true);
    },
    deleteTodoItem: function (position) {
        todoList.deleteTodoItem(position);
        view.displayTodos();
        var question = document.getElementById("questionText");
        question.removeAttribute("hidden", true);
    }
};

//object to show users the todo list view in the DOM
var view = {
    displayTodos: function () {
        let todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';

        todoList.todos.forEach(function (todo, position) {
            let todoLi = document.createElement('li');

            todoLi.id = position;
            todoLi.innerHTML = '<hr><input type="checkbox" id="check" class="delete" onClick="eventHandlers.deleteTodoItem()" /><label for="check"><span></span></label>' + '&nbsp' + todo.todoText;
            todosUl.appendChild(todoLi);
        });
    },
    eventListeners: function () {
        if (elementClicked.className === 'delete') {
            handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
        }
    }
}