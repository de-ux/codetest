const todoController = (() => {
  const $todoListContainer = $('#to-do-list');

  function addToDo () {
    const $todoTextContainer = $('#new-todo-name');
    const $todoText = $todoTextContainer.val();
    const todoID = `#to-do-${$todoText}`;
    const todoTemplate = `
      <div class="to-do" id="to-do-${$todoText}">
        <label class="custom-checkbox">
          <input type="checkbox" value="${$todoText}">
          <span class="checkbox"></span>
          ${$todoText}
        </label>
      </div>
    `;
    // Adds todo to the container
    $todoListContainer.append(todoTemplate);
    // Removes content from textbox
    $todoTextContainer.val('');
    // Attach listener for quick removal of To Do later
    $(todoID).on('click', (e) => {
      $(e.currentTarget).hide('slow', () => e.currentTarget.remove());
    });
  }

  function init () {
    const $addButton = $('#add-todo');
    const $newToDoName = $('#new-todo-name');
    // Attach all our cool listeners
    $addButton.on('click', addToDo);
    $newToDoName.on('keydown', (e) => {
      if (e.currentTarget.value) {
        // Remove disabled class if there is content
        $addButton.removeAttr('disabled');
      } else {
        // Add Disabled class if there is no content
        $addButton.attr('disabled', true);
      }
    });
  }

  return {
    init
  };
})();

todoController.init();
