angular
    .module("simpleApp")
    .controller('simpleCtrl', function ($scope, simpleService) {

    
    $scope.getThem = function () {
       $scope.people = simpleService.getPeople()
    } 

    $scope.getThem();




    })//end of control