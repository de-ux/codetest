(function() {
  todoApp.controller('SignoutCtrl', ['$state', function ($state) {
    firebase.auth().signOut()
    $state.go('home', {}, { reload: 'home' });  }]);
}());