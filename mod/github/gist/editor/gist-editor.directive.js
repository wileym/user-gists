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
				//gist: '='
			},
			controller: GistDetailsCtrl,
			controllerAs: 'vm',
			bindToController: true
		};

		function GistDetailsCtrl(){
			var vm = this;
			vm.content = getTestData();
		}
	}

	function getTestData(){
		return '<!DOCTYPE html>\n<html>\n\t<head>\n\t\t$HEAD$\n\t</head>\n\t<body>\n\t\t$END$\n\t</body>\n</html>';
	}

})(angular);