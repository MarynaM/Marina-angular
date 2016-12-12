(function(){
	var app = angular.module("marinaApp", []);
	
	
	app.run(function(){
		
	});
	app.factory('dataService', function(){
		
		return {
			getAdriysNames(){
				return ["Primak", "Lapko", "Velikiy"];
			}
		}
	});
	
	app.controller('phoneController', function($scope, dataService) {
		$scope.names = dataService.getAdriysNames();
		
		

	});

	angular.module('buttonsDemo1', ['ngMaterial'])

	.controller('AppCtrl', function($scope) {
	  $scope.title1 = 'Button';
	  $scope.title4 = 'Warn';
	  $scope.isDisabled = true;

	  $scope.googleUrl = 'http://google.com';

	});


})();