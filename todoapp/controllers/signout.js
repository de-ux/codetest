(function() {
  todoApp.controller('SignoutCtrl', ['$state', function ($state) {

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        firebase.auth().signOut()
        $state.go('home', {}, { reload: 'home' });
      }
    });
  }]);
}());