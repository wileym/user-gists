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
				onUserSelect: '&?'
			},
			controller: UserSearchCtrl
		};

		function UserSearchCtrl($scope, $timeout, User){

			$scope.onSearchTextChange = onSearchTextChange;
			$scope.handleUserSelect = handleUserSelect;

			$scope.matchedUsers = [];
			$scope.searchModelOptions = {
				debounce: 200
			};
			$scope.$watch('userName', onSearchTextChange);

			function onSearchTextChange(newVal, oldVal){
				if(typeof($scope.userName) !== 'string'){ //seen obj and string -- angular strap bug?
					return;
				}
				User.search($scope.userName).then(
					function(matchedUsers){
						$scope.matchedUsers = matchedUsers;
					}
				);
			}

			function handleUserSelect(ghUser, index, $typeahead){
				if(ghUser.hasOwnProperty('login') === false){
					return;
				}
				if(angular.isFunction($scope.onUserSelect)){
					$scope.onUserSelect({user: User.fromGithubUser(ghUser)});
				}
				$typeahead.hide();
			}

		}
	}

})(angular);