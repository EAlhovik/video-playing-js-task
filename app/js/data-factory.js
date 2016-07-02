'use strict';

angular.module('video-playing-web-app')
    .factory('Data', ['$http', '$q', function($http, $q) {
      var deferred = $q.defer();
        return {
           getMovies: function() {
                $http.get('movies.json').success(function(data) {
                    deferred.resolve(data);
                }).
                error(function(data) {
                    deferred.reject(data);
                });

                return deferred.promise;
            }

        };

    }]);