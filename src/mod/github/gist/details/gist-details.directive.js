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
				gist: '='
			},
			controller: GistDetailsCtrl,
			controllerAs: 'vm',
			bindToController: true
		};

		function GistDetailsCtrl(){
			var vm = this;
			vm.gist = vm.gist || {
				description: 'Invalid gist. No details will be displayed',
				owner: {},
				created_at: '',
				updated_at: ''
			};
		}
	}

})(angular);