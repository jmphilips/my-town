'use strict'

const app = angular.module('my-town', ['ngRoute', 'ngMap', ])
        .config($routeProvider => 
            $routeProvider
                .when('/', {
                    controller: 'HomeCtrl',
                    templateUrl: 'partials/home.html'
                })
    )

