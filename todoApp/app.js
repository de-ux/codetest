//event handler object for the input button
let eventHandlers = {
    ableSubmitBtn: function () {
        let todoInput = document.getElementById("todo-input");

        if (todoInput.value === "") {
            document.getElementById("submit-btn").disabled = true;
        } else {
            document.getElementById("submit-btn").disabled = false;
        };
    }
};