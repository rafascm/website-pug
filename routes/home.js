const express = require('express');
const home = express.Router();

home.get('/', (_req, res) => {
  res.render('index.pug', {
    title: 'Home Page'
  });
});

module.exports = home;
