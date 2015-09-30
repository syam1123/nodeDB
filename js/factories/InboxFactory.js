/**
 * Factory: InboxFactory
 */
angular.module('mailBox')
  .service('InboxFactory', function InboxFactory ($q, $http, $location) {
    'use strict';
    var msgarray = {};

    msgarray.messages = [];

    msgarray.goToMessage = function(id) {
      if ( angular.isNumber(id) ) {
        console.log('inbox/email/' + id)
        $location.path('inbox/email/' + id)
      }
    }

    msgarray.getMessages = function () {
      var deferred = $q.defer();
      return $http.get('json/emails.json')
        .success(function (data) {
          msgarray.messages = data;
          deferred.resolve(data);
        })
        .error(function (data) {
          deferred.reject(data);
        });
      return deferred.promise;
    };

    return msgarray;
  });
