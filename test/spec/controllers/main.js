'use strict';
describe('Controller: MainCtrl', function(){
	var mainCtrl;

	beforeEach(module('usergists'));
	beforeEach(inject(function($controller, $rootScope){
		mainCtrl = $controller('MainCtrl', {$scope: $rootScope.$new()});
	}));

	it('should attach a list of awesomeThings to the scope', function(){
		expect(mainCtrl.getActiveNav).toEqual(jasmine.any(Function));
		expect(mainCtrl.handleUserSelect).toEqual(jasmine.any(Function));
	});
});
