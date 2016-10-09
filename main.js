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

        let searchString = 'http://api.wunderground.com/api/9a5695c0cb2e4520/conditions/q/CA/San_Francisco.json'

    if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position){
             
                Weather.getWeather(searchString)
                    .then(function(results){
                    $scope.hey = results
                })
            });
        };        
    })
    .factory('Weather', function($q, $http){
        const getWeather = (searchString) => { 
            return $q(function(resolve, reject){
                $http({
                    method: 'GET',
                    url: searchString
                })
                .success(function(results){
                    resolve(results)
                    // console.log(results)
                })
                .catch(function(error){
			        reject(error);
		        });
            })
        }
        return {getWeather}
    })
