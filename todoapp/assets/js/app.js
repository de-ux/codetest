var todoApp = angular.module('todoApp',[]);

todoApp.controller('TodoController', ['$scope', function($scope) {
  $scope.saved = localStorage.getItem('todos');
  $scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [];
  localStorage.setItem('todos', JSON.stringify($scope.todos));

  $scope.addTodo = function() {
    $scope.todos.push({
      text: $scope.todoText,
      done: false,
      id:   $scope.todos.length
    });
    $scope.todoText = '';
    localStorage.setItem('todos', JSON.stringify($scope.todos));
  };

  $scope.remove = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo){
      if (!todo.done)
        $scope.todos.push(todo);
    });
    localStorage.setItem('todos', JSON.stringify($scope.todos));
  };

  $scope.clearAll = function() {
    $scope.todos = [];
    localStorage.setItem('todos', JSON.stringify($scope.todos));
  }
}]);