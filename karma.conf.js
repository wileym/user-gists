// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config){
	config.set({
		// base path, that will be used to resolve files and exclude
		basePath: '',

		// testing framework to use (jasmine/mocha/qunit/...)
		frameworks: ['jasmine'],

		// list of files / patterns to load in the browser
		files: [
			'src/lib/jquery/dist/jquery.min.js',
			'src/lib/angular/angular.js',
			'src/lib/angular-mocks/angular-mocks.js',
			'src/lib/angular-animate/angular-animate.js',
			'src/lib/angular-resource/angular-resource.js',
			'src/lib/angular-route/angular-route.min.js',
			'src/lib/angular-strap/dist/angular-strap.js',
			'src/lib/angular-strap/dist/angular-strap.tpl.min.js',
			'src/lib/codemirror/lib/codemirror.js',
			'src/lib/codemirror/addon/display/autorefresh.js',
			'src/lib/codemirror/mode/javascript/javascript.js',
			'src/lib/codemirror/mode/xml/xml.js',
			'src/lib/codemirror/mode/css/css.js',

			'src/mod/common/common.module.js',
			'src/mod/common/code-editor/code-editor.directive.js',

			'src/mod/github/github.module.js',
			'src/mod/github/github.constants.js',
			'src/mod/github/gist/gist.module.js',
			'src/mod/github/gist/Gist.factory.js',
			'src/mod/github/gist/details/gist-details.directive.js',
			'src/mod/github/gist/editor/gist-editor.directive.js',
			
			'src/mod/github/user/user.module.js',
			'src/mod/github/user/User.factory.js',
			'src/mod/github/user/details/user-details.directive.js',
			'src/mod/github/user/search/user-search.directive.js',
			'src/mod/github/user/list/user-list.directive.js',
			'src/mod/github/user/search-list/user-search-list.directive.js',

			'src/app/**/*.js',
			'test/spec/**/*.js'
		],

		// list of files / patterns to exclude
		exclude: [],

		// web server port
		port: 8080,

		// level of logging
		// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ['Chrome'],

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: false
	});
};
