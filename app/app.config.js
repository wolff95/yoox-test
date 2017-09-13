
angular.module('myApp')
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    
        $routeProvider.when('/', {
          templateUrl: 'home/home.view.html',
          controller: 'HomeCtrl'
        });
    
      $routeProvider.otherwise({redirectTo: '/'});
    }]);
    