(function() {
  todoApp.controller('HomeCtrl', ['$state', function ($state) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        $state.go('todos', {}, { reload: 'todos' });
      }
    });
  }]);
}());
