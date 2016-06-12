;(function(angular){
	'use strict';
	angular
		.module('github.gist')
		.factory('Gist', GistFactory);

	GistFactory.$inject = ['$q', '$resource'];

	function GistFactory($q, $resource){
		var gistResource = $resource('https://api.github.com/gists/:gistId', {}, {
			get: {
				method: 'GET',
				headers: {Accept: 'application/vnd.github.v3+json'}
			},
			edit: {
				method: 'PATCH',
				headers: {Accept: 'application/vnd.github.v3+json'}
			}
		});

		Gist.prototype = {
			constructor: Gist,
			addFile: addFile,
			save: save
		};
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
			return this.edit().$promise;
		}

		function save(){
			return this.post().$promise;
		}

		//--- Gist service/static functions ---//
		
		function createGist(){
			gistResource.post({
				
			})
		}

		function getGist(gistId){
			gistId = gistId || '4354222';
			return gistResource.get({gistId: gistId}).$promise.then(morphGistData);
		}
		
		function morphGistData(githubGist){
			var gist, githubGist = githubGist || {};
			gist = new Gist({
				id: githubGist.id,
				files: githubGist.files || {},
				owner: githubGist.owner || {},
				description: githubGist.description,
				dateCreated: githubGist.created_at,
				dateModified: githubGist.updated_at
			});
			return gist;
		}

	}
})(angular);