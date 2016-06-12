;(function(angular){
	'use strict';
	angular
		.module('github.user')
		.factory('User', UserFactory);

	UserFactory.$inject = ['$q', '$resource', 'GITHUB_HEADERS'];

	function UserFactory($q, $resource, GITHUB_HEADERS){
		var userResource = $resource('https://api.github.com/users/:userId', {}, {
			get: {
				method: 'GET',
				headers: GITHUB_HEADERS
			}
		});
		var userSearchResource = $resource('https://api.github.com/search/users', {}, {
			search: {
				method: 'GET',
				isArray: true,
				headers: GITHUB_HEADERS
			}
		});

		User.prototype = {
			constructor: User,
			toGithubUser: toGithubUser,
			save: save
		};
		User.search = searchUsers;
		User.fromGithubUser = fromGithubUser;
		User.get = getUser;
		return User;

		function User(properties){
			if(this instanceof User === false){
				return new User(properties);
			}
			properties = properties || {};
			this.id = properties.id;
			this.username = properties.username;
			this.name = properties.name;
			this.profileUrl = properties.profileUrl;
			this.gistsUrl = properties.gistsUrl;
		}

		function toGithubUser(){
			return {
				id: this.id,
				login: this.username,
				name: this.name,
				html_url: this.profileUrl,
				gists_url: this.gistsUrl
			};
		}

		function save(){
			userResource.save({userId: this.id}, this.toGithubUser());
		}

		//--- User service/static functions ---//

		function searchUsers(userName){
			if(!userName || userName === ''){
				return $q.when([]);
			}
			return userSearchResource.get({q: userName}).$promise.then(function(result){
				return result.items;
			});
		}

		function getUser(userId){
			return userResource.get({userId: userId}).$promise.then(fromGithubUser);
		}

		function fromGithubUser(githubUser){
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