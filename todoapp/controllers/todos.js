(function() {
  todoApp.controller('TodosCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        $timeout(function() {
          $scope.uid = user.uid;
          $scope.name = user.displayName;
          $scope.ref = firebase.database().ref($scope.uid + '/todos/');

          getTodos($scope.uid);
        });
      }
    });

    var getTodos = function(uid) {
      return $scope.ref.once('value').then(function(snapshot) {
        $scope.todos = snapshot.val();
        $scope.$apply();
      });
    };

    $scope.addTodo = function(uid) {
      firebase.database().ref($scope.uid + '/todos/' + $scope.todoText.replace(/\s/g,'')).push({
        todo: $scope.todoText
      });

      $scope.todoText = '';

      getTodos($scope.uid);
    };

    $scope.deleteTodo = function(val) {
      firebase.database().ref($scope.uid).once('value', function(snapshot) {
        if (snapshot.hasChild('todos')) {
          $scope.ref.child(val).remove();
          getTodos($scope.uid);
        }
      });
    };

    $scope.deleteAll = function() {
      firebase.database().ref($scope.uid).once('value', function(snapshot) {
        if (snapshot.hasChild('todos')) {
          $scope.ref.remove();
          getTodos($scope.uid);
        }
      });
    };

  }]);
}());
