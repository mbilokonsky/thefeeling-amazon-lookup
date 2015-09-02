# thefeeling-amazon-lookup
A module that allows you to lookup books, movies, etc on amazon and returns a simply formatted bunch of information.

Use is as follows:
```
var lookup = require('thefeeling-amazon-lookup');
lookup.lookupBook('Harry Potter', function(err, result) {
  console.log('Look, I have harry potter books!', result);
});

lookup.lookupMovie('Star Wars', function(err, result) {
  console.log('These historical dramas about ancient interstellar conflict have great production value.', result);
});
```
