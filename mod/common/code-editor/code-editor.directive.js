;(function(angular){
	'use strict';
	angular
		.module('common')
		.directive('codeEditor', codeEditorFactory);

	codeEditorFactory.$inject = ['$timeout'];

	function codeEditorFactory($timeout){

		var defaultSettings = {
			lineNumbers: true,
			mode: 'javascript',
			fixedGutter: false,
			autoRefresh: true,
			theme: 'icecoder',
			indentUnit: 4,
			indentWithTabs: true
		};

		return {
			restrict: 'E',
			template: '<div></div>',
			replace: true,
			transclude: true,
			require: '?ngModel',
			scope: {
				settings: '='
			},
			link: postLink
		};

		function postLink(scope, elem, attrs, ngModelCtrl, transclude){
			var editor = CodeMirror(elem[0], angular.merge(defaultSettings, scope.settings));
			if(ngModelCtrl){
				$timeout(init);
			}
			transclude(injectClone);
			scope.$on('$destroy', destroy);

			function init(){
				ngModelCtrl.$render = setEditorText;
				if(ngModelCtrl.$viewValue && ngModelCtrl.$viewValue !== ''){
					setEditorText();
				}
				editor.on('change', function(){
					ngModelCtrl.$setViewValue(editor.getValue());
				});
			}

			function injectClone(clone){
				var txt = clone.text();
				setEditorText(txt);
				if(ngModelCtrl){
					$timeout(function(){
						if(txt && !ngModelCtrl.$viewValue){
							ngModelCtrl.$setViewValue(txt);
						}
					});
				}
			}

			function setEditorText(textToSet){
				//need to schedule the setting of text in codemirror
				$timeout(function(){
					textToSet = textToSet || ngModelCtrl.$viewValue || '';
					editor.setValue(textToSet);
					editor.refresh();
				});
			}

			function destroy(){
				editor.off('change');
				//call toTextArea() to stop autoRefresh
				if(angular.isFunction(editor.toTextArea)){
					editor.toTextArea();
				}
			}
		}

	}
})(angular);