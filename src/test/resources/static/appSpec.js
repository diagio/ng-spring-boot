
describe('MyApp', function () {
	beforeEach(module('controllers'));
	
	it('should assign the correct rapper to scope',
			inject(function ($controller, $rootScope) {
			var $scope = $rootScope.$new();
			$controller('MyApp', {
			$scope: $scope
			});
		}));
	
	expect($scope).toEqual('');
});

