;(function(angular){
	'use strict';

	angular
		.module('github.gist')
		.directive('gistEditor', gistEditor);

	function gistEditor(){

		return {
			restrict: 'E',
			templateUrl: 'mod/github/gist/editor/gist-editor.tpl.html',
			scope: {
				content: '='
			},
			controller: GistDetailsCtrl,
			controllerAs: 'vm',
			bindToController: true
		};

		function GistDetailsCtrl(){
			var vm = this;
		}
	}

})(angular);