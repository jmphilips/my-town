'use strict'

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