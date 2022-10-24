'use strict';

const {Router} = require('express');
const {HttpCode} = require('../const.js');

module.exports = (app, connection) => {
  const route = new Router();

  app.use('/google_news_USA', route);

  route.get('/:page', async (req, res) => {
    const {page} = req.params;
    
    connection.query(`SELECT title, id FROM google_news_USA WHERE id BETWEEN ${page === '1' ? 1 : page > 1 ? `${page - 1}1` : ''} AND ${page}0`, function (err, result, fields) {
      if (err) throw err;
      const newResult = result.map((item) => {
        const newItem = item.title.split(' - ');
        return {
          title: newItem[0],
          source: newItem[1],
        }
      });
      res.status(HttpCode.OK).json(newResult);
    });

  });
};
