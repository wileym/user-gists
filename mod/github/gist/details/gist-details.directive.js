;(function(angular){
	'use strict';

	angular
		.module('github.gist')
		.directive('gistDetails', gistDetails);

	function gistDetails(){

		return {
			restrict: 'E',
			templateUrl: 'mod/github/gist/details/gist-details.tpl.html',
			scope: {
				//gist: '='
			},
			controller: GistDetailsCtrl,
			controllerAs: 'vm',
			bindToController: true
		};

		function GistDetailsCtrl(){
			var vm = this;
			vm.gist = getTestData();
		}
	}

	function getTestData(){
		return {
			"url": "https://api.github.com/gists/4354222",
			"forks_url": "https://api.github.com/gists/4354222/forks",
			"commits_url": "https://api.github.com/gists/4354222/commits",
			"id": "4354222",
			"git_pull_url": "https://gist.github.com/4354222.git",
			"git_push_url": "https://gist.github.com/4354222.git",
			"html_url": "https://gist.github.com/4354222",
			"files": {
				"gistfile1.html": {
					"filename": "gistfile1.html",
					"type": "text/html",
					"language": "HTML",
					"raw_url": "https://gist.githubusercontent.com/wileym/4354222/raw/d09ce8ea9e69d275585835454fd7229ac6e81ae6/gistfile1.html",
					"size": 82,
					"truncated": false,
					"content": "<!DOCTYPE html>\n<html>\n  <head>\n\t\t$HEAD$\n\t</head>\n\t<body>\n\t\t$END$\n\t</body>\n</html>"
				}
			},
			"public": true,
			"created_at": "2012-12-21T17:22:01Z",
			"updated_at": "2015-12-10T00:49:23Z",
			"description": "HTML5 LiveTemplate Webstorm",
			"comments": 0,
			"user": null,
			"comments_url": "https://api.github.com/gists/4354222/comments",
			"owner": {
				"login": "wileym",
				"id": 2279418,
				"avatar_url": "https://avatars.githubusercontent.com/u/2279418?v=3",
				"gravatar_id": "",
				"url": "https://api.github.com/users/wileym",
				"html_url": "https://github.com/wileym",
				"followers_url": "https://api.github.com/users/wileym/followers",
				"following_url": "https://api.github.com/users/wileym/following{/other_user}",
				"gists_url": "https://api.github.com/users/wileym/gists{/gist_id}",
				"starred_url": "https://api.github.com/users/wileym/starred{/owner}{/repo}",
				"subscriptions_url": "https://api.github.com/users/wileym/subscriptions",
				"organizations_url": "https://api.github.com/users/wileym/orgs",
				"repos_url": "https://api.github.com/users/wileym/repos",
				"events_url": "https://api.github.com/users/wileym/events{/privacy}",
				"received_events_url": "https://api.github.com/users/wileym/received_events",
				"type": "User",
				"site_admin": false
			},
			"forks": [

			],
			"history": [
				{
					"user": {
						"login": "wileym",
						"id": 2279418,
						"avatar_url": "https://avatars.githubusercontent.com/u/2279418?v=3",
						"gravatar_id": "",
						"url": "https://api.github.com/users/wileym",
						"html_url": "https://github.com/wileym",
						"followers_url": "https://api.github.com/users/wileym/followers",
						"following_url": "https://api.github.com/users/wileym/following{/other_user}",
						"gists_url": "https://api.github.com/users/wileym/gists{/gist_id}",
						"starred_url": "https://api.github.com/users/wileym/starred{/owner}{/repo}",
						"subscriptions_url": "https://api.github.com/users/wileym/subscriptions",
						"organizations_url": "https://api.github.com/users/wileym/orgs",
						"repos_url": "https://api.github.com/users/wileym/repos",
						"events_url": "https://api.github.com/users/wileym/events{/privacy}",
						"received_events_url": "https://api.github.com/users/wileym/received_events",
						"type": "User",
						"site_admin": false
					},
					"version": "fb40358a21ea733a4396f17a6c8fe5b46b7b5c2b",
					"committed_at": "2012-12-21T17:22:58Z",
					"change_status": {

					},
					"url": "https://api.github.com/gists/4354222/fb40358a21ea733a4396f17a6c8fe5b46b7b5c2b"
				},
				{
					"user": {
						"login": "wileym",
						"id": 2279418,
						"avatar_url": "https://avatars.githubusercontent.com/u/2279418?v=3",
						"gravatar_id": "",
						"url": "https://api.github.com/users/wileym",
						"html_url": "https://github.com/wileym",
						"followers_url": "https://api.github.com/users/wileym/followers",
						"following_url": "https://api.github.com/users/wileym/following{/other_user}",
						"gists_url": "https://api.github.com/users/wileym/gists{/gist_id}",
						"starred_url": "https://api.github.com/users/wileym/starred{/owner}{/repo}",
						"subscriptions_url": "https://api.github.com/users/wileym/subscriptions",
						"organizations_url": "https://api.github.com/users/wileym/orgs",
						"repos_url": "https://api.github.com/users/wileym/repos",
						"events_url": "https://api.github.com/users/wileym/events{/privacy}",
						"received_events_url": "https://api.github.com/users/wileym/received_events",
						"type": "User",
						"site_admin": false
					},
					"version": "3ee4f719fa64f8751b606380efbaf6b96bacefc7",
					"committed_at": "2012-12-21T17:22:01Z",
					"change_status": {
						"total": 9,
						"additions": 9,
						"deletions": 0
					},
					"url": "https://api.github.com/gists/4354222/3ee4f719fa64f8751b606380efbaf6b96bacefc7"
				}
			],
			"truncated": false
		};
	}

})(angular);