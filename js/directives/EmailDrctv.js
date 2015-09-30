/**
 * Directive: Email <email></email>
 */
angular.module('mailBox')
  .directive('email', function EmailDrctv () {
    'use strict';

    return {
      restrict: 'E',
      replace: true,
      scope: true,
      templateUrl: "js/directives/email.tmpl.html",
      controllerAs: 'email',
      controller: function ($routeParams, $scope, EmailFactory) {
        this.message = {};
        this.reply = function (message) {
          EmailFactory.reply(message);
        };
        var getmessage = EmailFactory.getMessage($routeParams);
        if (getmessage) {
          getmessage.then( angular.bind(this, function (response) {
            EmailFactory.message = response;
            this.message = EmailFactory.message;
            $scope.$parent.email.title = this.message.subject;
          }) );
        }
      },
    }
  });
