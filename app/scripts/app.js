'use strict';

angular.module('teamTmntApp', ['ui.router']).
    config(function($stateProvider, $urlRouterProvider) {
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/");

        var nav = {
            templateUrl: 'views/nav.html',
            controller: 'NavCtrl',
            resolve: {
                teams: function(TurtleService) {
                    return TurtleService.getTeams();
                }
            }
        };
        // Now set up the states
        $stateProvider
            .state('main', {
                url: "/",
                views: {
                    nav: nav,
                    body: {
                        templateUrl: "views/main.html",
                        controller: 'MainCtrl',
                        resolve: {
                            teams: function(TurtleService) {
                                return TurtleService.getTeams();
                            }
                        }
                    }
                }

            })
            .state('team', {
                url: '/team/:teamId',
                views: {
                    nav: nav,
                    body: {
                        templateUrl: 'views/team.html',
                        controller: 'TeamCtrl',
                        resolve: {
                            team: function($stateParams, TurtleService) {
                                return TurtleService.getTeam($stateParams.teamId);
                            }
                        }
                    }

                }

            })
    });
