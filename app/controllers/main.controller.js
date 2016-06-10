;(function(angular){
	'use strict';

	angular
		.module('usergists')
		.controller('MainCtrl', MainCtrl);

	MainCtrl.$inject = ['$route'];

	function MainCtrl($route){
		var vm = this;
		vm.getActiveNav = getActiveNav;

		function getActiveNav(){
			return $route.current ? $route.current.name:null;
		}
	}

})(angular);