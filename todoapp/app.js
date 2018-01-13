var todoApp = angular.module('todoApp', ['ui.router']);

var config = {
  apiKey: "AIzaSyDRPWAEAjij8BCYddZQEi6WRJoFXdnpSTo",
  authDomain: "todo-app-a4a6f.firebaseapp.com",
  databaseURL: "https://todo-app-a4a6f.firebaseio.com",
  projectId: "todo-app-a4a6f",
  storageBucket: "todo-app-a4a6f.appspot.com",
  messagingSenderId: "876539279137"
};

firebase.initializeApp(config);

todoApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'partials/home.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    })
    .state('todos', {
      url: '/todos',
      templateUrl: 'partials/todos.html',
      controller: 'TodosCtrl'
    })
    .state('signout', {
      url: '/signout',
      templateUrl: 'partials/home.html',
      controller: 'SignoutCtrl'
    });
});

