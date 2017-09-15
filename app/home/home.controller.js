angular.module('myApp.Home', [])
.controller('HomeCtrl', ['$scope', 'getSection', function($scope, getSection) {
    var vm = this;
    
    vm.getSection = function(stringNumber){
      vm.sectionName = stringNumber;
      vm.section = getSection.get(stringNumber).then(function(response){
        vm.section = response.data.item;
      });
    }
  
    vm.match = function(val1, val2) {
      return val1 == val2;
    }
    
    vm.getSection('one');
  }])