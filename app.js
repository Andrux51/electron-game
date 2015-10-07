var game = angular.module('game', ['ngRoute']);

game.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'LoginController',
        templateUrl: 'views/login.tpl.html'
    });
    $routeProvider.otherwise({redirectTo: '/'});
}]);

game.controller('LoginController', ['$scope', function($scope) {
    $scope.hello = 'world';
}]);
