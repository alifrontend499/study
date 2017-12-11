//Angular MYAPP
var myApp = angular.module("myApp", []);

//DEFINING CONTROLLER
myApp.controller('myController', function ($scope) {
    $scope.name = "Ali";
    $scope.age = 22;
    $scope.mission = function () {
        return "Study karna";
    };
    alert($scope.mission());
    console.log($scope);
});