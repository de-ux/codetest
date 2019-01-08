//object for the todo list array
let todoList = {
    todos: [],
    addTodoItem: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
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
};

//object to show users the todo list view in the DOM
var view = {
    displayTodos: function () {
        let todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';

        todoList.todos.forEach(function (todo, position) {
            let todoLi = document.createElement('li');
            let checkbox = document.createElement('input')
            let todoTextComplete = '';

            if (todo.completed === true) {
                todoTextComplete = '[x] ' + todo.todoText;
            } else {
                todoTextComplete = todo.todoText;
            }

            todoLi.id = position;
            todoLi.textContent = todoTextComplete;
            todoLi.appendChild(checkbox);
            todoLi.innerHTML = '<input type="checkbox" id="check"/><label for="check"><span></span>      todo.todoText</label>';
            todosUl.appendChild(todoLi);
        });
    }
}