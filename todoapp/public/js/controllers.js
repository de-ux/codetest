!function(){todoApp.controller("LoginCtrl",function(){var t={signInSuccessUrl:"/#/todos",signInOptions:[firebase.auth.EmailAuthProvider.PROVIDER_ID,firebase.auth.PhoneAuthProvider.PROVIDER_ID]};new firebaseui.auth.AuthUI(firebase.auth()).start("#firebaseui-auth-container",t)})}();
!function(){todoApp.controller("SignoutCtrl",function(){firebase.auth().signOut()})}();
todoApp.controller("TodosCtrl",["$scope","$timeout",function(e,o){firebase.auth().onAuthStateChanged(function(d){d&&o(function(){e.uid=d.uid,e.name=d.displayName,e.ref=firebase.database().ref(e.uid+"/todos/"),t(e.uid)})});var t=function(o){return e.ref.once("value").then(function(o){e.todos=o.val(),e.$apply()})};e.addTodo=function(o){firebase.database().ref(e.uid+"/todos/"+e.todoText.replace(/\s/g,"")).push({todo:e.todoText}),e.todoText="",t(e.uid)},e.deleteTodo=function(o){firebase.database().ref(e.uid).once("value",function(d){d.hasChild("todos")&&(e.ref.child(o).remove(),t(e.uid))})}}]);