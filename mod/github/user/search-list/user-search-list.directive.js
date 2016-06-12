;(function(angular){
	'use strict';

	angular
		.module('github.user')
		.directive('userSearchList', userSearchList);
	userSearchList.$inject = [];
	function userSearchList(){
		return {
			restrict: 'E',
			templateUrl: 'mod/github/user/search-list/user-search-list.tpl.html',
			scope: {

			},
			controller: UserSearchListCtrl,
			controllerAs: 'vm',
			bindToController: true
		};
	}

	function UserSearchListCtrl(){
		var vm = this;
		vm.selectedUser = '';
		vm.onUserSelect = onUserSelect;
		
		function onUserSelect(user){
			console.log('Selected User: ' + user);
		}
	}

})(angular);