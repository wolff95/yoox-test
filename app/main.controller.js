'use strict';

angular.module('myApp.Main', [])

.controller('MainCtrl', ['$scope', 'getSection', function($scope, getSection) {
  
}])

.factory('getSection', ['$http', function($http) {
  
  var getSection = {
    get : get
  }

  return getSection;

  function get(stringNumber){
    return $http.get('assets/data/' + stringNumber + '.json');
  }

}]);
