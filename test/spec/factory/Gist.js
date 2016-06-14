'use strict';
describe('Factory: Gist', function(){
	var Gist;

	beforeEach(module('usergists'));
	beforeEach(function(){
		angular.mock.inject(function($injector){
			Gist = $injector.get('Gist');
		});
	});

	it('provides the Gist constructor', itIsGistConstructor);
	it('converts github gist info to Gist', itConvertsToGist);
	xit('converts Gist to github gist info', itConvertsFromGist); //not implemented

	function itIsGistConstructor(){
		var gist;
		expect(Gist).toBeDefined();
		expect(Gist).toEqual(jasmine.any(Function));
		gist = new Gist({id: '1234', owner: {}});
		expect(gist.save).toEqual(jasmine.any(Function));
	}

	function itConvertsToGist(){
		var githubGistInfo, gist;

		githubGistInfo = {
			id: 'cf2f0f85584c61dd64531522e27',
			files: {},
			owner: {login: 'wileym'},
			description: 'Test Gists',
			comments: 1,
			created_at: '2016-06-12T08:37:33Z',
			updated_at: '2016-06-12T08:37:34Z'
		};
		gist = Gist.fromGithubGist(githubGistInfo);
		expect(gist.id).toEqual(githubGistInfo.id);
		expect(gist.files).toEqual(githubGistInfo.files);
		expect(gist.owner).toEqual(githubGistInfo.owner);
		expect(gist.description).toEqual(githubGistInfo.description);
		expect(gist.comments).toEqual(githubGistInfo.comments);
		expect(gist.dateCreated).toEqual(githubGistInfo.created_at);
		expect(gist.dateModified).toEqual(githubGistInfo.updated_at);
	}

	function itConvertsFromGist(){
		var githubGistInfo, gist;

		gist = new Gist({
			id: 'cf2f0f85584c61dd64531522e27',
			files: {},
			owner: {login: 'wileym'},
			description: 'Test Gists',
			comments: 1,
			dateCreated: '2016-06-12T08:37:33Z',
			dateModified: '2016-06-12T08:37:34Z'
		});
		githubGistInfo = gist.toGithubGist();
		expect(githubGistInfo.id).toEqual(gist.id);
		expect(githubGistInfo.files).toEqual(gist.files);
		expect(githubGistInfo.owner).toEqual(gist.owner);
		expect(githubGistInfo.description).toEqual(gist.description);
		expect(githubGistInfo.comments).toEqual(gist.comments);
		expect(githubGistInfo.created_at).toEqual(gist.dateCreated);
		expect(githubGistInfo.updated_at).toEqual(gist.dateModified);
	}

});