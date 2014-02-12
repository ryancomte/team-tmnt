'use strict';

angular.module('teamTmntApp')
  .service('TurtleService', function turtleService($q,$http) {
        return{
            getTeams: function() {
                var deferred = $q.defer();

                $http({method: 'GET', url: 'http://pure-ocean-3603.herokuapp.com/team'}).success(function(data) {
                        deferred.resolve(data);
                    }
                );
                return deferred.promise;
            },
            getTeam: function(teamId) {
                var deferred = $q.defer();
                $http({method: 'GET', url: ' http://pure-ocean-3603.herokuapp.com/team/'+ teamId}).success(function(data) {
                        deferred.resolve(data);
                    }
                );
                return deferred.promise;
            }
        }
    });
