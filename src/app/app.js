;(function(angular){
	'use strict';
	angular
		.module('usergists', ['common', 'github', 'mgcrea.ngStrap', 'ngRoute', 'ngResource'])
		.config(configureApp);

	configureApp.$inject = ['$routeProvider'];
	function configureApp($routeProvider){

		$routeProvider
			.when('/users', {
				templateUrl: 'app/routes/users/users.route.tpl.html',
				controller: 'UsersRouteCtrl',
				controllerAs: 'vm',
				bindToController: true
			})
			.when('/users/:username', {
				redirectTo: '/users/:username/gists'
			})
			.when('/users/:username/gists', {
				templateUrl: 'app/routes/gists/gists-list.route.tpl.html',
				controller: 'GistsListRouteCtrl',
				controllerAs: 'vm',
				bindToController: true
			})
			.when('/users/:username/gists/:gistId', {
				templateUrl: 'app/routes/gists/gist-edit.route.tpl.html',
				controller: 'GistEditRouteCtrl',
				controllerAs: 'vm',
				bindToController: true
			})
			.when('/about', {
				templateUrl: 'app/routes/about/about.route.tpl.html',
				controller: 'AboutRouteCtrl',
				controllerAs: 'vm',
				bindToController: true
			})
			.otherwise({
				redirectTo: '/users'
			});
	}
})(angular);