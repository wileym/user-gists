;(function(angular){
	'use strict';

	angular
		.module('usergists')
		.controller('GistEditRouteCtrl', GistEditRouteCtrl);

	GistEditRouteCtrl.$inject = ['$routeParams', 'Gist'];

	function GistEditRouteCtrl($routeParams, Gist){
		var vm = this;

		vm.createGistFile = createGistFile;
		vm.newFileName = '';
		vm.selectedFile = {};
		vm.files = [];

		Gist.get($routeParams.gistId)
			.then(function(gist){
				var keys;
				vm.gist = gist || {};
				if(vm.gist.files){
					keys = Object.keys(vm.gist.files);
					if(keys.length){
						vm.selectedFile = vm.gist.files[keys[0]];
						console.log('GistEditRouteCtrl - setting selected file', vm.selectedFile);
						angular.forEach(vm.gist.files, function(fileObj){
							vm.files.push(fileObj.filename);
						});
					}
				}
			});

		function createGistFile(){
			if(vm.newFileName !== ''){
				vm.gist.addFile(vm.newFileName).catch(function(err){
					console.error('GistEditRouteCtrl.createGistFile - ' + err);
				});
			}
			else{
				console.warn('GistEditRouteCtrl.createGistFile - Blank file name. No file created.');
			}
		}
	}

})(angular);