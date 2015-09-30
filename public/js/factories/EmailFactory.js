/**
 * Factory: EmailFactory
 */
angular.module('mailBox')
  .service('EmailFactory', function EmailFactory ($q, $http, $routeParams) {
    'use strict';
    var msgarray = {};

    msgarray.reply = function (message) {
      if (message) {
        alert('Reply content: ' + message);
      }
    };

    msgarray.getMessage = function (params) {
      if ( params.id ) {
        var deferred = $q.defer();
        $http.get('json/message/' + params.id + '.json')
          .success(function (data) {
            deferred.resolve(data);
          })
          .error(function (data) {
            deferred.reject(data);
          });
        return deferred.promise;
      }
    };

    return msgarray;
  });
