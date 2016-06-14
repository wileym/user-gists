;(function(angular){
	'use strict';
	angular
		.module('github.gist')
		.factory('Gist', GistFactory);

	GistFactory.$inject = ['$q', '$resource', 'GITHUB_HEADERS'];

	function GistFactory($q, $resource, GITHUB_HEADERS){
		var gistResource = $resource('https://api.github.com/gists/:gistId', {}, {
			get: {method: 'GET', headers: GITHUB_HEADERS},
			edit: {method: 'PATCH', headers: GITHUB_HEADERS}
		});

		Gist.prototype = {
			constructor: Gist,
			addFile: addFile,
			save: save
		};
		Gist.fromGithubGist = fromGithubGist;
		Gist.get = getGist;
		Gist.create = createGist;
		return Gist;

		function Gist(properties){
			this.id = properties.id;
			this.files = properties.files;
			this.owner = properties.owner;
			this.description = properties.description;
			this.comments = properties.comments;
			this.dateCreated = properties.dateCreated;
			this.dateModified = properties.dateModified;
		}

		//Authentication required for editing (https://developer.github.com/v3/gists/#authentication)
		//feature skipped for now
		function addFile(fileName){
			if(!fileName){
				console.log('Gist.addFile - invalid file name (' + fileName + '). File will not be added.');
				return $q.reject('Invalid file name');
			}
			if(this.files[fileName]){
				return $q.reject('File already exists');
			}
			this.files[fileName] = {
				filename: fileName,
				content: ''
			};
			return gistResource.edit({gistId: this.id}, {
				files: this.files,
				public: true,
				description: this.description
			});
		}

		function save(){
			return this.post().$promise;
		}

		//--- Gist service/static functions ---//

		function fromGithubGist(githubGist){
			githubGist = githubGist || {};
			return new Gist({
				id: githubGist.id,
				files: githubGist.files || {},
				owner: githubGist.owner || {},
				description: githubGist.description,
				comments: githubGist.comments,
				dateCreated: githubGist.created_at,
				dateModified: githubGist.updated_at
			});
		}

		function getGist(gistId){
			if(!gistId || !angular.isString(gistId)){
				console.warn('Gist.get - Invalid gistId: ' + gistId);
				return $q.reject('Invalid gist ID.');
			}
			return gistResource.get({gistId: gistId}).$promise.then(fromGithubGist);
		}

		function createGist(){

		}

	}
})(angular);