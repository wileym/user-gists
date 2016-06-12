;(function(angular){
	'use strict';

	angular
		.module('github.user')
		.directive('userSearch', userSearch);

	function userSearch(){

		//since this directive uses angular strap's Typeahead, we have to use old $scope binding
		UserSearchCtrl.$inject = ['$scope', '$timeout', 'User'];

		return {
			restrict: 'E',
			templateUrl: 'mod/github/user/search/user-search.tpl.html',
			scope: {
				selectedUser: '=',
				onUserSelect: '&?'
			},
			controller: UserSearchCtrl
		};

		function UserSearchCtrl($scope, $timeout, User){

			$scope.onSearchTextChange = onSearchTextChange;
			$scope.handleUserSelect = handleUserSelect;

			//$scope.selectedUser
			$scope.matchedUsers = [];
			$scope.searchModelOptions = {
				debounce: 200
			};
			$scope.$watch('selectedUser', onSearchTextChange);

			function onSearchTextChange(newVal, oldVal){
				User.search($scope.selectedUser).then(
					function(matchedUsers){
						$scope.matchedUsers = matchedUsers.map(function(user){ return user.login; });
					}
				);
			}

			function handleUserSelect(user, index, $typeahead){
				$scope.selectedUser = user;
				if(angular.isFunction($scope.onUserSelect)){
					$scope.onUserSelect({user: $scope.selectedUser});
				}
				$typeahead.hide();
			}

		}
	}

})(angular);