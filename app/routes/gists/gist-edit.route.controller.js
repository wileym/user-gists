;(function(angular){
	'use strict';

	angular
		.module('usergists')
		.controller('GistEditRouteCtrl', GistEditRouteCtrl);

	GistEditRouteCtrl.$inject = ['$routeParams'];

	function GistEditRouteCtrl($routeParams){
		var vm = this;
		vm.icons = [{"value":"Gear","label":"<i class=\"fa fa-gear\"></i> Gear"},{"value":"Globe","label":"<i class=\"fa fa-globe\"></i> Globe"},{"value":"Heart","label":"<i class=\"fa fa-heart\"></i> Heart"},{"value":"Camera","label":"<i class=\"fa fa-camera\"></i> Camera"}];
		vm.selectedIcon = vm.icons[0];
	}

})(angular);