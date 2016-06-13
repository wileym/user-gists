;(function(angular){
	'use strict';

	angular
		.module('github.user')
		.directive('userListItem', userListItem);
	
	userListItem.$inject = [];
	
	function userListItem(){
		return {
			restrict: 'E',
			templateUrl: 'mod/github/user/list/user-list-item.tpl.html',
			scope: {
				user: '='
			},
			controller: UserListItemCtrl,
			controllerAs: 'vm',
			bindToController: true
		};
	}

	function UserListItemCtrl(){

	}

})(angular);