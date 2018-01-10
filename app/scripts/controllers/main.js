'use strict';

/**
 * @ngdoc function
 * @name codetestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the codetestApp
 */
angular.module('codetestApp')
  .controller('MainCtrl', function ($scope) {
    //Variables
    $scope.tasks = [];

    //Functions
    $scope.addTask = addTask;
    $scope.removeTask = removeTask;

    /**
     * Adds the user entered task to the global task list
     * @param {String task} the input text for the task to be added
     */
    function addTask(task) {
      $scope.tasks.push({
        text: task,
        completed: false,
        id: $scope.tasks.length
      });


      // Reset the form model.
      $scope.task = '';
      $scope.toDoForm.$setPristine();
    }

    /**
     * Removes the user clicked task from the global task list
     * @param {String id} the id of the task to be removed
     */
    function removeTask(id) {
      $scope.tasks = $scope.tasks.filter(function(obj) {
        return obj.id !== id;
      });
    }
  });
