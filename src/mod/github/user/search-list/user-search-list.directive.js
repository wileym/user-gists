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
				onUserSelect: '&?' //pass {user: User}
			},
			controller: UserSearchListCtrl,
			controllerAs: 'vm',
			bindToController: true
		};
	}

	function UserSearchListCtrl(){
		var vm = this;
		vm.handleUserSelect = handleUserSelect;

		function handleUserSelect(user){
			if(!angular.isFunction(vm.onUserSelect)){
				console.warn('UserSearchListCtrl.handleUserSelect - not implemented by parent...');
			}
			else{
				vm.onUserSelect({user: user});
			}
		}
	}

})(angular);