angular
    .module('apiApp')
    .controller('apiController', function($scope, apiService){



$scope.getData = function(){
    apiService.getData().then(function(response) {
        $scope.images = response.data
    })
}

$scope.getData();





    })//end of controller