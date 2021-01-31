const express = require('express');
const about = express.Router();

about.get('/', (_req, res) => {
  res.render('about.pug', {
    title: 'About Page'
  });
});

module.exports = about;
