'use strict';

angular
    .module('video-playing-web-app', [
        'ui.router', 'ngSanitize'
    ])
    .config(function($urlRouterProvider, $stateProvider) {

       $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "views/home.html",
                controller: 'Home'
            });
    });