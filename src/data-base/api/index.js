'use strict';

const {Router} = require('express');
const googleNewsAustralia = require('./googleNewsAustralia.js');
const googleNewsNewZealand = require('./googleNewsNewZealand.js');
const googleNewsUnitedKingdom = require('./googleNewsUnitedKingdom.js');
const googleNewsUSA = require('./googleNewsUSA.js');
const twitterAustralia = require('./twitterAustralia.js');
const twitterNewZealand = require('./twitterNewZealand.js');
const twitterUnitedKingdom = require('./twitterUnitedKingdom.js');
const twitterUSA = require('./twitterUSA.js');
const connection = require('../connection.js');

const app = new Router();

(async () => {
  googleNewsAustralia(app, connection);
  googleNewsNewZealand(app, connection);
  googleNewsUnitedKingdom(app, connection);
  googleNewsUSA(app, connection);
  twitterAustralia(app, connection);
  twitterNewZealand(app, connection);
  twitterUnitedKingdom(app, connection);
  twitterUSA(app, connection);
})();

module.exports = app;
