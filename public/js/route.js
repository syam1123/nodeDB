//Defining the routes
angular.module('mailBox').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/inbox');

    $stateProvider
    .state('inbox', {
        url: "/inbox",
        templateUrl: "views/inbox.html",
        controller : "InboxCntrlr",
        // resolve : {
        //     inboxData : function(MailSrv){
        //         return MailSrv.fetchInbox();
        //     }
        // }
    })
    .state('starred', {
        url: "/starred",
        templateUrl: "views/starred.html",
        controller : "starredController",
        // resolve : {
        //         inboxData : function(MailSrv){
        //             return MailSrv.fetchInbox();
        //         }
        //     }
    })
    .state('important', {
        url: "/important",
        templateUrl: "views/important.html",
        controller : "importantController",
        // resolve : {
        //         inboxData : function(MailSrv){
        //             return MailSrv.fetchInbox();
        //         }
        //     }
    })
    .state('sent', {
        url: "/sent",
        templateUrl: "views/sent.html",
        controller : "SentCtrl",
        // resolve : {
        //         inboxData : function(MailSrv){
        //             return MailSrv.fetchInbox();
        //         }
        //     }
    })
    .state('drafts', {
        url: "/drafts",
        templateUrl: "app/views/draft.html",
        controller : "draftController",
        // resolve : {
        //         inboxData : function(MailSrv){
        //             return MailSrv.fetchInbox();
        //         }
        //     }
    });
});
