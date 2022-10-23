'use strict';

require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const connection = require('./connection.js');
const routes = require('./api/index.js');

const PORT = process.env.PORT || 8080;
const app = express();
const server = http.createServer(app);

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');
});

app.use(express.json());
app.use(
	cors({
		credentials: true,
		origin: process.env.CLIENT_URL,
	})
);
app.use(express.urlencoded({extended: false}));
app.use('/api', routes);

const start = async () => {
	try {
		try {
			console.log(`Соединение с сервером установлено!`);
		} catch (err) {
			console.error(`Не удалось установить соединение по причине: ${err}`);
		}

		server.listen(PORT, () =>
			console.log(`Server started on PORT = ${PORT}`)
		);

	} catch (e) {
		console.log(e);
	}
};

start();

