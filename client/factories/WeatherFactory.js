'use strict'

// This factory calls to the Weather Underground Api and grabs the weather and returs the object
app.factory('WeatherFactory', function($q, $http){
    
        const getWeather = (searchString) => { 
            let latitude = '';
            let longitude = '';
            return $q(function(resolve, reject){
                $http({
                    method: 'GET',
                    url: searchString
                })
                .success(function(results){
                    resolve(results)
                })
                .catch(function(error){
			        reject(error);
		        });
            })
        }
        return {getWeather}
    });