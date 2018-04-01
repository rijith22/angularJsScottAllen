// Code goes here

(function() {

  var app = angular.module("githubViewer", []);

  var MainController = function($scope, $http) {

  var onUserComplete = function(response) {
    $scope.message= 'Yo';
    $scope.user = response.data;
  };

  $http.get("https://api.github.com/users/rijith22")
    .then(onUserComplete);
  

  $scope.message = "github viewer"
  $scope.modelValue=$scope.username; // will be blank as it will only be initialised once at start an
  //at that time the username value is not defined
	
};

  app.controller("MainController", ["$scope", "$http", MainController]);

}());