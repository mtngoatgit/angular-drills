angular
  .module('myApp')
  .service('mySrvc', function($http){

    this.getData = function(){
      return $http({
        method: 'GET',
        url: 'http://smurfs.devmounta.in/smurfs/'
      }).then(function(response){
        return response.data
      })
    }



  })//end of service
