//==========  IMPORTS  ========================================
var createError = require('http-errors');
var express = require('express');
var connection  = require('express-myconnection'); 
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
const mysql = require('mysql');
var ac = require('./resources/app_constants')
var app = express();

//=========ROUTE IMPORTS==================================
var indexRouter = require('./routes/index');
var searchRouter = require('./routes/search');

//========SET DB CONNECTION==================
app.use(
  connection(mysql,{
    host: ac.host,
    user: ac.user,
    password: ac.password,
    database: ac.database
  },'request')
);

//========BODY PARSER CONFIGURATION==================================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

//========ROUTE CONFIG==================================
app.use('/', indexRouter);
app.use('/search/:qstring/:page', searchRouter.query);

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
