"use strict"; /**
               * @file
               * Library file to handle the rabbit mq.
               */

var amqp = require('amqplib/callback_api');
var CONN_URL = 'amqp://test:test@mt.nodesense.ai';
var q = 'task/M1048280';

// AMQP PORT 5672

// amqp://user:pass@host.com/vhost
// amqp://localhost

// amqp://mindtree:mindtree@mt.nodesense.ai

var open = require('amqplib').connect(CONN_URL);

/**
                                                 * @name publishOrderPayload
                                                 * @desc to publish the order payload to user.
                                                 * @input order obj
                                                 */

function publishOrderPayload(orderData) {
  open.then(function (conn) {
    return conn.createChannel();
  }).then(function (ch) {
    var orderPayload = orderData.toObject();
    orderPayload.toEmail = "nanjunda777@gmail.com";
    orderPayload.subject = "Your order has been placed";
    ch.sendToQueue(q, Buffer.from(JSON.stringify(orderPayload)));
  })["catch"](console.warn);
}

module.exports.publishOrderPayload = publishOrderPayload;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvbGliL3B1Ymxpc2hlci5qcyJdLCJuYW1lcyI6WyJhbXFwIiwicmVxdWlyZSIsIkNPTk5fVVJMIiwicSIsIm9wZW4iLCJjb25uZWN0IiwicHVibGlzaE9yZGVyUGF5bG9hZCIsIm9yZGVyRGF0YSIsInRoZW4iLCJjb25uIiwiY3JlYXRlQ2hhbm5lbCIsImNoIiwib3JkZXJQYXlsb2FkIiwidG9PYmplY3QiLCJ0b0VtYWlsIiwic3ViamVjdCIsInNlbmRUb1F1ZXVlIiwiQnVmZmVyIiwiZnJvbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwid2FybiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJjQUFBOzs7OztBQUtBLElBQUlBLElBQUksR0FBR0MsT0FBTyxDQUFDLHNCQUFELENBQWxCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLGtDQUFqQjtBQUNBLElBQUlDLENBQUMsR0FBRyxlQUFSOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSUMsSUFBSSxHQUFHSCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CSSxPQUFuQixDQUEyQkgsUUFBM0IsQ0FBWDs7QUFFQTs7Ozs7O0FBTUEsU0FBU0ksbUJBQVQsQ0FBNkJDLFNBQTdCLEVBQXdDO0FBQ3BDSCxFQUFBQSxJQUFJLENBQUNJLElBQUwsQ0FBVSxVQUFVQyxJQUFWLEVBQWdCO0FBQ3RCLFdBQU9BLElBQUksQ0FBQ0MsYUFBTCxFQUFQO0FBQ0gsR0FGRCxFQUVHRixJQUZILENBRVEsVUFBVUcsRUFBVixFQUFjO0FBQ2xCLFFBQUlDLFlBQVksR0FBR0wsU0FBUyxDQUFDTSxRQUFWLEVBQW5CO0FBQ0FELElBQUFBLFlBQVksQ0FBQ0UsT0FBYixHQUF1Qix1QkFBdkI7QUFDQUYsSUFBQUEsWUFBWSxDQUFDRyxPQUFiLEdBQXVCLDRCQUF2QjtBQUNBSixJQUFBQSxFQUFFLENBQUNLLFdBQUgsQ0FBZWIsQ0FBZixFQUFrQmMsTUFBTSxDQUFDQyxJQUFQLENBQVlDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUixZQUFmLENBQVosQ0FBbEI7QUFDSCxHQVBELFdBT1NTLE9BQU8sQ0FBQ0MsSUFQakI7QUFRSDs7QUFFREMsTUFBTSxDQUFDQyxPQUFQLENBQWVsQixtQkFBZixHQUFxQ0EsbUJBQXJDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIExpYnJhcnkgZmlsZSB0byBoYW5kbGUgdGhlIHJhYmJpdCBtcS5cclxuICovXHJcblxyXG52YXIgYW1xcCA9IHJlcXVpcmUoJ2FtcXBsaWIvY2FsbGJhY2tfYXBpJylcclxuY29uc3QgQ09OTl9VUkwgPSAnYW1xcDovL3Rlc3Q6dGVzdEBtdC5ub2Rlc2Vuc2UuYWknXHJcbnZhciBxID0gJ3Rhc2svTTEwNDgyODAnXHJcblxyXG4vLyBBTVFQIFBPUlQgNTY3MlxyXG5cclxuLy8gYW1xcDovL3VzZXI6cGFzc0Bob3N0LmNvbS92aG9zdFxyXG4vLyBhbXFwOi8vbG9jYWxob3N0XHJcblxyXG4vLyBhbXFwOi8vbWluZHRyZWU6bWluZHRyZWVAbXQubm9kZXNlbnNlLmFpXHJcblxyXG52YXIgb3BlbiA9IHJlcXVpcmUoJ2FtcXBsaWInKS5jb25uZWN0KENPTk5fVVJMKVxyXG5cclxuLyoqXHJcbiogQG5hbWUgcHVibGlzaE9yZGVyUGF5bG9hZFxyXG4qIEBkZXNjIHRvIHB1Ymxpc2ggdGhlIG9yZGVyIHBheWxvYWQgdG8gdXNlci5cclxuKiBAaW5wdXQgb3JkZXIgb2JqXHJcbiovXHJcblxyXG5mdW5jdGlvbiBwdWJsaXNoT3JkZXJQYXlsb2FkKG9yZGVyRGF0YSkge1xyXG4gICAgb3Blbi50aGVuKGZ1bmN0aW9uIChjb25uKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbm4uY3JlYXRlQ2hhbm5lbCgpXHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChjaCkge1xyXG4gICAgICAgIGxldCBvcmRlclBheWxvYWQgPSBvcmRlckRhdGEudG9PYmplY3QoKVxyXG4gICAgICAgIG9yZGVyUGF5bG9hZC50b0VtYWlsID0gXCJuYW5qdW5kYTc3N0BnbWFpbC5jb21cIlxyXG4gICAgICAgIG9yZGVyUGF5bG9hZC5zdWJqZWN0ID0gXCJZb3VyIG9yZGVyIGhhcyBiZWVuIHBsYWNlZFwiXHJcbiAgICAgICAgY2guc2VuZFRvUXVldWUocSwgQnVmZmVyLmZyb20oSlNPTi5zdHJpbmdpZnkob3JkZXJQYXlsb2FkKSkpXHJcbiAgICB9KS5jYXRjaChjb25zb2xlLndhcm4pXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLnB1Ymxpc2hPcmRlclBheWxvYWQgPSBwdWJsaXNoT3JkZXJQYXlsb2FkIl19