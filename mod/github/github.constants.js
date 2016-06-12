;(function(angular){
	'use strict';

	angular
		.module('github')
		.constant('GITHUB_HEADERS', {
			'Content-Type': 'applicaton/json',
			'Accept': 'application/vnd.github.v3+json'
		});

})(angular);