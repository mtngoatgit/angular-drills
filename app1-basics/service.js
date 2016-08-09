angular
    .module("app")
    .service("serve", function(){


var data = [
    {
        name: "Paxton",
        age: 31,
        shirt: "white"
    },
    {
        name: "Jordan",
        age: 30,
        shirt: "green"
    },
    {
        name: "Mark",
        age: 31,
        shirt: "purple"
    }
]


this.getPeople = function () {
    return data;
}


    }); //end of service
