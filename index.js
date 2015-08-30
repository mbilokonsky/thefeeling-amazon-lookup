var AWSAccessKeyId = process.env.AWS_ACCESS_KEY;
var AWSSecretKey = process.env.AWS_SECRET_KEY;

var util = require('util');
var OperationHelper = require('apac').OperationHelper;

var opHelper = new OperationHelper({
  awsId: AWSAccessKeyId,
  awsSecret: AWSSecretKey,
  assocId: 'thatscool-20'
});

function lookup(index, keywords, callback) {
  opHelper.execute('ItemSearch', {
    'SearchIndex': index,
    'Keywords': keywords,
    'ResponseGroup': 'ItemAttributes,Images'
  },
  function(err, result) {
    if (err) { return callback(err); }
    var summary = summarize[index](result.ItemSearchResponse.Items[0].Item);
    callback(null, summary);
  });
}

var summarize = {
  "Books": function summarizeBooks(items) {
    return items.map(function(item) {
      return {
        author: item.ItemAttributes[0].Author,
        title: item.ItemAttributes[0].Title,
        released: item.ItemAttributes[0].ReleaseDate,
        image: {
          thumbnail: item.SmallImage[0].URL[0],
          full: item.MediumImage[0].URL[0]
        },
        url: item.DetailPageURL[0]
      };
    });
  },

  "Movies": function summarizeMovies(items) {
    return items.map(function(item) {
      return {
        director: item.ItemAttributes[0].Director,
        title: item.ItemAttributes[0].Title,
        starring: item.ItemAttributes[0].Actor,
        released: item.ItemAttributes[0].ReleaseDate,
        image: {
          thumbnail: item.SmallImage[0].URL[0],
          full: item.MediumImage[0].URL[0]
        },
        url: item.DetailPageURL[0]
      }
    });
  }
}



module.exports = {
  lookupBook: function(keywords, callback) {
    lookup('Books', keywords, callback);
  },
  lookupMovie: function(keywords, callback) {
    lookup('Movies', keywords, callback);
  }
}
