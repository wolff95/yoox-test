'use strict';

angular.module('myApp.Main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view/main.html',
    controller: 'MainCtrl'
  });
}])

.controller('MainCtrl', ['$scope', 'getSection', function($scope, getSection) {
  $scope.ciao = 'ciao';
  $scope.getSection = function(stringNumber){
    $scope.section = getSection.get(stringNumber);
  }

  $scope.getSection('one');
}])

.factory('getSection',['$http', function($http) {
  var getSection = {
    get : get
  }

  return getSection;

  function get(stringNumber){
    $http.get('assets/data/' + stringNumber + '.json').success(function(data) {
        return data.item;
    });
  }

}]);
