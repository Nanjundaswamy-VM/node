/**
 * @file
 * service file to handel order related api.
 */

'use strict';var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var Order = require('../models/order');
var restHelper = require('../lib/restHelper');
var queryObj = require('../lib/queryHandler');var _require =
require('express-validator'),check = _require.check,body = _require.body,validationResult = _require.validationResult;var _require2 =
require('../config/index'),paginationLimit = _require2.paginationLimit;
var publishPayload = require('../lib/publisher');

// Create and place new order
exports.placeOrder = function _callee(req, res) {var orderamount, errors, order, data;return _regenerator["default"].async(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
          restHelper.message = "Failed to place order";
          orderamount = 0;
          errors = validationResult(req);if (!(
          errors.array().length == 0 && req.body.items.length !== 0)) {_context.next = 18;break;}_context.prev = 4;

          //caluclating total order amount
          if (req.body.items) {
            Object.values(req.body.items).forEach(function (value) {
              orderamount += parseInt(value.amount);
            });
          }

          // Create a order var
          order = new Order({
            customerid: req.body.customerid,
            restaurant_id: req.body.restaurant_id,
            orderamount: orderamount,
            created_at: new Date(),
            delivery_address: req.body.delivery_address,
            items: req.body.items });_context.next = 9;return _regenerator["default"].awrap(


          queryObj.saveEntry(order));case 9:data = _context.sent;
          if (data) {
            restHelper.status = 'Success';
            restHelper.code = 200;
            restHelper.message = 'Placed order successfully.';
            restHelper.responseData = data;
            publishPayload.publishOrderPayload(data);
          }_context.next = 16;break;case 13:_context.prev = 13;_context.t0 = _context["catch"](4);


          restHelper.message = 'Failed to place order ' + _context.t0.message;case 16:_context.next = 19;break;case 18:


          restHelper.message = "Failed to place the order.Please enter valid input data.";case 19:

          restHelper.sendResponse(res);case 20:case "end":return _context.stop();}}}, null, null, [[4, 13]]);};


// view order details
exports.viewOrder = function _callee2(req, res) {var data;return _regenerator["default"].async(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
          restHelper.message = "Failed to get order details";_context2.prev = 1;_context2.next = 4;return _regenerator["default"].awrap(

          queryObj.getEntryById(Order, req.params.id));case 4:data = _context2.sent;
          if (data) {
            restHelper.status = 'Success';
            restHelper.code = 200;
            restHelper.message = 'Successfully fetched order details.';
            restHelper.responseData = data;
          }_context2.next = 11;break;case 8:_context2.prev = 8;_context2.t0 = _context2["catch"](1);


          if (_context2.t0.kind && _context2.t0.kind === 'ObjectId') {
            restHelper.message = "Order not found with id " + req.params.id;
            restHelper.code = 204;
          } else {
            restHelper.message = "Error retrieving order with id " + req.params.id;
          }case 11:


          restHelper.sendResponse(res);case 12:case "end":return _context2.stop();}}}, null, null, [[1, 8]]);};


// get total amount
exports.totalAmount = function _callee3(req, res) {var data;return _regenerator["default"].async(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
          restHelper.message = "Failed to get order details";_context3.prev = 1;_context3.next = 4;return _regenerator["default"].awrap(

          queryObj.getEntryFieldsById(Order, req.params.id, 'orderamount'));case 4:data = _context3.sent;
          if (data) {
            restHelper.status = 'Success';
            restHelper.code = 200;
            restHelper.message = 'Successfully fetched order details.';
            restHelper.responseData = data;
          }_context3.next = 11;break;case 8:_context3.prev = 8;_context3.t0 = _context3["catch"](1);


          if (_context3.t0.kind && _context3.t0.kind === 'ObjectId') {
            restHelper.message = "Order not found with id " + req.params.id;
            restHelper.code = 204;
          } else {
            restHelper.message = "Error retrieving order with id " + req.params.id;
          }case 11:


          restHelper.sendResponse(res);case 12:case "end":return _context3.stop();}}}, null, null, [[1, 8]]);};


