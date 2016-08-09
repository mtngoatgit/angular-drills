angular
    .module("myApp")
    .controller("myController", function($scope, myService){

$scope.getData = function() {
    $scope.people = myService.getData();
};

$scope.getData();






    })// end of control