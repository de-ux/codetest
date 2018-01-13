(function() {
  todoApp.controller('HomeCtrl', ['$state', function ($state) {

    var uiConfig = {
      signInSuccessUrl: '#/todos',
      'credentialHelper': firebaseui.auth.CredentialHelper.NONE,
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ]
    };

    if(firebaseui.auth.AuthUI.getInstance()) {
      var ui = firebaseui.auth.AuthUI.getInstance();
      ui.start('#firebaseui-auth-container', uiConfig);
    } else {
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.start('#firebaseui-auth-container', uiConfig);
    }

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        $state.go('todos', {}, { reload: 'todos' });
      }
    });

  }]);
}());
