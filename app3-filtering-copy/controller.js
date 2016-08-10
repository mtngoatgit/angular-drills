angular
  .module('filterApp')
  .controller('filterCtrl', function($scope, filterSvrc){

    $scope.getData = function() {
      $scope.people = filterSvrc.getData();
      }

      $scope.getData();

      $scope.test = "hi there";

  });
