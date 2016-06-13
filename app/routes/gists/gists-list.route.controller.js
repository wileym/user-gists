;(function(angular){
	'use strict';

	angular
		.module('usergists')
		.controller('GistsListRouteCtrl', GistsListRouteCtrl);

	GistsListRouteCtrl.$inject = ['$routeParams', 'User'];

	function GistsListRouteCtrl($routeParams, User){
		var vm = this;

		if(!$routeParams.username || angular.isString($routeParams.username) === false){
			console.error('GistListRouteCtrl - cannot load route with invalid username');
			return;
		}

		vm.username = $routeParams.username;
		User.get($routeParams.username) //should be cached by Angular
			.then(
				function(user){
					console.log('GistListRouteCtrl - got user');
					vm.user = user;
					return user.getGists();
				}
			)
			.then(
				function(gists){
					console.log('GistListRouteCtrl - got user\'s gists');
					vm.gists = gists;
				}
			)
			.catch(
				function(err){
					console.error('GistListRouteCtrl.getGists - ' + err);
				}
			);
		
	}

})(angular);