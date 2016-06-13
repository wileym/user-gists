;(function(angular){
	'use strict';

	angular
		.module('github.user')
		.directive('userList', userList);

	userList.$inject = [];

	function userList(){
		return {
			restrict: 'E',
			templateUrl: 'mod/github/user/list/user-list.tpl.html',
			scope: {
				users: '='
			},
			controller: UserListCtrl,
			controllerAs: 'vm',
			bindToController: true
		};
	}

	function UserListCtrl(){

	}

})(angular);