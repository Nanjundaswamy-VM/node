/**
 * @file
 * service file to handel order related api.
 */

'use strict';var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var Order = require('../models/order');
var restHelper = require('../lib/restHelper');
var queryObj = require('../lib/queryHandler');var _require =
require('express-validator'),check = _require.check,validationResult = _require.validationResult;var _require2 =
require('../config/index'),paginationLimit = _require2.paginationLimit;

// Create and place new order
exports.placeOrder = function _callee(req, res) {var orderamount, order, data;return _regenerator["default"].async(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
          restHelper.message = "Failed to place order";
          orderamount = 0;_context.prev = 2;

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
            items: req.body.items });_context.next = 7;return _regenerator["default"].awrap(


          queryObj.saveEntry(order));case 7:data = _context.sent;
          if (data) {
            restHelper.status = 'Success';
            restHelper.code = 200;
            restHelper.message = 'Placed order successfully.';
            restHelper.responseData = data;
          }_context.next = 14;break;case 11:_context.prev = 11;_context.t0 = _context["catch"](2);


          restHelper.message = 'Failed to place order ' + _context.t0.message;case 14:


          restHelper.sendResponse(res);case 15:case "end":return _context.stop();}}}, null, null, [[2, 11]]);};


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
exports.updateOrder = function _callee4(req, res) {var orderamount, orderDetails, data;return _regenerator["default"].async(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
          restHelper.message = "Failed to update order details";_context4.prev = 1;

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
            items: req.body.items };_context4.next = 7;return _regenerator["default"].awrap(


          queryObj.updateEntry(Order, req.params.id, orderDetails));case 7:data = _context4.sent;
          if (data) {
            restHelper.status = 'Success';
            restHelper.code = 200;
            restHelper.message = "Successfully updated order deatails";
            restHelper.responseData = [];
          }_context4.next = 15;break;case 11:_context4.prev = 11;_context4.t0 = _context4["catch"](1);

          console.log(_context4.t0);
          if (_context4.t0.kind && _context4.t0.kind === 'ObjectId') {
            restHelper.message = "Order not found with id " + req.params.id;
            restHelper.code = 204;
          } else {
            restHelper.message = "Error retrieving order with id " + req.params.id;
          }case 15:


          restHelper.sendResponse(res);case 16:case "end":return _context4.stop();}}}, null, null, [[1, 11]]);};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvc2VydmljZXMvb3JkZXJTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIk9yZGVyIiwicmVxdWlyZSIsInJlc3RIZWxwZXIiLCJxdWVyeU9iaiIsImNoZWNrIiwidmFsaWRhdGlvblJlc3VsdCIsInBhZ2luYXRpb25MaW1pdCIsImV4cG9ydHMiLCJwbGFjZU9yZGVyIiwicmVxIiwicmVzIiwibWVzc2FnZSIsIm9yZGVyYW1vdW50IiwiYm9keSIsIml0ZW1zIiwiT2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsInZhbHVlIiwicGFyc2VJbnQiLCJhbW91bnQiLCJvcmRlciIsImN1c3RvbWVyaWQiLCJyZXN0YXVyYW50X2lkIiwiY3JlYXRlZF9hdCIsIkRhdGUiLCJkZWxpdmVyeV9hZGRyZXNzIiwic2F2ZUVudHJ5IiwiZGF0YSIsInN0YXR1cyIsImNvZGUiLCJyZXNwb25zZURhdGEiLCJzZW5kUmVzcG9uc2UiLCJ2aWV3T3JkZXIiLCJnZXRFbnRyeUJ5SWQiLCJwYXJhbXMiLCJpZCIsImtpbmQiLCJ0b3RhbEFtb3VudCIsImdldEVudHJ5RmllbGRzQnlJZCIsInVwZGF0ZU9yZGVyIiwib3JkZXJEZXRhaWxzIiwiZGVsaXZlcmVkX3N0YXR1cyIsImRlbGl2ZXJ5X3N0YXR1cyIsInVwZGF0ZUVudHJ5IiwiY29uc29sZSIsImxvZyIsImNhbmNlbCIsIm9yZGVyX3N0YXR1cyIsImdldE9yZGVyc0Ftb3VudCIsImVudHJpZXMiLCJsZW5ndGgiLCJnZXRPcmRlckxpc3QiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBLGE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxPQUFPLENBQUMsaUJBQUQsQ0FBckI7QUFDQSxJQUFNQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxtQkFBRCxDQUExQjtBQUNBLElBQU1FLFFBQVEsR0FBR0YsT0FBTyxDQUFDLHFCQUFELENBQXhCLEM7QUFDb0NBLE9BQU8sQ0FBQyxtQkFBRCxDLENBQW5DRyxLLFlBQUFBLEssQ0FBT0MsZ0IsWUFBQUEsZ0I7QUFDV0osT0FBTyxDQUFDLGlCQUFELEMsQ0FBMUJLLGUsYUFBQUEsZTs7QUFFUDtBQUNBQyxPQUFPLENBQUNDLFVBQVIsR0FBcUIsaUJBQU9DLEdBQVAsRUFBWUMsR0FBWjtBQUNqQlIsVUFBQUEsVUFBVSxDQUFDUyxPQUFYLEdBQXFCLHVCQUFyQjtBQUNJQyxVQUFBQSxXQUZhLEdBRUMsQ0FGRDs7QUFJYjtBQUNBLGNBQUlILEdBQUcsQ0FBQ0ksSUFBSixDQUFTQyxLQUFiLEVBQW9CO0FBQ2hCQyxZQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY1AsR0FBRyxDQUFDSSxJQUFKLENBQVNDLEtBQXZCLEVBQThCRyxPQUE5QixDQUFzQyxVQUFBQyxLQUFLLEVBQUk7QUFDM0NOLGNBQUFBLFdBQVcsSUFBSU8sUUFBUSxDQUFDRCxLQUFLLENBQUNFLE1BQVAsQ0FBdkI7QUFDSCxhQUZEO0FBR0g7O0FBRUQ7QUFDTUMsVUFBQUEsS0FaTyxHQVlDLElBQUlyQixLQUFKLENBQVU7QUFDcEJzQixZQUFBQSxVQUFVLEVBQUViLEdBQUcsQ0FBQ0ksSUFBSixDQUFTUyxVQUREO0FBRXBCQyxZQUFBQSxhQUFhLEVBQUVkLEdBQUcsQ0FBQ0ksSUFBSixDQUFTVSxhQUZKO0FBR3BCWCxZQUFBQSxXQUFXLEVBQUVBLFdBSE87QUFJcEJZLFlBQUFBLFVBQVUsRUFBRSxJQUFJQyxJQUFKLEVBSlE7QUFLcEJDLFlBQUFBLGdCQUFnQixFQUFFakIsR0FBRyxDQUFDSSxJQUFKLENBQVNhLGdCQUxQO0FBTXBCWixZQUFBQSxLQUFLLEVBQUVMLEdBQUcsQ0FBQ0ksSUFBSixDQUFTQyxLQU5JLEVBQVYsQ0FaRDs7O0FBcUJJWCxVQUFBQSxRQUFRLENBQUN3QixTQUFULENBQW1CTixLQUFuQixDQXJCSixTQXFCVE8sSUFyQlM7QUFzQmIsY0FBSUEsSUFBSixFQUFVO0FBQ04xQixZQUFBQSxVQUFVLENBQUMyQixNQUFYLEdBQW9CLFNBQXBCO0FBQ0EzQixZQUFBQSxVQUFVLENBQUM0QixJQUFYLEdBQWtCLEdBQWxCO0FBQ0E1QixZQUFBQSxVQUFVLENBQUNTLE9BQVgsR0FBcUIsNEJBQXJCO0FBQ0FULFlBQUFBLFVBQVUsQ0FBQzZCLFlBQVgsR0FBMEJILElBQTFCO0FBQ0gsV0EzQlk7OztBQThCYjFCLFVBQUFBLFVBQVUsQ0FBQ1MsT0FBWCxHQUFxQiwyQkFBMkIsWUFBSUEsT0FBcEQsQ0E5QmE7OztBQWlDakJULFVBQUFBLFVBQVUsQ0FBQzhCLFlBQVgsQ0FBd0J0QixHQUF4QixFQWpDaUIsdUVBQXJCOzs7QUFvQ0E7QUFDQUgsT0FBTyxDQUFDMEIsU0FBUixHQUFvQixrQkFBT3hCLEdBQVAsRUFBWUMsR0FBWjtBQUNoQlIsVUFBQUEsVUFBVSxDQUFDUyxPQUFYLEdBQXFCLDZCQUFyQixDQURnQjs7QUFHS1IsVUFBQUEsUUFBUSxDQUFDK0IsWUFBVCxDQUFzQmxDLEtBQXRCLEVBQTZCUyxHQUFHLENBQUMwQixNQUFKLENBQVdDLEVBQXhDLENBSEwsU0FHUlIsSUFIUTtBQUlaLGNBQUlBLElBQUosRUFBVTtBQUNOMUIsWUFBQUEsVUFBVSxDQUFDMkIsTUFBWCxHQUFvQixTQUFwQjtBQUNBM0IsWUFBQUEsVUFBVSxDQUFDNEIsSUFBWCxHQUFrQixHQUFsQjtBQUNBNUIsWUFBQUEsVUFBVSxDQUFDUyxPQUFYLEdBQXFCLHFDQUFyQjtBQUNBVCxZQUFBQSxVQUFVLENBQUM2QixZQUFYLEdBQTBCSCxJQUExQjtBQUNILFdBVFc7OztBQVlaLGNBQUksYUFBSVMsSUFBSixJQUFZLGFBQUlBLElBQUosS0FBYSxVQUE3QixFQUF5QztBQUNyQ25DLFlBQUFBLFVBQVUsQ0FBQ1MsT0FBWCxHQUFxQiw2QkFBNkJGLEdBQUcsQ0FBQzBCLE1BQUosQ0FBV0MsRUFBN0Q7QUFDQWxDLFlBQUFBLFVBQVUsQ0FBQzRCLElBQVgsR0FBa0IsR0FBbEI7QUFDSCxXQUhELE1BR087QUFDSDVCLFlBQUFBLFVBQVUsQ0FBQ1MsT0FBWCxHQUFxQixvQ0FBb0NGLEdBQUcsQ0FBQzBCLE1BQUosQ0FBV0MsRUFBcEU7QUFDSCxXQWpCVzs7O0FBb0JoQmxDLFVBQUFBLFVBQVUsQ0FBQzhCLFlBQVgsQ0FBd0J0QixHQUF4QixFQXBCZ0IsdUVBQXBCOzs7QUF1QkE7QUFDQUgsT0FBTyxDQUFDK0IsV0FBUixHQUFzQixrQkFBTzdCLEdBQVAsRUFBWUMsR0FBWjtBQUNsQlIsVUFBQUEsVUFBVSxDQUFDUyxPQUFYLEdBQXFCLDZCQUFyQixDQURrQjs7QUFHR1IsVUFBQUEsUUFBUSxDQUFDb0Msa0JBQVQsQ0FBNEJ2QyxLQUE1QixFQUFtQ1MsR0FBRyxDQUFDMEIsTUFBSixDQUFXQyxFQUE5QyxFQUFrRCxhQUFsRCxDQUhILFNBR1ZSLElBSFU7QUFJZCxjQUFJQSxJQUFKLEVBQVU7QUFDTjFCLFlBQUFBLFVBQVUsQ0FBQzJCLE1BQVgsR0FBb0IsU0FBcEI7QUFDQTNCLFlBQUFBLFVBQVUsQ0FBQzRCLElBQVgsR0FBa0IsR0FBbEI7QUFDQTVCLFlBQUFBLFVBQVUsQ0FBQ1MsT0FBWCxHQUFxQixxQ0FBckI7QUFDQVQsWUFBQUEsVUFBVSxDQUFDNkIsWUFBWCxHQUEwQkgsSUFBMUI7QUFDSCxXQVRhOzs7QUFZZCxjQUFJLGFBQUlTLElBQUosSUFBWSxhQUFJQSxJQUFKLEtBQWEsVUFBN0IsRUFBeUM7QUFDckNuQyxZQUFBQSxVQUFVLENBQUNTLE9BQVgsR0FBcUIsNkJBQTZCRixHQUFHLENBQUMwQixNQUFKLENBQVdDLEVBQTdEO0FBQ0FsQyxZQUFBQSxVQUFVLENBQUM0QixJQUFYLEdBQWtCLEdBQWxCO0FBQ0gsV0FIRCxNQUdPO0FBQ0g1QixZQUFBQSxVQUFVLENBQUNTLE9BQVgsR0FBcUIsb0NBQW9DRixHQUFHLENBQUMwQixNQUFKLENBQVdDLEVBQXBFO0FBQ0gsV0FqQmE7OztBQW9CbEJsQyxVQUFBQSxVQUFVLENBQUM4QixZQUFYLENBQXdCdEIsR0FBeEIsRUFwQmtCLHVFQUF0Qjs7O0FBdUJBO0FBQ0FILE9BQU8sQ0FBQ2lDLFdBQVIsR0FBc0Isa0JBQU8vQixHQUFQLEVBQVlDLEdBQVo7QUFDbEJSLFVBQUFBLFVBQVUsQ0FBQ1MsT0FBWCxHQUFxQixnQ0FBckIsQ0FEa0I7O0FBR1ZDLFVBQUFBLFdBSFUsR0FHSSxDQUhKO0FBSWQ7QUFDQSxjQUFJSCxHQUFHLENBQUNJLElBQUosQ0FBU0MsS0FBYixFQUFvQjtBQUNoQkMsWUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWNQLEdBQUcsQ0FBQ0ksSUFBSixDQUFTQyxLQUF2QixFQUE4QkcsT0FBOUIsQ0FBc0MsVUFBQUMsS0FBSyxFQUFJO0FBQzNDTixjQUFBQSxXQUFXLElBQUlPLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDRSxNQUFQLENBQXZCO0FBQ0gsYUFGRDtBQUdIOztBQUVEO0FBQ01xQixVQUFBQSxZQVpRLEdBWU87QUFDakJuQixZQUFBQSxVQUFVLEVBQUViLEdBQUcsQ0FBQ0ksSUFBSixDQUFTUyxVQURKO0FBRWpCVixZQUFBQSxXQUFXLEVBQUVBLFdBRkk7QUFHakJjLFlBQUFBLGdCQUFnQixFQUFFakIsR0FBRyxDQUFDSSxJQUFKLENBQVNhLGdCQUhWO0FBSWpCZ0IsWUFBQUEsZ0JBQWdCLEVBQUVqQyxHQUFHLENBQUNJLElBQUosQ0FBUzhCLGVBSlY7QUFLakJwQixZQUFBQSxhQUFhLEVBQUVkLEdBQUcsQ0FBQ0ksSUFBSixDQUFTVSxhQUxQO0FBTWpCVCxZQUFBQSxLQUFLLEVBQUVMLEdBQUcsQ0FBQ0ksSUFBSixDQUFTQyxLQU5DLEVBWlA7OztBQXFCR1gsVUFBQUEsUUFBUSxDQUFDeUMsV0FBVCxDQUFxQjVDLEtBQXJCLEVBQTRCUyxHQUFHLENBQUMwQixNQUFKLENBQVdDLEVBQXZDLEVBQTJDSyxZQUEzQyxDQXJCSCxTQXFCVmIsSUFyQlU7QUFzQmQsY0FBSUEsSUFBSixFQUFVO0FBQ04xQixZQUFBQSxVQUFVLENBQUMyQixNQUFYLEdBQW9CLFNBQXBCO0FBQ0EzQixZQUFBQSxVQUFVLENBQUM0QixJQUFYLEdBQWtCLEdBQWxCO0FBQ0E1QixZQUFBQSxVQUFVLENBQUNTLE9BQVgsR0FBcUIscUNBQXJCO0FBQ0FULFlBQUFBLFVBQVUsQ0FBQzZCLFlBQVgsR0FBMEIsRUFBMUI7QUFDSCxXQTNCYTs7QUE2QmRjLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUjtBQUNBLGNBQUksYUFBSVQsSUFBSixJQUFZLGFBQUlBLElBQUosS0FBYSxVQUE3QixFQUF5QztBQUNyQ25DLFlBQUFBLFVBQVUsQ0FBQ1MsT0FBWCxHQUFxQiw2QkFBNkJGLEdBQUcsQ0FBQzBCLE1BQUosQ0FBV0MsRUFBN0Q7QUFDQWxDLFlBQUFBLFVBQVUsQ0FBQzRCLElBQVgsR0FBa0IsR0FBbEI7QUFDSCxXQUhELE1BR087QUFDSDVCLFlBQUFBLFVBQVUsQ0FBQ1MsT0FBWCxHQUFxQixvQ0FBb0NGLEdBQUcsQ0FBQzBCLE1BQUosQ0FBV0MsRUFBcEU7QUFDSCxXQW5DYTs7O0FBc0NsQmxDLFVBQUFBLFVBQVUsQ0FBQzhCLFlBQVgsQ0FBd0J0QixHQUF4QixFQXRDa0Isd0VBQXRCOzs7QUF5Q0E7QUFDQUgsT0FBTyxDQUFDd0MsTUFBUixHQUFpQixrQkFBT3RDLEdBQVAsRUFBWUMsR0FBWjtBQUNiUixVQUFBQSxVQUFVLENBQUNTLE9BQVgsR0FBcUIsZ0NBQXJCLENBRGE7OztBQUlUO0FBQ004QixVQUFBQSxZQUxHLEdBS1k7QUFDakJPLFlBQUFBLFlBQVksRUFBRSxDQURHLEVBTFo7OztBQVNRN0MsVUFBQUEsUUFBUSxDQUFDeUMsV0FBVCxDQUFxQjVDLEtBQXJCLEVBQTRCUyxHQUFHLENBQUMwQixNQUFKLENBQVdDLEVBQXZDLEVBQTJDSyxZQUEzQyxDQVRSLFNBU0xiLElBVEs7QUFVVCxjQUFJQSxJQUFKLEVBQVU7QUFDTjFCLFlBQUFBLFVBQVUsQ0FBQzJCLE1BQVgsR0FBb0IsU0FBcEI7QUFDQTNCLFlBQUFBLFVBQVUsQ0FBQzRCLElBQVgsR0FBa0IsR0FBbEI7QUFDQTVCLFlBQUFBLFVBQVUsQ0FBQ1MsT0FBWCxHQUFxQixxQ0FBckI7QUFDQVQsWUFBQUEsVUFBVSxDQUFDNkIsWUFBWCxHQUEwQixFQUExQjtBQUNILFdBZlE7O0FBaUJULGNBQUksYUFBSU0sSUFBSixJQUFZLGFBQUlBLElBQUosS0FBYSxVQUE3QixFQUF5QztBQUNyQ25DLFlBQUFBLFVBQVUsQ0FBQ1MsT0FBWCxHQUFxQiw2QkFBNkJGLEdBQUcsQ0FBQzBCLE1BQUosQ0FBV0MsRUFBN0Q7QUFDQWxDLFlBQUFBLFVBQVUsQ0FBQzRCLElBQVgsR0FBa0IsR0FBbEI7QUFDSCxXQUhELE1BR087QUFDSDVCLFlBQUFBLFVBQVUsQ0FBQ1MsT0FBWCxHQUFxQixvQ0FBb0NGLEdBQUcsQ0FBQzBCLE1BQUosQ0FBV0MsRUFBcEU7QUFDSCxXQXRCUTs7O0FBeUJibEMsVUFBQUEsVUFBVSxDQUFDOEIsWUFBWCxDQUF3QnRCLEdBQXhCLEVBekJhLHVFQUFqQjs7Ozs7QUE4QkE7QUFDQUgsT0FBTyxDQUFDMEMsZUFBUixHQUEwQixrQkFBT3hDLEdBQVAsRUFBWUMsR0FBWjtBQUN0QlIsVUFBQUEsVUFBVSxDQUFDUyxPQUFYLEdBQXFCLGlDQUFyQixDQURzQjs7QUFHRFIsVUFBQUEsUUFBUSxDQUFDOEMsZUFBVCxDQUF5QmpELEtBQXpCLEVBQWdDUyxHQUFHLENBQUNJLElBQXBDLENBSEMsU0FHZGUsSUFIYztBQUlsQixjQUFJYixNQUFNLENBQUNtQyxPQUFQLENBQWV0QixJQUFmLEVBQXFCdUIsTUFBckIsR0FBOEIsQ0FBbEMsRUFBcUM7QUFDakNqRCxZQUFBQSxVQUFVLENBQUMyQixNQUFYLEdBQW9CLFNBQXBCO0FBQ0EzQixZQUFBQSxVQUFVLENBQUM0QixJQUFYLEdBQWtCLEdBQWxCO0FBQ0E1QixZQUFBQSxVQUFVLENBQUNTLE9BQVgsR0FBcUIscUNBQXJCO0FBQ0FULFlBQUFBLFVBQVUsQ0FBQzZCLFlBQVgsR0FBMEJILElBQTFCO0FBQ0gsV0FMRCxNQUtPO0FBQ0gxQixZQUFBQSxVQUFVLENBQUMyQixNQUFYLEdBQW9CLFNBQXBCO0FBQ0EzQixZQUFBQSxVQUFVLENBQUM0QixJQUFYLEdBQWtCLEdBQWxCO0FBQ0E1QixZQUFBQSxVQUFVLENBQUNTLE9BQVgsR0FBcUIsVUFBckI7QUFDQVQsWUFBQUEsVUFBVSxDQUFDNkIsWUFBWCxHQUEwQkgsSUFBMUI7QUFDSCxXQWRpQjs7O0FBaUJsQixjQUFJLGFBQUlTLElBQUosSUFBWSxhQUFJQSxJQUFKLEtBQWEsVUFBN0IsRUFBeUM7QUFDckNuQyxZQUFBQSxVQUFVLENBQUNTLE9BQVgsR0FBcUIsNkJBQTZCRixHQUFHLENBQUMwQixNQUFKLENBQVdDLEVBQTdEO0FBQ0FsQyxZQUFBQSxVQUFVLENBQUM0QixJQUFYLEdBQWtCLEdBQWxCO0FBQ0gsV0FIRCxNQUdPO0FBQ0g1QixZQUFBQSxVQUFVLENBQUNTLE9BQVgsR0FBcUIsb0NBQW9DRixHQUFHLENBQUMwQixNQUFKLENBQVdDLEVBQXBFO0FBQ0gsV0F0QmlCOzs7QUF5QnRCbEMsVUFBQUEsVUFBVSxDQUFDOEIsWUFBWCxDQUF3QnRCLEdBQXhCLEVBekJzQix1RUFBMUI7OztBQTRCQTtBQUNBSCxPQUFPLENBQUM2QyxZQUFSLEdBQXVCLGtCQUFPM0MsR0FBUCxFQUFZQyxHQUFaO0FBQ25CUixVQUFBQSxVQUFVLENBQUNTLE9BQVgsR0FBcUIsNkJBQXJCLENBRG1COztBQUdFUixVQUFBQSxRQUFRLENBQUNpRCxZQUFULENBQXNCcEQsS0FBdEIsRUFBNEJTLEdBQUcsQ0FBQ0ksSUFBaEMsRUFBcUNQLGVBQXJDLENBSEYsU0FHWHNCLElBSFc7QUFJZixjQUFJYixNQUFNLENBQUNtQyxPQUFQLENBQWV0QixJQUFmLEVBQXFCdUIsTUFBckIsR0FBOEIsQ0FBbEMsRUFBcUM7QUFDakNqRCxZQUFBQSxVQUFVLENBQUMyQixNQUFYLEdBQW9CLFNBQXBCO0FBQ0EzQixZQUFBQSxVQUFVLENBQUM0QixJQUFYLEdBQWtCLEdBQWxCO0FBQ0E1QixZQUFBQSxVQUFVLENBQUNTLE9BQVgsR0FBcUIsa0NBQXJCO0FBQ0FULFlBQUFBLFVBQVUsQ0FBQzZCLFlBQVgsR0FBMEJILElBQTFCO0FBQ0gsV0FMRCxNQUtPO0FBQ0gxQixZQUFBQSxVQUFVLENBQUMyQixNQUFYLEdBQW9CLFNBQXBCO0FBQ0EzQixZQUFBQSxVQUFVLENBQUM0QixJQUFYLEdBQWtCLEdBQWxCO0FBQ0E1QixZQUFBQSxVQUFVLENBQUNTLE9BQVgsR0FBcUIsVUFBckI7QUFDQVQsWUFBQUEsVUFBVSxDQUFDNkIsWUFBWCxHQUEwQkgsSUFBMUI7QUFDSCxXQWRjOzs7QUFpQmYsY0FBSSxhQUFJUyxJQUFKLElBQVksYUFBSUEsSUFBSixLQUFhLFVBQTdCLEVBQXlDO0FBQ3JDbkMsWUFBQUEsVUFBVSxDQUFDUyxPQUFYLEdBQXFCLDZCQUE2QkYsR0FBRyxDQUFDMEIsTUFBSixDQUFXQyxFQUE3RDtBQUNBbEMsWUFBQUEsVUFBVSxDQUFDNEIsSUFBWCxHQUFrQixHQUFsQjtBQUNILFdBSEQsTUFHTztBQUNINUIsWUFBQUEsVUFBVSxDQUFDUyxPQUFYLEdBQXFCLG9DQUFvQ0YsR0FBRyxDQUFDMEIsTUFBSixDQUFXQyxFQUFwRTtBQUNILFdBdEJjOztBQXdCbkJsQyxVQUFBQSxVQUFVLENBQUM4QixZQUFYLENBQXdCdEIsR0FBeEIsRUF4Qm1CLHVFQUF2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBzZXJ2aWNlIGZpbGUgdG8gaGFuZGVsIG9yZGVyIHJlbGF0ZWQgYXBpLlxyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IE9yZGVyID0gcmVxdWlyZSgnLi4vbW9kZWxzL29yZGVyJylcclxuY29uc3QgcmVzdEhlbHBlciA9IHJlcXVpcmUoJy4uL2xpYi9yZXN0SGVscGVyJylcclxuY29uc3QgcXVlcnlPYmogPSByZXF1aXJlKCcuLi9saWIvcXVlcnlIYW5kbGVyJyk7XHJcbmNvbnN0IHsgY2hlY2ssIHZhbGlkYXRpb25SZXN1bHQgfSA9IHJlcXVpcmUoJ2V4cHJlc3MtdmFsaWRhdG9yJyk7XHJcbmNvbnN0IHtwYWdpbmF0aW9uTGltaXR9ID0gcmVxdWlyZSgnLi4vY29uZmlnL2luZGV4JylcclxuXHJcbi8vIENyZWF0ZSBhbmQgcGxhY2UgbmV3IG9yZGVyXHJcbmV4cG9ydHMucGxhY2VPcmRlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgcmVzdEhlbHBlci5tZXNzYWdlID0gXCJGYWlsZWQgdG8gcGxhY2Ugb3JkZXJcIlxyXG4gICAgbGV0IG9yZGVyYW1vdW50ID0gMFxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvL2NhbHVjbGF0aW5nIHRvdGFsIG9yZGVyIGFtb3VudFxyXG4gICAgICAgIGlmIChyZXEuYm9keS5pdGVtcykge1xyXG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKHJlcS5ib2R5Lml0ZW1zKS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIG9yZGVyYW1vdW50ICs9IHBhcnNlSW50KHZhbHVlLmFtb3VudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgb3JkZXIgdmFyXHJcbiAgICAgICAgY29uc3Qgb3JkZXIgPSBuZXcgT3JkZXIoe1xyXG4gICAgICAgICAgICBjdXN0b21lcmlkOiByZXEuYm9keS5jdXN0b21lcmlkLFxyXG4gICAgICAgICAgICByZXN0YXVyYW50X2lkOiByZXEuYm9keS5yZXN0YXVyYW50X2lkLFxyXG4gICAgICAgICAgICBvcmRlcmFtb3VudDogb3JkZXJhbW91bnQsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIGRlbGl2ZXJ5X2FkZHJlc3M6IHJlcS5ib2R5LmRlbGl2ZXJ5X2FkZHJlc3MsXHJcbiAgICAgICAgICAgIGl0ZW1zOiByZXEuYm9keS5pdGVtc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHF1ZXJ5T2JqLnNhdmVFbnRyeShvcmRlcilcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLnN0YXR1cyA9ICdTdWNjZXNzJztcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5jb2RlID0gMjAwO1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSAnUGxhY2VkIG9yZGVyIHN1Y2Nlc3NmdWxseS4nO1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLnJlc3BvbnNlRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJlc3RIZWxwZXIubWVzc2FnZSA9ICdGYWlsZWQgdG8gcGxhY2Ugb3JkZXIgJyArIGVyci5tZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3RIZWxwZXIuc2VuZFJlc3BvbnNlKHJlcyk7XHJcbn07XHJcblxyXG4vLyB2aWV3IG9yZGVyIGRldGFpbHNcclxuZXhwb3J0cy52aWV3T3JkZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHJlc3RIZWxwZXIubWVzc2FnZSA9IFwiRmFpbGVkIHRvIGdldCBvcmRlciBkZXRhaWxzXCJcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCBxdWVyeU9iai5nZXRFbnRyeUJ5SWQoT3JkZXIsIHJlcS5wYXJhbXMuaWQpXHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5zdGF0dXMgPSAnU3VjY2Vzcyc7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuY29kZSA9IDIwMDtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5tZXNzYWdlID0gJ1N1Y2Nlc3NmdWxseSBmZXRjaGVkIG9yZGVyIGRldGFpbHMuJztcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5yZXNwb25zZURhdGEgPSBkYXRhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBpZiAoZXJyLmtpbmQgJiYgZXJyLmtpbmQgPT09ICdPYmplY3RJZCcpIHtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5tZXNzYWdlID0gXCJPcmRlciBub3QgZm91bmQgd2l0aCBpZCBcIiArIHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuY29kZSA9IDIwNDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSBcIkVycm9yIHJldHJpZXZpbmcgb3JkZXIgd2l0aCBpZCBcIiArIHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc3RIZWxwZXIuc2VuZFJlc3BvbnNlKHJlcyk7XHJcbn07XHJcblxyXG4vLyBnZXQgdG90YWwgYW1vdW50XHJcbmV4cG9ydHMudG90YWxBbW91bnQgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHJlc3RIZWxwZXIubWVzc2FnZSA9IFwiRmFpbGVkIHRvIGdldCBvcmRlciBkZXRhaWxzXCJcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCBxdWVyeU9iai5nZXRFbnRyeUZpZWxkc0J5SWQoT3JkZXIsIHJlcS5wYXJhbXMuaWQsICdvcmRlcmFtb3VudCcpXHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5zdGF0dXMgPSAnU3VjY2Vzcyc7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuY29kZSA9IDIwMDtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5tZXNzYWdlID0gJ1N1Y2Nlc3NmdWxseSBmZXRjaGVkIG9yZGVyIGRldGFpbHMuJztcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5yZXNwb25zZURhdGEgPSBkYXRhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBpZiAoZXJyLmtpbmQgJiYgZXJyLmtpbmQgPT09ICdPYmplY3RJZCcpIHtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5tZXNzYWdlID0gXCJPcmRlciBub3QgZm91bmQgd2l0aCBpZCBcIiArIHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuY29kZSA9IDIwNDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSBcIkVycm9yIHJldHJpZXZpbmcgb3JkZXIgd2l0aCBpZCBcIiArIHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc3RIZWxwZXIuc2VuZFJlc3BvbnNlKHJlcyk7XHJcbn07XHJcblxyXG4vLyB1cGRhdGUgb3JkZXJcclxuZXhwb3J0cy51cGRhdGVPcmRlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgcmVzdEhlbHBlci5tZXNzYWdlID0gXCJGYWlsZWQgdG8gdXBkYXRlIG9yZGVyIGRldGFpbHNcIlxyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgb3JkZXJhbW91bnQgPSAwIFxyXG4gICAgICAgIC8vY2FsdWNsYXRpbmcgdG90YWwgb3JkZXIgYW1vdW50XHJcbiAgICAgICAgaWYgKHJlcS5ib2R5Lml0ZW1zKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMocmVxLmJvZHkuaXRlbXMpLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3JkZXJhbW91bnQgKz0gcGFyc2VJbnQodmFsdWUuYW1vdW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB1cGRhdGVkIGEgb3JkZXIgdmFyXHJcbiAgICAgICAgY29uc3Qgb3JkZXJEZXRhaWxzID0ge1xyXG4gICAgICAgICAgICBjdXN0b21lcmlkOiByZXEuYm9keS5jdXN0b21lcmlkLFxyXG4gICAgICAgICAgICBvcmRlcmFtb3VudDogb3JkZXJhbW91bnQsXHJcbiAgICAgICAgICAgIGRlbGl2ZXJ5X2FkZHJlc3M6IHJlcS5ib2R5LmRlbGl2ZXJ5X2FkZHJlc3MsXHJcbiAgICAgICAgICAgIGRlbGl2ZXJlZF9zdGF0dXM6IHJlcS5ib2R5LmRlbGl2ZXJ5X3N0YXR1cyxcclxuICAgICAgICAgICAgcmVzdGF1cmFudF9pZDogcmVxLmJvZHkucmVzdGF1cmFudF9pZCxcclxuICAgICAgICAgICAgaXRlbXM6IHJlcS5ib2R5Lml0ZW1zXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCBxdWVyeU9iai51cGRhdGVFbnRyeShPcmRlciwgcmVxLnBhcmFtcy5pZCwgb3JkZXJEZXRhaWxzKVxyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuc3RhdHVzID0gJ1N1Y2Nlc3MnO1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLmNvZGUgPSAyMDA7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIubWVzc2FnZSA9IFwiU3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgb3JkZXIgZGVhdGFpbHNcIjtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5yZXNwb25zZURhdGEgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIGlmIChlcnIua2luZCAmJiBlcnIua2luZCA9PT0gJ09iamVjdElkJykge1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSBcIk9yZGVyIG5vdCBmb3VuZCB3aXRoIGlkIFwiICsgcmVxLnBhcmFtcy5pZDtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5jb2RlID0gMjA0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIubWVzc2FnZSA9IFwiRXJyb3IgcmV0cmlldmluZyBvcmRlciB3aXRoIGlkIFwiICsgcmVxLnBhcmFtcy5pZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdEhlbHBlci5zZW5kUmVzcG9uc2UocmVzKTtcclxufTtcclxuXHJcbi8vIGNhbmNlbCBvcmRlclxyXG5leHBvcnRzLmNhbmNlbCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgcmVzdEhlbHBlci5tZXNzYWdlID0gXCJGYWlsZWQgdG8gdXBkYXRlIG9yZGVyIGRldGFpbHNcIlxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgb3JkZXIgdmFyXHJcbiAgICAgICAgY29uc3Qgb3JkZXJEZXRhaWxzID0ge1xyXG4gICAgICAgICAgICBvcmRlcl9zdGF0dXM6IDBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHF1ZXJ5T2JqLnVwZGF0ZUVudHJ5KE9yZGVyLCByZXEucGFyYW1zLmlkLCBvcmRlckRldGFpbHMpXHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5zdGF0dXMgPSAnU3VjY2Vzcyc7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuY29kZSA9IDIwMDtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5tZXNzYWdlID0gXCJTdWNjZXNzZnVsbHkgdXBkYXRlZCBvcmRlciBkZWF0YWlsc1wiO1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLnJlc3BvbnNlRGF0YSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGlmIChlcnIua2luZCAmJiBlcnIua2luZCA9PT0gJ09iamVjdElkJykge1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSBcIk9yZGVyIG5vdCBmb3VuZCB3aXRoIGlkIFwiICsgcmVxLnBhcmFtcy5pZDtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5jb2RlID0gMjA0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIubWVzc2FnZSA9IFwiRXJyb3IgcmV0cmlldmluZyBvcmRlciB3aXRoIGlkIFwiICsgcmVxLnBhcmFtcy5pZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdEhlbHBlci5zZW5kUmVzcG9uc2UocmVzKTtcclxuXHJcbn07XHJcblxyXG5cclxuLy8gZ2V0IHRvdGFsIGFtb3VudCBmb3IgZ2l2ZW4gb3JkZXJzIFxyXG5leHBvcnRzLmdldE9yZGVyc0Ftb3VudCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgcmVzdEhlbHBlci5tZXNzYWdlID0gXCJGYWlsZWQgdG8gZ2V0IGFtb3VudCBmb3Igb3JkZXJzXCJcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCBxdWVyeU9iai5nZXRPcmRlcnNBbW91bnQoT3JkZXIsIHJlcS5ib2R5KVxyXG4gICAgICAgIGlmIChPYmplY3QuZW50cmllcyhkYXRhKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuc3RhdHVzID0gJ1N1Y2Nlc3MnO1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLmNvZGUgPSAyMDA7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIubWVzc2FnZSA9ICdTdWNjZXNzZnVsbHkgZmV0Y2hlZCBvcmRlciBkZXRhaWxzLic7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIucmVzcG9uc2VEYXRhID0gZGF0YTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLnN0YXR1cyA9ICdTdWNjZXNzJztcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5jb2RlID0gMjA0O1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSAnTm8gZGF0YS4nO1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLnJlc3BvbnNlRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGlmIChlcnIua2luZCAmJiBlcnIua2luZCA9PT0gJ09iamVjdElkJykge1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSBcIk9yZGVyIG5vdCBmb3VuZCB3aXRoIGlkIFwiICsgcmVxLnBhcmFtcy5pZDtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5jb2RlID0gMjA0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIubWVzc2FnZSA9IFwiRXJyb3IgcmV0cmlldmluZyBvcmRlciB3aXRoIGlkIFwiICsgcmVxLnBhcmFtcy5pZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdEhlbHBlci5zZW5kUmVzcG9uc2UocmVzKTtcclxufTtcclxuXHJcbi8vIGdldCBvcmRlcnMgbGlzdCBmb3IgZ2l2ZW4gcmVzdGF1cmFudHMgYW5kIGRhdGEgXHJcbmV4cG9ydHMuZ2V0T3JkZXJMaXN0ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSBcIkZhaWxlZCB0byBnZXQgb3JkZXIgZGV0YWlsc1wiXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgcXVlcnlPYmouZ2V0T3JkZXJMaXN0KE9yZGVyLHJlcS5ib2R5LHBhZ2luYXRpb25MaW1pdClcclxuICAgICAgICBpZiAoT2JqZWN0LmVudHJpZXMoZGF0YSkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLnN0YXR1cyA9ICdTdWNjZXNzJztcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5jb2RlID0gMjAwO1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSAnU3VjY2Vzc2Z1bGx5IGZldGNoZWQgb3JkZXIgbGlzdC4nO1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLnJlc3BvbnNlRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5zdGF0dXMgPSAnU3VjY2Vzcyc7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuY29kZSA9IDIwNDtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5tZXNzYWdlID0gJ05vIGRhdGEuJztcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5yZXNwb25zZURhdGEgPSBkYXRhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBpZiAoZXJyLmtpbmQgJiYgZXJyLmtpbmQgPT09ICdPYmplY3RJZCcpIHtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5tZXNzYWdlID0gXCJPcmRlciBub3QgZm91bmQgd2l0aCBpZCBcIiArIHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuY29kZSA9IDIwNDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSBcIkVycm9yIHJldHJpZXZpbmcgb3JkZXIgd2l0aCBpZCBcIiArIHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzdEhlbHBlci5zZW5kUmVzcG9uc2UocmVzKTtcclxufTtcclxuIl19