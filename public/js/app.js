var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.when({
		url:'/ships/',
		templateUrl: 'partials/frontpage.html',
		controller: 'storeFrontController'
	});
	$locationProvider.htmlMode(true).hashbang('!');
});

app.controller('storeFrontController',['$scope', function($scope){
	
}]);