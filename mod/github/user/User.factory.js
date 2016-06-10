;(function(angular){
	'use strict';
	angular
		.module('github.user')
		.factory('User', UserFactory);

	UserFactory.$inject = ['$resource'];

	function UserFactory($resource){
		var userResource = $resource('');

		User.prototype = {
			constructor: User,
			save: save
		};
		User.search = searchUsers;
		User.get = getUser;
		return User;

		function User(){

		}

		function save(){

		}

		//--- User service/static functions ---//

		function searchUsers(userName){

		}

		function getUser(){

		}
	}
})(angular);