'use strict'

const app = angular.module('my-town', ['ngRoute', 'ngMap', ])
        .config($routeProvider => 
            $routeProvider
                .when('/', {
                    controller: 'HomeCtrl',
                    templateUrl: 'partials/home.html'
                })
    )
    .controller('HomeCtrl', function($scope, NgMap, WeatherFactory) {
        $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyBIjfTBFP_wQKmOzUG8baijPFRcKCqUQ7w"
         
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position){  
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;
                WeatherFactory.getWeather(`http://api.wunderground.com/api/9a5695c0cb2e4520/geolookup/conditions/q/${latitude},${longitude}.json`)
                .then((results) => {
                    console.log(results)
                    $scope.hey = results.current_observation.display_location.full;
                    $scope.fahr = results.current_observation.feelslike_f;
                })
                });
            };   
    })
    // .factory('WeatherFactory', function($q, $http){
    //     const getWeather = (searchString) => { 
    //         let latitude = '';
    //         let longitude = '';
    //         return $q(function(resolve, reject){
    //             $http({
    //                 method: 'GET',
    //                 url: searchString
    //             })
    //             .success(function(results){
    //                 resolve(results)
    //             })
    //             .catch(function(error){
	// 		        reject(error);
	// 	        });
    //         })
    //     }
    //     return {getWeather}
    // })
