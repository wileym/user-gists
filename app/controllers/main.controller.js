;(function(angular){
	'use strict';

	angular
		.module('usergists')
		.controller('MainCtrl', MainCtrl);

	MainCtrl.$inject = ['$location', '$route'];

	function MainCtrl($location, $route){
		var vm = this;
		vm.getActiveNav = getActiveNav;
		vm.handleUserSelect = handleUserSelect;

		function getActiveNav(){
			return $route.current ? $route.current.name:null;
		}

		function handleUserSelect(user){
			var userGistsPath;
			if(!user){
				return;
			}
			userGistsPath = 'users/' + user.username + '/gists';
			console.log('MainCtrl.handleUserSelect - setting location to: ' + userGistsPath);
			$location.path(userGistsPath);
		}
	}

})(angular);