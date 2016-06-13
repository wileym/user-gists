;(function(angular){
	'use strict';
	angular
		.module('github.user')
		.factory('User', UserFactory);

	UserFactory.$inject = ['$q', '$resource', 'Gist', 'GITHUB_HEADERS'];

	function UserFactory($q, $resource, Gist, GITHUB_HEADERS){
		var userResource = $resource('https://api.github.com/users/:userId', {}, {
			get: {method: 'GET', headers: GITHUB_HEADERS}
		});
		var userGistsResource = $resource('https://api.github.com/users/:userId/gists', {}, {
			get: {method: 'GET', isArray: true, headers: GITHUB_HEADERS}
		});
		var userSearchResource = $resource('https://api.github.com/search/users', {}, {
			search: {method: 'GET', isArray: true, headers: GITHUB_HEADERS}
		});

		User.prototype = {
			constructor: User,
			toGithubUser: toGithubUser,
			save: save,
			getGists: getGists
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
			this.bio = properties.bio;
			this.profileUrl = properties.profileUrl;
			this.avatar = properties.avatar;
			this.gistsUrl = properties.gistsUrl;
		}

		function toGithubUser(){
			return {
				id: this.id,
				login: this.username,
				name: this.name,
				bio: this.bio,
				html_url: this.profileUrl,
				avatar_url: this.avatar,
				gists_url: this.gistsUrl
			};
		}

		function save(){
			userResource.save({userId: this.id}, this.toGithubUser());
		}

		function getGists(){
			return userGistsResource.get({userId: this.username}).$promise.then(function(result){
				return result.map(Gist.fromGithubGist);
			});
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
				bio: githubUser.bio,
				profileUrl: githubUser.html_url,
				avatar: githubUser.avatar_url,
				gistsUrl: githubUser.gists_url
			});
		}

	}
})(angular);