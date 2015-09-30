angular.module('mailBox', [ 'ngRoute', 'ngSanitize']).config(function ( $routeProvider ) {

  'use strict';

  $routeProvider
    .when('/inbox', {
      templateUrl: 'views/inbox.html',
      controller: 'InboxCtrl',
      controllerAs: 'inbox'
    })
    .when('/inbox/email/:id', {
      templateUrl: 'views/email.html',
      controller: 'EmailCtrl',
      controllerAs: 'email'
    })
    .when('/sent',{
        timplateUrl : 'views/sent.html',
        controller : 'SentCtrl',
        controllerAs: 'sent'
    })
    .when('/starred',{
        timplateUrl : 'views/starred.html',
        controller : 'StarCtrl',
        controllerAs: 'starred'
    })
    .when('/draft',{
        timplateUrl : 'views/draft.html',
        controller : 'DraftCtrl',
        controllerAs: 'draft'
    })
    .otherwise({
      redirectTo: '/inbox'
    });
}).run(function($rootScope){
  $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
    console.log(event, current, previous, rejection)
  })
});
