'use strict'

angular
    .module('my-town', ['ngRoute', 'ngMap'])
        .config($routeProvider => 
            $routeProvider
                .when('/', {
                    controller: 'HomeCtrl',
                    templateUrl: 'partials/home.html'
                })
                .when('/map', {
                    controller: 'MapCtrl', 
                    templateUrl: 'partials/map.html'
                })
    )
    .controller('HomeCtrl', function($scope, NgMap) {
        $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyBIjfTBFP_wQKmOzUG8baijPFRcKCqUQ7w"
        NgMap.getMap().then(function(map) {
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
        });
    })
    .controller('MapCtrl', function($scope){})