// update order
exports.updateOrder = function _callee4(req, res) {var errors, orderamount, orderDetails, data;return _regenerator["default"].async(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
          restHelper.message = "Failed to update order details";
          errors = validationResult(req);if (!(
          errors.array().length == 0 && req.body.items.length !== 0)) {_context4.next = 19;break;}_context4.prev = 3;


          orderamount = 0;
          //caluclating total order amount
          if (req.body.items) {
            Object.values(req.body.items).forEach(function (value) {
              orderamount += parseInt(value.amount);
            });
          }

          // updated a order var
          orderDetails = {
            customerid: req.body.customerid,
            orderamount: orderamount,
            delivery_address: req.body.delivery_address,
            delivered_status: req.body.delivery_status,
            restaurant_id: req.body.restaurant_id,
            items: req.body.items };_context4.next = 9;return _regenerator["default"].awrap(


          queryObj.updateEntry(Order, req.params.id, orderDetails));case 9:data = _context4.sent;
          if (data) {
            restHelper.status = 'Success';
            restHelper.code = 200;
            restHelper.message = "Successfully updated order deatails";
            restHelper.responseData = [];
          }_context4.next = 17;break;case 13:_context4.prev = 13;_context4.t0 = _context4["catch"](3);

          console.log(_context4.t0);
          if (_context4.t0.kind && _context4.t0.kind === 'ObjectId') {
            restHelper.message = "Order not found with id " + req.params.id;
            restHelper.code = 204;
          } else {
            restHelper.message = "Error retrieving order with id " + req.params.id;
          }case 17:_context4.next = 20;break;case 19:


          restHelper.message = "Failed to place the order.Please enter valid input data.";case 20:

          restHelper.sendResponse(res);case 21:case "end":return _context4.stop();}}}, null, null, [[3, 13]]);};


// cancel order
exports.cancel = function _callee5(req, res) {var orderDetails, data;return _regenerator["default"].async(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
          restHelper.message = "Failed to update order details";_context5.prev = 1;


          // Create a order var
          orderDetails = {
            order_status: 0 };_context5.next = 5;return _regenerator["default"].awrap(


          queryObj.updateEntry(Order, req.params.id, orderDetails));case 5:data = _context5.sent;
          if (data) {
            restHelper.status = 'Success';
            restHelper.code = 200;
            restHelper.message = "Successfully updated order deatails";
            restHelper.responseData = [];
          }_context5.next = 12;break;case 9:_context5.prev = 9;_context5.t0 = _context5["catch"](1);

          if (_context5.t0.kind && _context5.t0.kind === 'ObjectId') {
            restHelper.message = "Order not found with id " + req.params.id;
            restHelper.code = 204;
          } else {
            restHelper.message = "Error retrieving order with id " + req.params.id;
          }case 12:


          restHelper.sendResponse(res);case 13:case "end":return _context5.stop();}}}, null, null, [[1, 9]]);};




// get total amount for given orders 
exports.getOrdersAmount = function _callee6(req, res) {var data;return _regenerator["default"].async(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:
          restHelper.message = "Failed to get amount for orders";_context6.prev = 1;_context6.next = 4;return _regenerator["default"].awrap(

          queryObj.getOrdersAmount(Order, req.body));case 4:data = _context6.sent;
          if (Object.entries(data).length > 0) {
            restHelper.status = 'Success';
            restHelper.code = 200;
            restHelper.message = 'Successfully fetched order details.';
            restHelper.responseData = data;
          } else {
            restHelper.status = 'Success';
            restHelper.code = 204;
            restHelper.message = 'No data.';
            restHelper.responseData = data;
          }_context6.next = 11;break;case 8:_context6.prev = 8;_context6.t0 = _context6["catch"](1);


          if (_context6.t0.kind && _context6.t0.kind === 'ObjectId') {
            restHelper.message = "Order not found with id " + req.params.id;
            restHelper.code = 204;
          } else {
            restHelper.message = "Error retrieving order with id " + req.params.id;
          }case 11:


          restHelper.sendResponse(res);case 12:case "end":return _context6.stop();}}}, null, null, [[1, 8]]);};


