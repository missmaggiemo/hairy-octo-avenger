'use strict';

module.exports = function(app) {
  // Root routing
  var api = require('../../app/controllers/api.server.controller');
  app.route('/api/yelp').get(api.yelp);
};