;(function(angular){
	'use strict';
	angular
		.module('usergists', ['common', 'github', 'ngRoute', 'ngResource'])
		.config(configureApp);

	configureApp.$inject = ['$routeProvider'];
	function configureApp($routeProvider){
		
		$routeProvider
			.when('/gists/user/:username/:gistId', {
				templateUrl: 'app/routes/gists/gists.route.tpl.html',
				controller: 'GistsRouteCtrl',
				controllerAs: 'vm',
				bindToController: true,
				name: 'gists'
			})
			.when('/gists', {
				templateUrl: 'app/routes/gists/gists.route.tpl.html',
				controller: 'GistsRouteCtrl',
				controllerAs: 'vm',
				bindToController: true,
				name: 'gists'
			})
			.when('/about', {
				templateUrl: 'app/routes/about/about.route.tpl.html',
				controller: 'AboutRouteCtrl',
				controllerAs: 'vm',
				bindToController: true,
				name: 'about'
			})
			.otherwise({
				redirectTo: '/gists'
			});
	}
})(angular);