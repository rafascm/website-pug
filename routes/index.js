const express = require('express');
const router = express.Router();

const home = require('./home');
const about = require('./about');

router.use('/', home);
router.use('/about', about);

module.exports = router;
