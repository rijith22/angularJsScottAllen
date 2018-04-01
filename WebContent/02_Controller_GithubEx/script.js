// Code goes here
var MainController = function($scope, $http) {

  var onUserComplete = function(response) {
    $scope.message= 'Yo';
    $scope.user = response.data;
    $scope.statusCode = response.status;
  };

  $http.get("https://api.github.com/users/rijith22")
    .then(onUserComplete);
};
