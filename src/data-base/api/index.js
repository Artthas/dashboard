'use strict';

const {Router} = require('express');
const au = require('./googleNewsAustralia.js');
const connection = require('../connection.js');

const app = new Router();

(async () => {
  au(app, connection);
})();

module.exports = app;
