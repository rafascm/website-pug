const express = require('express');
const router = require('./routes');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.use(router);

app.listen(3000);
