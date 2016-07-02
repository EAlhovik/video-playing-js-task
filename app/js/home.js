'use strict';

angular.module('video-playing-web-app')
  .controller('Home', ['$scope', '$http', '$sce', '$timeout', 'Data', function($scope, $http, $sce, $timeout, Data) {
    $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    };
    Data.getMovies().then(function(data) {
      $scope.movies = data;
    }).catch(function() {
      console.log('error');
    });
    $scope.playCurrentMovie = function(movie) {
      $scope.movie = movie;
    };
}]);