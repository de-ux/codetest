(function() {
  todoApp.controller('LoginCtrl', loginCtrl);

  function loginCtrl () {
    var uiConfig = {
      signInSuccessUrl: '#/todos',
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ]
    };

    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
  }
}());
