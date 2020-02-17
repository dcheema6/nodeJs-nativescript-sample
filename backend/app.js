//==========  IMPORTS  ========================================
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
const mysql = require('mysql');
var app = express();

//=========ROUTE IMPORTS==================================
var indexRouter = require('./routes/index');
var searchRouter = require('./routes/search');

//========CONNECT TO DB==================
const db = mysql.createConnection ({
  host: 'localhost',
  user: 'testuser@localhost',
  password: 'secret',
  database: 'gamesdb'
});

db.connect((err) => {
  if (err) {
      throw err;
  }
  console.log('Connected to database');
});
global.db = db;

//========BODY PARSER CONFIGURATION==================================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

//========ROUTE CONFIG==================================
app.use('/', indexRouter);
app.use('/search', searchRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
