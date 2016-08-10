angular
  .module("arrayApp")
  .controller('arrayController', function($scope, arrayService){

    $scope.getData = function(){
      $scope.names = arrayService.getData()
    }

$scope.getData();


  })
