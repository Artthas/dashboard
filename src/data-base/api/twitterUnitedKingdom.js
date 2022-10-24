'use strict';

const {Router} = require('express');
const {HttpCode} = require('../const.js');

module.exports = (app, connection) => {
  const route = new Router();

  app.use('/twitter_United_kingdom', route);

  route.get('/:page', async (req, res) => {
    const {page} = req.params;
    
    connection.query(`SELECT id, title, tweets, date FROM twitter_United_kingdom WHERE id BETWEEN ${page === '1' ? 1 : page > 1 ? `${page - 1}1` : ''} AND ${page}0`, function (err, result, fields) {
      if (err) throw err;
      res.status(HttpCode.OK).json(result);
    });

  });
};
