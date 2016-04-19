(function(angular) {
  angular.module("myApp.controllers", []);
  angular.module("myApp.services", []);
  angular.module("myApp", ["ngResource", "myApp.controllers", "myApp.services"]);
  
  angular.module('cookbook', [])
  .controller('MainCtrl', ['$scope', function($scope) {
	  $scope.emcee = 'Kool G Rap';
  }]);
  
  
}(angular));