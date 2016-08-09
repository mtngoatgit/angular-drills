angular
    .module("arrayApp")
    .controller("arrayController", function($scope, arrayService){


    $scope.getData = function(){
        $scope.people = arrayService.getData();
    }

$scope.getData();






    })//end of controller