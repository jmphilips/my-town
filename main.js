'use strict'

angular
    .module('my-town', ['ngRoute', 'ngMap', ])
        .config($routeProvider => 
            $routeProvider
                .when('/', {
                    controller: 'HomeCtrl',
                    templateUrl: 'partials/home.html'
                })
    )
    .controller('HomeCtrl', function($scope, NgMap, Weather) {
        $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyBIjfTBFP_wQKmOzUG8baijPFRcKCqUQ7w"

        $scope.hey = Weather
    })
    .factory('Weather', function($http){

        var hey = "hey"

        return hey
    })