// get orders list for given restaurants and data 
exports.getOrderList = function _callee7(req, res) {var data;return _regenerator["default"].async(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:
          restHelper.message = "Failed to get order details";_context7.prev = 1;_context7.next = 4;return _regenerator["default"].awrap(

          queryObj.getOrderList(Order, req.body, paginationLimit));case 4:data = _context7.sent;
          if (Object.entries(data).length > 0) {
            restHelper.status = 'Success';
            restHelper.code = 200;
            restHelper.message = 'Successfully fetched order list.';
            restHelper.responseData = data;
          } else {
            restHelper.status = 'Success';
            restHelper.code = 204;
            restHelper.message = 'No data.';
            restHelper.responseData = data;
          }_context7.next = 11;break;case 8:_context7.prev = 8;_context7.t0 = _context7["catch"](1);


          if (_context7.t0.kind && _context7.t0.kind === 'ObjectId') {
            restHelper.message = "Order not found with id " + req.params.id;
            restHelper.code = 204;
          } else {
            restHelper.message = "Error retrieving order with id " + req.params.id;
          }case 11:

          restHelper.sendResponse(res);case 12:case "end":return _context7.stop();}}}, null, null, [[1, 8]]);};



/**
                                                                                                                 * Returns the validation errors for input.
                                                                                                                 *
                                                                                                                 * @param {json} request-body.
                                                                                                                 * @return {json} returns the validation errors if exist.
                                                                                                                 */
