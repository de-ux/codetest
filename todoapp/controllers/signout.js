(function() {
  todoApp.controller('SignoutCtrl', signoutCtrl);

  function signoutCtrl () {
    firebase.auth().signOut()
  }
}());