/**
 * @file
 * root file of project.
 */

'use strict';

const express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/database')
const app = express()

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const restaurant = require('./routes/index')
app.use('/restaurant', restaurant);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.statusCode = 404;
  next(err)
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  let code = err.statusCode ? err.statusCode : 500;
  if (err) {
    res.status(code).json({
      status: "Failure",
      statusCode: code,
      message: err.message,
      data: []
    });
  }
  //next();
});
module.exports = app;