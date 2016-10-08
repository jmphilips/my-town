'use strict'

angular
    .module('my-town', ['ngRoute'])
        .config($routeProvider => 
            $routeProvider
                .when('/', {
                    controller: 'HomeCtrl',
                    templateUrl: 'partials/home.html'
                }))
        .controller('HomeCtrl', function($scope){
            
        })