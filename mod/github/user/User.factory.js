;(function(angular){
	'use strict';
	angular
		.module('github.user')
		.factory('User', UserFactory);

	UserFactory.$inject = ['$resource'];

	function UserFactory($resource){
		var userResource = $resource('https://api.github.com/users/:userId', {}, {
			get: {
				method: 'GET',
				headers: {Accept: 'application/vnd.github.v3+json'}
			}
		});
		var userSearchResource = $resource('https://api.github.com/search/users', {}, {
			get: {
				method: 'GET',
				headers: {Accept: 'application/vnd.github.v3+json'}
			}
		});

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

		function getUser(userId){
			return userResource.get({userId: userId}).$promise.then(morphGithubUser);
		}

		function morphGithubUser(githubUser){
			githubUser = githubUser || {};
			return new User({
				id: githubUser.id,
				username: githubUser.login,
				name: githubUser.name,
				profileUrl: githubUser.html_url,
				gistsUrl: githubUser.gists_url
			});
		}

	}
})(angular);