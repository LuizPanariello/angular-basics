var app = angular.module("app", ['ngRoute', 'ngResource']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when({
        url: '/ships/',
        templateUrl: 'partials/frontpage.html',
        controller: 'storeFrontController'
    });
    $locationProvider.htmlMode(true).hashbang('!');
});

app.factory('Ships', ['$resource',
    function($resource) {
        return $resource('/api/ships/:id', {
            id: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);

app.controller('storeFrontController', ['$scope', 'Ships',
    function($scope, Ships) {
        $scope.ships = Ships.query(function(err, ships) {
            console.log('right!');
        });
    }
]);

app.filter('searcher', function() {
    return function(array, search) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].name.toUpperCase().indexOf(search.toUpperCase()) == -1) {
                array[i].class = "";
            } else {
                array[i].class = "item-show";
            }
        }
        return array;
    };
});