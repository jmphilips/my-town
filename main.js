'use strict'

angular
    .module('my-town', ['ngRoute'])
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
    .config(function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyBIjfTBFP_wQKmOzUG8baijPFRcKCqUQ7w',
            v: '3.20', //defaults to latest 3.X anyhow
            libraries: 'weather,geometry,visualization'
        });
    })
    .controller('HomeCtrl', function($scope, uiGmapGoogleMapApi){
            uiGmapGoogleMapApi.then(function(maps) {
            });
    })
    .controller('MapCtrl', function($scope){})