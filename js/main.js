'use strict';
var app=angular.module('web-app', ['ui.router'])
/**
 * Configure the Routes
 */

.config(function ($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider
      .when('', '/')
      .when('/', '/registration')
      .otherwise('/registration');
      
      $stateProvider
        
        .state('base', {
          url: '/',
          templateUrl: 'view/base.html',
          controller: 'BaseCtrl'
        })
    
      
        .state('base.registration', {
          url: 'registration',
          views: {
            'main-view': {
              templateUrl: 'view/registration-form.html',
              controller: 'BaseCtrl',
            }
          }
        })
        .state('base.welcome', {
          url: 'welcome',
          views: {
            'main-view': {
              templateUrl: 'view/home.html',
              controller: 'BaseCtrl',
            }
          }
        })
     
        
});

app.constant("const_url","http://localhost:8100");

app.run(['$rootScope', '$state', '$location', function ($rootScope, $state, $location) {

  $rootScope.$on('$stateChangeSuccess', function (event, toState, current, toParams) {
    $rootScope.const_url = "http://localhost:8100"; /* this is used for url which is changed local server 
    to live server */
    $rootScope.title = toState.title;
  
  });

}]);
