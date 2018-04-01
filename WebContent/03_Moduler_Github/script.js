// Code goes here

(function() {
	//create module with same name as present on index.html page
	var app = angular.module("githubViewer", []);

	//create controller
	var MainController = function($scope, $http) {

		var onUserComplete = function(response) {
			$scope.message = 'Yo';
			$scope.user = response.data;
		};

		$http.get("https://api.github.com/users/rijith22").then(onUserComplete);
	};

	//register the controller created above to the module created on the first line
	app.controller("MainController", [ "$scope", "$http", MainController ]);

}());