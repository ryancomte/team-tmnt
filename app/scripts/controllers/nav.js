'use strict';

angular.module('teamTmntApp')
  .controller('NavCtrl', function ($scope, teams) {
    $scope.team = teams;
  });
