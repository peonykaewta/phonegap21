//angular.module('myApp', ["mobile-angular-ui"]);
var app = angular.module('myApp', [
  "ngRoute",
  "mobile-angular-ui",
  "mobile-angular-ui.touch",
  "mobile-angular-ui.scrollable"
])

app.config(function($routeProvider) {
      $routeProvider.when('/', { 
         templateUrl: 'pages/home.html',
         controller: 'HomeCtrl'
      }).when('/profile', { 
         templateUrl: 'pages/profile.html',
         controller: 'ProfileCtrl'
      });
      // ...
  });

