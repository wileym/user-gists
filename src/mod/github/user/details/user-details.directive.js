;(function(angular){
	'use strict';

	angular
		.module('github.user')
		.directive('userDetails', userDetails);

	function userDetails(){

		return {
			restrict: 'E',
			templateUrl: 'mod/github/user/details/user-details.tpl.html',
			scope: {
				user: '='
			},
			controller: UserDetailsCtrl,
			controllerAs: 'vm',
			bindToController: true
		};

		function UserDetailsCtrl(){
			var vm = this;
			vm.user = vm.user || {
				username: '?'
			};
		}
	}

})(angular);