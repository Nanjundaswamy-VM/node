/**
 * @file
 * root file of project.
 */

'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var db = require('./config/database');
var app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var restaurant = require('./routes/index');
app.use('/restaurant', restaurant);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.statusCode = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  var code = err.statusCode ? err.statusCode : 500;
  if (err) {
    res.status(code).json({
      status: "Failure",
      statusCode: code,
      message: err.message,
      data: [] });

  }
  //next();
});
module.exports = app;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvaW5kZXguanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsInJlcXVpcmUiLCJib2R5UGFyc2VyIiwiZGIiLCJhcHAiLCJ1c2UiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJqc29uIiwicmVzdGF1cmFudCIsInJlcSIsInJlcyIsIm5leHQiLCJlcnIiLCJFcnJvciIsInN0YXR1c0NvZGUiLCJsb2NhbHMiLCJtZXNzYWdlIiwiZXJyb3IiLCJnZXQiLCJjb2RlIiwic3RhdHVzIiwiZGF0YSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOztBQUVBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBdkI7QUFDQSxJQUFNQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxhQUFELENBQTFCO0FBQ0EsSUFBTUUsRUFBRSxHQUFHRixPQUFPLENBQUMsbUJBQUQsQ0FBbEI7QUFDQSxJQUFNRyxHQUFHLEdBQUdKLE9BQU8sRUFBbkI7O0FBRUE7QUFDQTtBQUNBSSxHQUFHLENBQUNDLEdBQUosQ0FBUUgsVUFBVSxDQUFDSSxVQUFYLENBQXNCLEVBQUVDLFFBQVEsRUFBRSxJQUFaLEVBQXRCLENBQVI7QUFDQUgsR0FBRyxDQUFDQyxHQUFKLENBQVFILFVBQVUsQ0FBQ00sSUFBWCxFQUFSOztBQUVBLElBQU1DLFVBQVUsR0FBR1IsT0FBTyxDQUFDLGdCQUFELENBQTFCO0FBQ0FHLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLGFBQVIsRUFBdUJJLFVBQXZCOztBQUVBO0FBQ0FMLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLFVBQVVLLEdBQVYsRUFBZUMsR0FBZixFQUFvQkMsSUFBcEIsRUFBMEI7QUFDaEMsTUFBSUMsR0FBRyxHQUFHLElBQUlDLEtBQUosQ0FBVSxXQUFWLENBQVY7QUFDQUQsRUFBQUEsR0FBRyxDQUFDRSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FILEVBQUFBLElBQUksQ0FBQ0MsR0FBRCxDQUFKO0FBQ0QsQ0FKRDs7QUFNQTtBQUNBVCxHQUFHLENBQUNDLEdBQUosQ0FBUSxVQUFVUSxHQUFWLEVBQWVILEdBQWYsRUFBb0JDLEdBQXBCLEVBQXlCQyxJQUF6QixFQUErQjtBQUNyQztBQUNBRCxFQUFBQSxHQUFHLENBQUNLLE1BQUosQ0FBV0MsT0FBWCxHQUFxQkosR0FBRyxDQUFDSSxPQUF6QjtBQUNBTixFQUFBQSxHQUFHLENBQUNLLE1BQUosQ0FBV0UsS0FBWCxHQUFtQlIsR0FBRyxDQUFDTixHQUFKLENBQVFlLEdBQVIsQ0FBWSxLQUFaLE1BQXVCLGFBQXZCLEdBQXVDTixHQUF2QyxHQUE2QyxFQUFoRTtBQUNBLE1BQUlPLElBQUksR0FBR1AsR0FBRyxDQUFDRSxVQUFKLEdBQWlCRixHQUFHLENBQUNFLFVBQXJCLEdBQWtDLEdBQTdDO0FBQ0EsTUFBSUYsR0FBSixFQUFTO0FBQ1BGLElBQUFBLEdBQUcsQ0FBQ1UsTUFBSixDQUFXRCxJQUFYLEVBQWlCWixJQUFqQixDQUFzQjtBQUNwQmEsTUFBQUEsTUFBTSxFQUFFLFNBRFk7QUFFcEJOLE1BQUFBLFVBQVUsRUFBRUssSUFGUTtBQUdwQkgsTUFBQUEsT0FBTyxFQUFFSixHQUFHLENBQUNJLE9BSE87QUFJcEJLLE1BQUFBLElBQUksRUFBRSxFQUpjLEVBQXRCOztBQU1EO0FBQ0Q7QUFDRCxDQWREO0FBZUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnBCLEdBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIHJvb3QgZmlsZSBvZiBwcm9qZWN0LlxyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3QgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJylcclxuY29uc3QgZGIgPSByZXF1aXJlKCcuL2NvbmZpZy9kYXRhYmFzZScpXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxyXG5cclxuLy8gY29uZmlndXJlIGFwcCB0byB1c2UgYm9keVBhcnNlcigpXHJcbi8vIHRoaXMgd2lsbCBsZXQgdXMgZ2V0IHRoZSBkYXRhIGZyb20gYSBQT1NUXHJcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xyXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcclxuXHJcbmNvbnN0IHJlc3RhdXJhbnQgPSByZXF1aXJlKCcuL3JvdXRlcy9pbmRleCcpXHJcbmFwcC51c2UoJy9yZXN0YXVyYW50JywgcmVzdGF1cmFudCk7XHJcblxyXG4vLyBjYXRjaCA0MDQgYW5kIGZvcndhcmQgdG8gZXJyb3IgaGFuZGxlclxyXG5hcHAudXNlKGZ1bmN0aW9uIChyZXEsIHJlcywgbmV4dCkge1xyXG4gIHZhciBlcnIgPSBuZXcgRXJyb3IoJ05vdCBGb3VuZCcpO1xyXG4gIGVyci5zdGF0dXNDb2RlID0gNDA0O1xyXG4gIG5leHQoZXJyKVxyXG59KTtcclxuXHJcbi8vIGVycm9yIGhhbmRsZXJcclxuYXBwLnVzZShmdW5jdGlvbiAoZXJyLCByZXEsIHJlcywgbmV4dCkge1xyXG4gIC8vIHNldCBsb2NhbHMsIG9ubHkgcHJvdmlkaW5nIGVycm9yIGluIGRldmVsb3BtZW50XHJcbiAgcmVzLmxvY2Fscy5tZXNzYWdlID0gZXJyLm1lc3NhZ2U7XHJcbiAgcmVzLmxvY2Fscy5lcnJvciA9IHJlcS5hcHAuZ2V0KCdlbnYnKSA9PT0gJ2RldmVsb3BtZW50JyA/IGVyciA6IHt9O1xyXG4gIGxldCBjb2RlID0gZXJyLnN0YXR1c0NvZGUgPyBlcnIuc3RhdHVzQ29kZSA6IDUwMDtcclxuICBpZiAoZXJyKSB7XHJcbiAgICByZXMuc3RhdHVzKGNvZGUpLmpzb24oe1xyXG4gICAgICBzdGF0dXM6IFwiRmFpbHVyZVwiLFxyXG4gICAgICBzdGF0dXNDb2RlOiBjb2RlLFxyXG4gICAgICBtZXNzYWdlOiBlcnIubWVzc2FnZSxcclxuICAgICAgZGF0YTogW11cclxuICAgIH0pO1xyXG4gIH1cclxuICAvL25leHQoKTtcclxufSk7XHJcbm1vZHVsZS5leHBvcnRzID0gYXBwOyJdfQ==