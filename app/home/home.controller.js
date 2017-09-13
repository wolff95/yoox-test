angular.module('myApp.Home', [])
.controller('HomeCtrl', ['$scope', 'getSection', function($scope, getSection) {
    var vm = this;
  
    vm.hello ="aaaah";
    
    vm.getSection = function(stringNumber){
      vm.section = getSection.get(stringNumber).then(function(response){
        vm.section = response.data.item;
      });
    }
  
    vm.getSection('one');
  }])