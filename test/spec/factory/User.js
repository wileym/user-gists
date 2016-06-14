'use strict';
describe('Factory: User', function(){
	var User;

	beforeEach(module('usergists'));
	beforeEach(function(){
		angular.mock.inject(function($injector){
			User = $injector.get('User');
		});
	});

	it('provides the User constructor', itIsUserConstructor);
	it('converts github user info to User', itConvertsToUser);
	it('converts User to github user info', itConvertsFromUser);
	xit('gets and parses user data from github', itGetsUserData);

	function itIsUserConstructor(){
		var user;
		expect(User).toBeDefined();
		expect(User).toEqual(jasmine.any(Function));
		user = new User({id: '1234', name: 'Mark'});
		expect(user.save).toEqual(jasmine.any(Function));
	}

	function itConvertsToUser(){
		var githubUserInfo, user;
		
		githubUserInfo = {
			login: "wileym",
			id: 2279418,
			avatar_url: "https://avatars.githubusercontent.com/u/2279418?v=3",
			html_url: "https://github.com/wileym",
			gists_url: "https://api.github.com/users/wileym/gists{/gist_id}",
			name: "Mark Wiley",
			bio: null
		};
		user = User.fromGithubUser(githubUserInfo);
		expect(user.id).toEqual(githubUserInfo.id);
		expect(user.username).toEqual(githubUserInfo.login);
		expect(user.name).toEqual(githubUserInfo.name);
		expect(user.bio).toEqual(githubUserInfo.bio);
		expect(user.profileUrl).toEqual(githubUserInfo.html_url);
		expect(user.avatar).toEqual(githubUserInfo.avatar_url);
		expect(user.gistsUrl).toEqual(githubUserInfo.gists_url);
	}

	function itConvertsFromUser(){
		var githubUserInfo, user;

		user = new User({
			username: 'wileym',
			id: 2279418,
			avatar: 'https://avatars.githubusercontent.com/u/2279418?v=3',
			profileUrl: 'https://github.com/wileym',
			gistsUrl: 'https://api.github.com/users/wileym/gists{/gist_id}',
			name: 'Mark Wiley',
			bio: null
		});
		githubUserInfo = user.toGithubUser();
		expect(githubUserInfo.id).toEqual(user.id);
		expect(githubUserInfo.login).toEqual(user.username);
		expect(githubUserInfo.name).toEqual(user.name);
		expect(githubUserInfo.bio).toEqual(user.bio);
		expect(githubUserInfo.html_url).toEqual(user.profileUrl);
		expect(githubUserInfo.avatar_url).toEqual(user.avatar);
		expect(githubUserInfo.gists_url).toEqual(user.gistsUrl);
	}

	function itGetsUserData(done){
		User.get({userId: 'wileym'})
			.then(handleGetSuccess)
			.catch(handleGetError)
			.finally(done);

		function handleGetSuccess(user){
			console.log('Got githubUser: ', user);
			expect(user).toBeDefined();
			expect(user.name).toEqual('Mark Wiley');
		}
		function handleGetError(e){
			expect(e).toBeUndefined();
		}
	}
});