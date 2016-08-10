angular
  .module('myApp')
  .controller('myCtrl', function($scope, mySrvc){

      $scope.getData = function(){
        mySrvc.getData().then(function(response){
          $scope.smurfs = response
        })
      }

      $scope.getData();





  })
