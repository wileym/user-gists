;(function(angular){
	'use strict';
	angular
		.module('github.gist')
		.factory('Gist', GistFactory);

	GistFactory.$inject = ['$resource'];

	function GistFactory($resource){

		Gist.prototype = {
			constructor: Gist,
			save: save
		};
		Gist.get = getGist;
		return Gist;

		function Gist(){

		}

		function save(){

		}

		//--- Gist service/static functions ---//

		function getGist(){

		}
	}
})(angular);