exports.validate = function (val) {
  switch (val) {
    case 'placeOrder':{
        return [
        check('customerid').not().isEmpty().trim().escape().isInt().withMessage('please enter the valid customerid'),
        check('restaurant_id').exists().trim().escape().isLength({ min: 3, max: 150 }).withMessage('please enter valid restaurant_id')];

      };
    case 'updateOrder':{
        return [
        check('customerid').not().isEmpty().trim().escape().isInt().withMessage('please enter the valid customerid'),
        check('restaurant_id').exists().trim().escape().isLength({ min: 3, max: 150 }).withMessage('please enter valid restaurant_id')];

      }}

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvc2VydmljZXMvb3JkZXJTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIk9yZGVyIiwicmVxdWlyZSIsInJlc3RIZWxwZXIiLCJxdWVyeU9iaiIsImNoZWNrIiwiYm9keSIsInZhbGlkYXRpb25SZXN1bHQiLCJwYWdpbmF0aW9uTGltaXQiLCJwdWJsaXNoUGF5bG9hZCIsImV4cG9ydHMiLCJwbGFjZU9yZGVyIiwicmVxIiwicmVzIiwibWVzc2FnZSIsIm9yZGVyYW1vdW50IiwiZXJyb3JzIiwiYXJyYXkiLCJsZW5ndGgiLCJpdGVtcyIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJ2YWx1ZSIsInBhcnNlSW50IiwiYW1vdW50Iiwib3JkZXIiLCJjdXN0b21lcmlkIiwicmVzdGF1cmFudF9pZCIsImNyZWF0ZWRfYXQiLCJEYXRlIiwiZGVsaXZlcnlfYWRkcmVzcyIsInNhdmVFbnRyeSIsImRhdGEiLCJzdGF0dXMiLCJjb2RlIiwicmVzcG9uc2VEYXRhIiwicHVibGlzaE9yZGVyUGF5bG9hZCIsInNlbmRSZXNwb25zZSIsInZpZXdPcmRlciIsImdldEVudHJ5QnlJZCIsInBhcmFtcyIsImlkIiwia2luZCIsInRvdGFsQW1vdW50IiwiZ2V0RW50cnlGaWVsZHNCeUlkIiwidXBkYXRlT3JkZXIiLCJvcmRlckRldGFpbHMiLCJkZWxpdmVyZWRfc3RhdHVzIiwiZGVsaXZlcnlfc3RhdHVzIiwidXBkYXRlRW50cnkiLCJjb25zb2xlIiwibG9nIiwiY2FuY2VsIiwib3JkZXJfc3RhdHVzIiwiZ2V0T3JkZXJzQW1vdW50IiwiZW50cmllcyIsImdldE9yZGVyTGlzdCIsInZhbGlkYXRlIiwidmFsIiwibm90IiwiaXNFbXB0eSIsInRyaW0iLCJlc2NhcGUiLCJpc0ludCIsIndpdGhNZXNzYWdlIiwiZXhpc3RzIiwiaXNMZW5ndGgiLCJtaW4iLCJtYXgiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBLGE7O0FBRUEsSUFBTUEsS0FBSyxHQUFH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QStFSixXQUEvRSxDQUEyRixrQ0FBM0YsQ0FGRyxDQUFQOztBQUlILE9BWkw7O0FBY0gsQ0FmRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBzZXJ2aWNlIGZpbGUgdG8gaGFuZGVsIG9yZGVyIHJlbGF0ZWQgYXBpLlxyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IE9yZGVyID0gcmVxdWlyZSgnLi4vbW9kZWxzL29yZGVyJylcclxuY29uc3QgcmVzdEhlbHBlciA9IHJlcXVpcmUoJy4uL2xpYi9yZXN0SGVscGVyJylcclxuY29uc3QgcXVlcnlPYmogPSByZXF1aXJlKCcuLi9saWIvcXVlcnlIYW5kbGVyJyk7XHJcbmNvbnN0IHsgY2hlY2ssIGJvZHksIHZhbGlkYXRpb25SZXN1bHQgfSA9IHJlcXVpcmUoJ2V4cHJlc3MtdmFsaWRhdG9yJyk7XHJcbmNvbnN0IHsgcGFnaW5hdGlvbkxpbWl0IH0gPSByZXF1aXJlKCcuLi9jb25maWcvaW5kZXgnKVxyXG5jb25zdCBwdWJsaXNoUGF5bG9hZCA9IHJlcXVpcmUoJy4uL2xpYi9wdWJsaXNoZXInKVxyXG5cclxuLy8gQ3JlYXRlIGFuZCBwbGFjZSBuZXcgb3JkZXJcclxuZXhwb3J0cy5wbGFjZU9yZGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSBcIkZhaWxlZCB0byBwbGFjZSBvcmRlclwiXHJcbiAgICBsZXQgb3JkZXJhbW91bnQgPSAwXHJcbiAgICBjb25zdCBlcnJvcnMgPSB2YWxpZGF0aW9uUmVzdWx0KHJlcSk7XHJcbiAgICBpZiAoZXJyb3JzLmFycmF5KCkubGVuZ3RoID09IDAgJiYgcmVxLmJvZHkuaXRlbXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy9jYWx1Y2xhdGluZyB0b3RhbCBvcmRlciBhbW91bnRcclxuICAgICAgICAgICAgaWYgKHJlcS5ib2R5Lml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKHJlcS5ib2R5Lml0ZW1zKS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcmFtb3VudCArPSBwYXJzZUludCh2YWx1ZS5hbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIG9yZGVyIHZhclxyXG4gICAgICAgICAgICBjb25zdCBvcmRlciA9IG5ldyBPcmRlcih7XHJcbiAgICAgICAgICAgICAgICBjdXN0b21lcmlkOiByZXEuYm9keS5jdXN0b21lcmlkLFxyXG4gICAgICAgICAgICAgICAgcmVzdGF1cmFudF9pZDogcmVxLmJvZHkucmVzdGF1cmFudF9pZCxcclxuICAgICAgICAgICAgICAgIG9yZGVyYW1vdW50OiBvcmRlcmFtb3VudCxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICBkZWxpdmVyeV9hZGRyZXNzOiByZXEuYm9keS5kZWxpdmVyeV9hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IHJlcS5ib2R5Lml0ZW1zXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCBxdWVyeU9iai5zYXZlRW50cnkob3JkZXIpXHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICByZXN0SGVscGVyLnN0YXR1cyA9ICdTdWNjZXNzJztcclxuICAgICAgICAgICAgICAgIHJlc3RIZWxwZXIuY29kZSA9IDIwMDtcclxuICAgICAgICAgICAgICAgIHJlc3RIZWxwZXIubWVzc2FnZSA9ICdQbGFjZWQgb3JkZXIgc3VjY2Vzc2Z1bGx5Lic7XHJcbiAgICAgICAgICAgICAgICByZXN0SGVscGVyLnJlc3BvbnNlRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICBwdWJsaXNoUGF5bG9hZC5wdWJsaXNoT3JkZXJQYXlsb2FkKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSAnRmFpbGVkIHRvIHBsYWNlIG9yZGVyICcgKyBlcnIubWVzc2FnZTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3RIZWxwZXIubWVzc2FnZSA9IFwiRmFpbGVkIHRvIHBsYWNlIHRoZSBvcmRlci5QbGVhc2UgZW50ZXIgdmFsaWQgaW5wdXQgZGF0YS5cIjtcclxuICAgIH1cclxuICAgIHJlc3RIZWxwZXIuc2VuZFJlc3BvbnNlKHJlcyk7XHJcbn07XHJcblxyXG4vLyB2aWV3IG9yZGVyIGRldGFpbHNcclxuZXhwb3J0cy52aWV3T3JkZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHJlc3RIZWxwZXIubWVzc2FnZSA9IFwiRmFpbGVkIHRvIGdldCBvcmRlciBkZXRhaWxzXCJcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCBxdWVyeU9iai5nZXRFbnRyeUJ5SWQoT3JkZXIsIHJlcS5wYXJhbXMuaWQpXHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5zdGF0dXMgPSAnU3VjY2Vzcyc7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuY29kZSA9IDIwMDtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5tZXNzYWdlID0gJ1N1Y2Nlc3NmdWxseSBmZXRjaGVkIG9yZGVyIGRldGFpbHMuJztcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5yZXNwb25zZURhdGEgPSBkYXRhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBpZiAoZXJyLmtpbmQgJiYgZXJyLmtpbmQgPT09ICdPYmplY3RJZCcpIHtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5tZXNzYWdlID0gXCJPcmRlciBub3QgZm91bmQgd2l0aCBpZCBcIiArIHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuY29kZSA9IDIwNDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSBcIkVycm9yIHJldHJpZXZpbmcgb3JkZXIgd2l0aCBpZCBcIiArIHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc3RIZWxwZXIuc2VuZFJlc3BvbnNlKHJlcyk7XHJcbn07XHJcblxyXG4vLyBnZXQgdG90YWwgYW1vdW50XHJcbmV4cG9ydHMudG90YWxBbW91bnQgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHJlc3RIZWxwZXIubWVzc2FnZSA9IFwiRmFpbGVkIHRvIGdldCBvcmRlciBkZXRhaWxzXCJcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCBxdWVyeU9iai5nZXRFbnRyeUZpZWxkc0J5SWQoT3JkZXIsIHJlcS5wYXJhbXMuaWQsICdvcmRlcmFtb3VudCcpXHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5zdGF0dXMgPSAnU3VjY2Vzcyc7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuY29kZSA9IDIwMDtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5tZXNzYWdlID0gJ1N1Y2Nlc3NmdWxseSBmZXRjaGVkIG9yZGVyIGRldGFpbHMuJztcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5yZXNwb25zZURhdGEgPSBkYXRhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBpZiAoZXJyLmtpbmQgJiYgZXJyLmtpbmQgPT09ICdPYmplY3RJZCcpIHtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5tZXNzYWdlID0gXCJPcmRlciBub3QgZm91bmQgd2l0aCBpZCBcIiArIHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuY29kZSA9IDIwNDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSBcIkVycm9yIHJldHJpZXZpbmcgb3JkZXIgd2l0aCBpZCBcIiArIHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc3RIZWxwZXIuc2VuZFJlc3BvbnNlKHJlcyk7XHJcbn07XHJcblxyXG4vLyB1cGRhdGUgb3JkZXJcclxuZXhwb3J0cy51cGRhdGVPcmRlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgcmVzdEhlbHBlci5tZXNzYWdlID0gXCJGYWlsZWQgdG8gdXBkYXRlIG9yZGVyIGRldGFpbHNcIlxyXG4gICAgY29uc3QgZXJyb3JzID0gdmFsaWRhdGlvblJlc3VsdChyZXEpO1xyXG4gICAgaWYgKGVycm9ycy5hcnJheSgpLmxlbmd0aCA9PSAwICYmIHJlcS5ib2R5Lml0ZW1zLmxlbmd0aCAhPT0gMCkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgb3JkZXJhbW91bnQgPSAwXHJcbiAgICAgICAgICAgIC8vY2FsdWNsYXRpbmcgdG90YWwgb3JkZXIgYW1vdW50XHJcbiAgICAgICAgICAgIGlmIChyZXEuYm9keS5pdGVtcykge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhyZXEuYm9keS5pdGVtcykuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJhbW91bnQgKz0gcGFyc2VJbnQodmFsdWUuYW1vdW50KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB1cGRhdGVkIGEgb3JkZXIgdmFyXHJcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyRGV0YWlscyA9IHtcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyaWQ6IHJlcS5ib2R5LmN1c3RvbWVyaWQsXHJcbiAgICAgICAgICAgICAgICBvcmRlcmFtb3VudDogb3JkZXJhbW91bnQsXHJcbiAgICAgICAgICAgICAgICBkZWxpdmVyeV9hZGRyZXNzOiByZXEuYm9keS5kZWxpdmVyeV9hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgZGVsaXZlcmVkX3N0YXR1czogcmVxLmJvZHkuZGVsaXZlcnlfc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgcmVzdGF1cmFudF9pZDogcmVxLmJvZHkucmVzdGF1cmFudF9pZCxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiByZXEuYm9keS5pdGVtc1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCBxdWVyeU9iai51cGRhdGVFbnRyeShPcmRlciwgcmVxLnBhcmFtcy5pZCwgb3JkZXJEZXRhaWxzKVxyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdEhlbHBlci5zdGF0dXMgPSAnU3VjY2Vzcyc7XHJcbiAgICAgICAgICAgICAgICByZXN0SGVscGVyLmNvZGUgPSAyMDA7XHJcbiAgICAgICAgICAgICAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSBcIlN1Y2Nlc3NmdWxseSB1cGRhdGVkIG9yZGVyIGRlYXRhaWxzXCI7XHJcbiAgICAgICAgICAgICAgICByZXN0SGVscGVyLnJlc3BvbnNlRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIGlmIChlcnIua2luZCAmJiBlcnIua2luZCA9PT0gJ09iamVjdElkJykge1xyXG4gICAgICAgICAgICAgICAgcmVzdEhlbHBlci5tZXNzYWdlID0gXCJPcmRlciBub3QgZm91bmQgd2l0aCBpZCBcIiArIHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgICAgICAgICByZXN0SGVscGVyLmNvZGUgPSAyMDQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSBcIkVycm9yIHJldHJpZXZpbmcgb3JkZXIgd2l0aCBpZCBcIiArIHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3RIZWxwZXIubWVzc2FnZSA9IFwiRmFpbGVkIHRvIHBsYWNlIHRoZSBvcmRlci5QbGVhc2UgZW50ZXIgdmFsaWQgaW5wdXQgZGF0YS5cIjtcclxuICAgIH1cclxuICAgIHJlc3RIZWxwZXIuc2VuZFJlc3BvbnNlKHJlcyk7XHJcbn07XHJcblxyXG4vLyBjYW5jZWwgb3JkZXJcclxuZXhwb3J0cy5jYW5jZWwgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHJlc3RIZWxwZXIubWVzc2FnZSA9IFwiRmFpbGVkIHRvIHVwZGF0ZSBvcmRlciBkZXRhaWxzXCJcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIENyZWF0ZSBhIG9yZGVyIHZhclxyXG4gICAgICAgIGNvbnN0IG9yZGVyRGV0YWlscyA9IHtcclxuICAgICAgICAgICAgb3JkZXJfc3RhdHVzOiAwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCBxdWVyeU9iai51cGRhdGVFbnRyeShPcmRlciwgcmVxLnBhcmFtcy5pZCwgb3JkZXJEZXRhaWxzKVxyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuc3RhdHVzID0gJ1N1Y2Nlc3MnO1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLmNvZGUgPSAyMDA7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIubWVzc2FnZSA9IFwiU3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgb3JkZXIgZGVhdGFpbHNcIjtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5yZXNwb25zZURhdGEgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBpZiAoZXJyLmtpbmQgJiYgZXJyLmtpbmQgPT09ICdPYmplY3RJZCcpIHtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5tZXNzYWdlID0gXCJPcmRlciBub3QgZm91bmQgd2l0aCBpZCBcIiArIHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuY29kZSA9IDIwNDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSBcIkVycm9yIHJldHJpZXZpbmcgb3JkZXIgd2l0aCBpZCBcIiArIHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc3RIZWxwZXIuc2VuZFJlc3BvbnNlKHJlcyk7XHJcblxyXG59O1xyXG5cclxuXHJcbi8vIGdldCB0b3RhbCBhbW91bnQgZm9yIGdpdmVuIG9yZGVycyBcclxuZXhwb3J0cy5nZXRPcmRlcnNBbW91bnQgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHJlc3RIZWxwZXIubWVzc2FnZSA9IFwiRmFpbGVkIHRvIGdldCBhbW91bnQgZm9yIG9yZGVyc1wiXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgcXVlcnlPYmouZ2V0T3JkZXJzQW1vdW50KE9yZGVyLCByZXEuYm9keSlcclxuICAgICAgICBpZiAoT2JqZWN0LmVudHJpZXMoZGF0YSkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLnN0YXR1cyA9ICdTdWNjZXNzJztcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5jb2RlID0gMjAwO1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSAnU3VjY2Vzc2Z1bGx5IGZldGNoZWQgb3JkZXIgZGV0YWlscy4nO1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLnJlc3BvbnNlRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5zdGF0dXMgPSAnU3VjY2Vzcyc7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuY29kZSA9IDIwNDtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5tZXNzYWdlID0gJ05vIGRhdGEuJztcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5yZXNwb25zZURhdGEgPSBkYXRhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBpZiAoZXJyLmtpbmQgJiYgZXJyLmtpbmQgPT09ICdPYmplY3RJZCcpIHtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5tZXNzYWdlID0gXCJPcmRlciBub3QgZm91bmQgd2l0aCBpZCBcIiArIHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuY29kZSA9IDIwNDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSBcIkVycm9yIHJldHJpZXZpbmcgb3JkZXIgd2l0aCBpZCBcIiArIHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc3RIZWxwZXIuc2VuZFJlc3BvbnNlKHJlcyk7XHJcbn07XHJcblxyXG4vLyBnZXQgb3JkZXJzIGxpc3QgZm9yIGdpdmVuIHJlc3RhdXJhbnRzIGFuZCBkYXRhIFxyXG5leHBvcnRzLmdldE9yZGVyTGlzdCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgcmVzdEhlbHBlci5tZXNzYWdlID0gXCJGYWlsZWQgdG8gZ2V0IG9yZGVyIGRldGFpbHNcIlxyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHF1ZXJ5T2JqLmdldE9yZGVyTGlzdChPcmRlciwgcmVxLmJvZHksIHBhZ2luYXRpb25MaW1pdClcclxuICAgICAgICBpZiAoT2JqZWN0LmVudHJpZXMoZGF0YSkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLnN0YXR1cyA9ICdTdWNjZXNzJztcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5jb2RlID0gMjAwO1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSAnU3VjY2Vzc2Z1bGx5IGZldGNoZWQgb3JkZXIgbGlzdC4nO1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLnJlc3BvbnNlRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5zdGF0dXMgPSAnU3VjY2Vzcyc7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuY29kZSA9IDIwNDtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5tZXNzYWdlID0gJ05vIGRhdGEuJztcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5yZXNwb25zZURhdGEgPSBkYXRhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBpZiAoZXJyLmtpbmQgJiYgZXJyLmtpbmQgPT09ICdPYmplY3RJZCcpIHtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5tZXNzYWdlID0gXCJPcmRlciBub3QgZm91bmQgd2l0aCBpZCBcIiArIHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuY29kZSA9IDIwNDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSBcIkVycm9yIHJldHJpZXZpbmcgb3JkZXIgd2l0aCBpZCBcIiArIHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzdEhlbHBlci5zZW5kUmVzcG9uc2UocmVzKTtcclxufTtcclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgdmFsaWRhdGlvbiBlcnJvcnMgZm9yIGlucHV0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge2pzb259IHJlcXVlc3QtYm9keS5cclxuICogQHJldHVybiB7anNvbn0gcmV0dXJucyB0aGUgdmFsaWRhdGlvbiBlcnJvcnMgaWYgZXhpc3QuXHJcbiAqL1xyXG5leHBvcnRzLnZhbGlkYXRlID0gKHZhbCkgPT4ge1xyXG4gICAgc3dpdGNoICh2YWwpIHtcclxuICAgICAgICBjYXNlICdwbGFjZU9yZGVyJzoge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgY2hlY2soJ2N1c3RvbWVyaWQnKS5ub3QoKS5pc0VtcHR5KCkudHJpbSgpLmVzY2FwZSgpLmlzSW50KCkud2l0aE1lc3NhZ2UoJ3BsZWFzZSBlbnRlciB0aGUgdmFsaWQgY3VzdG9tZXJpZCcpLFxyXG4gICAgICAgICAgICAgICAgY2hlY2soJ3Jlc3RhdXJhbnRfaWQnKS5leGlzdHMoKS50cmltKCkuZXNjYXBlKCkuaXNMZW5ndGgoeyBtaW46IDMsIG1heDogMTUwIH0pLndpdGhNZXNzYWdlKCdwbGVhc2UgZW50ZXIgdmFsaWQgcmVzdGF1cmFudF9pZCcpLFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjYXNlICd1cGRhdGVPcmRlcic6IHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIGNoZWNrKCdjdXN0b21lcmlkJykubm90KCkuaXNFbXB0eSgpLnRyaW0oKS5lc2NhcGUoKS5pc0ludCgpLndpdGhNZXNzYWdlKCdwbGVhc2UgZW50ZXIgdGhlIHZhbGlkIGN1c3RvbWVyaWQnKSxcclxuICAgICAgICAgICAgICAgIGNoZWNrKCdyZXN0YXVyYW50X2lkJykuZXhpc3RzKCkudHJpbSgpLmVzY2FwZSgpLmlzTGVuZ3RoKHsgbWluOiAzLCBtYXg6IDE1MCB9KS53aXRoTWVzc2FnZSgncGxlYXNlIGVudGVyIHZhbGlkIHJlc3RhdXJhbnRfaWQnKSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==