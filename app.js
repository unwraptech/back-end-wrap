const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/// cross origin hndling 
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

/// routes files 
const mobiles = require('./routes/mobile');
const tablets = require('./routes/tablets');
const files = require('./routes/files');
const watches = require('./routes/watches');
const upload = require('./routes/upload');

app.use('/upload', upload);
app.use('/mobiles', mobiles);
app.use('/tablets', tablets);
app.use('/files', files);
app.use('/watches', watches)
app.listen(process.env.PORT | 4000)



module.exports = app;