'use strict'

app.controller('HomeCtrl', function($scope, NgMap, WeatherFactory, isTrue) {
        $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyBIjfTBFP_wQKmOzUG8baijPFRcKCqUQ7w"
         
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position){  
                    let latitude = position.coords.latitude;
                    let longitude = position.coords.longitude;
                    WeatherFactory.getWeather(`http://api.wunderground.com/api/9a5695c0cb2e4520/geolookup/conditions/q/${latitude},${longitude}.json`)
                        .then((results) => {
                            console.log(results)
                            $scope.hey = results.current_observation.display_location.full;
                            $scope.fahr = Math.floor(results.current_observation.feelslike_f);
                            $scope.currentWeather = results.current_observation.weather;
                            $scope.rain = isTrue.returnsShouldYouMowString($scope.fahr, results.current_observation.precip_today_in)
                    })
            });
        };   
})
