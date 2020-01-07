 if (typeof __JSWRAPPER === 'undefined' || (!__JSWRAPPER.initialized())) {
     if ((typeof ServiceWorkerContainer !== 'undefined' && self instanceof ServiceWorkerContainer) || (typeof ServiceWorkerGlobalScope !== 'undefined' && self instanceof ServiceWorkerGlobalScope)) {
         importScripts('https://mcas-proxyweb.us.cas.ms/js-bootstrap.js?saasId=15600&origin=' + encodeURIComponent(self.origin ? self.origin : location.origin));
     } else {
         eval(function () {
             var x = typeof __cas__xhr !== "undefined" ? new __cas__xhr() : new XMLHttpRequest();
             x.open = typeof __cas__xhro !== "undefined" ? __cas__xhro : x.open;
             x.send = typeof __cas__xhrs !== "undefined" ? __cas__xhrs : x.send;
             x.open('GET', 'https://mcas-proxyweb.us.cas.ms/js-bootstrap.js?saasId=15600&origin=' + encodeURIComponent(self.origin ? self.origin : location.origin), false);
             x.withCredentials = true;
             x.send();
             return x.responseText;
         }());
     }
}'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config/config');

var product = require('./routes/product');//Defining the express app
const app = express();//Adding helmet to enhance the API security
app.use(helmet());//Using the bodyParser to parse JSON bodies into JS Objects
app.use(bodyParser.json());//Enabling CORS for all requests
app.use(cors());//Server response headers
app.all('*', function (req, res, next) {
/**
   * Response settings
   * @type {Object}
   */
//console.log(req.headers);

var responseSettings = {
"AccessControlAllowOrigin": '*',
"AccessControlAllowHeaders": "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name",
"AccessControlAllowMethods": "POST, GET, PUT, DELETE, OPTIONS",
"AccessControlAllowCredentials": false
};/**
   * Headers
   */
res.header("Access-Control-Allow-Credentials", responseSettings.AccessControlAllowCredentials);
res.header("Access-Control-Allow-Origin", responseSettings.AccessControlAllowOrigin);
res.header("Access-Control-Allow-Headers", req.headers['access-control-request-headers'] ? req.headers['access-control-request-headers'] : responseSettings.AccessControlAllowHeaders);
res.header("mAccess-Control-Allow-Methods", req.headers['access-control-request-method'] ? req.headers['access-control-request-method'] : responseSettings.AccessControlAllowMethods);
if ('OPTIONS' === req.method) {
__WRAPPED_call(res, 'send')(200);
} else {
next();
}
});//Routes
app.use('/product', product);

const port = process.env.PORT || config.config.PORT;
app.set('port', port);//listening to the port
app.listen(port);
console.log("Listening on port " + port);// catch 404 and forward to error handler
app.use(function (req, res, next) {
var err = __WRAPPED_new(Error, 'Not Found');
err.statusCode = 404;
next(err);
});// error handler
app.use(function (err, req, res, next) {
// set locals, only providing error in development
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};
let code = err.statusCode ? err.statusCode : 500;
res.status(code).json({
status: "Failure",
statusCode: code,
message: err.message,
data: []
});//next();
});
module.exports = app;