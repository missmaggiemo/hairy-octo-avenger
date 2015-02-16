'use strict';

/**
 * Module dependencies.
 */

exports.yelp = function(req, res) {

  var yelp_client = require('yelp').createClient({
    consumer_key: 'XovUhSivnrWy_mmbxZREMg',   
    consumer_secret: 'oq5kpbXIiAlaNHiCkCCuDbRJLJA',
    token: 'SJclhGloQqDSF2LbvEnVQNspJ7vAQUU3',
    token_secret: 'VuKJZA2Y3N16k3vkVjfoLmv0QX0'
  });

  yelp_client.search({term: req.query.term, location: req.query.location, limit:10}, function(error, data) {
    res.send(JSON.stringify(data));
  });

};

