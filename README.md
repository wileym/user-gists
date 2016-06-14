# user-gists

[![license](http://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/wileym/user-gists/master/LICENSE)

Search and view GitHub users' Gists

<img src="https://cloud.wiley-family.net/user-gists-demo.gif" style="width: 650px; height: 400px;">

## Installation
    git clone https://github.com/wileym/user-gists.git
    cd user-gists
    npm install
    bower install

## Run
    grunt serve
http://localhost:9000

## Creative Liberties
* Search box - added typeahead look-ups that provide user options as you
type <br/>
* User selection: The specification called for:
```
Use the Gist API to store the data from the text field and textarea, you can store the gist ID locally, when the user is selected, it must show the Gist data if it already exist for that user
``` 
I found this a little confusing though. "Storing" data was not clear.
I didn't see a use to putting information in the cookie or local store.
Also, the GitHub API doesn't let you create/edit Gists unless you
authenticate.<br/><br/>
It also wasn't clear to me what was supposed to go in the text field vs
the text area. I figured one was supposed to input the Gist ID into the
text field and the text area would display Gist data if it existed for
the provided Gist ID. It begged the question though, how is someone
supposed to know the Gist ID? And, what's the point of searching for a
GitHub user if the app user already knows a Gist ID?<br/><br/>
It was the weekend, so I figured I'd just proceed with what made sense
to me instead of waiting until Monday. Hopefully I didn't totally
misinterpret the purpose of the app.<br/><br/>
What I came up with is an app that lets you search for GitHub users and,
upon selecting a user, shows you the list of Gists that the selected
user has made public. Upon clicking a listed Gist, the user gets details
on the Gist including all files contained therein and a code-highlighted
area that displays file content. Originally, I wanted to allow
persistence of content edits, but it required GitHub authentication
which was explicitly stated as not necessary in the specification.
* Gist data - no data is stored in the cookie or local store, the routes
handle loading of the user and gist data so it will still appear as it
should on browser refresh.

## Known Issues
* Sometimes you have to click out of the search text box and back in
 again to get the suggestion menu to show up. The probable solution
 would be to manually handle trigger events on the angular strap
 typeahead instance.

## Authors

Developed by Mark Wiley

## License

Copyright &copy; 2016 Mark Wiley.

All code is licensed under MIT. See LICENSE file for details.