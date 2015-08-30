# thefeeling-amazon-lookup
A module that allows you to lookup books, movies, etc on amazon and returns a simply formatted bunch of information.

1. Run `npm install`
2. Run `npm link`
3. In the project where you'd like to use this, run `npm link thefeeling-amazon-lookup`. 

Use is as follows:
```
var lookup = require('thefeeling-amazon-lookup');
lookup.lookupBook('Harry Potter', function(err, result) {
  console.log('Look, I have harry potter books!', result);
});
```
