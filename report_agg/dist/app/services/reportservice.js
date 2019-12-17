/**
 * @file
 * service file to handle report related api calls
 */

'use strict';var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var rp = require('request-promise');
var restHelper = require('../lib/restHelper');var _require =
require('express-validator'),check = _require.check,validationResult = _require.validationResult;
var orderApiUrl = "http://localhost:8082/order/";
var restaurantApiUrl = "http://localhost:8083/restaurant/";

// get orders list
exports.ordersList = function _callee(req, res) {var city, resOptions, restaurantData, restaurant_ids, orderOptions, orderListData;return _regenerator["default"].async(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
          restHelper.message = "Failed to get order list";_context.prev = 1;

          city = req.query.city;
          resOptions = {
            method: 'GET',
            uri: restaurantApiUrl + 'resList?city=' + city.toLowerCase(),
            headers: {
              'User-Agent': 'Request-Promise' },

            json: true // Automatically stringifies the body to JSON
          };

          // fetching rest ids
          _context.next = 6;return _regenerator["default"].awrap(rp(resOptions));case 6:restaurantData = _context.sent;if (!(
          restaurantData && Object.entries(restaurantData.data).length > 0)) {_context.next = 16;break;}
          restaurant_ids = restaurantData.data.map(function (item) {
            return item['_id'];
          });

          orderOptions = {
            method: 'POST',
            uri: orderApiUrl + 'orderList',
            body: {
              restaurantids: restaurant_ids,
              fromdate: req.query.fromdate,
              todate: req.query.todate,
              pageNo: req.query.pageNo },

            json: true // Automatically stringifies the body to JSON
          };_context.next = 12;return _regenerator["default"].awrap(

          rp(orderOptions));case 12:orderListData = _context.sent;
          if (orderListData && Object.entries(orderListData.data).length > 0) {
            restHelper.status = 'Success';
            restHelper.code = 200;
            restHelper.message = 'Successfully fetched order list of today.';
            restHelper.responseData = orderListData.data;
          } else {
            restHelper.status = 'Success';
            restHelper.code = 204;
            restHelper.message = 'No data.';
            restHelper.responseData = [];
          }_context.next = 20;break;case 16:


          restHelper.status = 'Success';
          restHelper.code = 204;
          restHelper.message = 'No data.';
          restHelper.responseData = [];case 20:_context.next = 25;break;case 22:_context.prev = 22;_context.t0 = _context["catch"](1);


          //console.log(err);
          restHelper.message = 'Failed to get order list ' + _context.t0.message;case 25:


          restHelper.sendResponse(res);case 26:case "end":return _context.stop();}}}, null, null, [[1, 22]]);};


// get total amount of all orders
exports.ordersTotalAmount = function _callee2(req, res) {var city, resOptions, restaurantData, restaurant_ids, orderOptions, totalAmount;return _regenerator["default"].async(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
          restHelper.message = "Failed to get order total amount";_context2.prev = 1;


          city = req.query.city;

          resOptions = {
            method: 'GET',
            uri: restaurantApiUrl + 'resList?city=' + city.toLowerCase(),
            headers: {
              'User-Agent': 'Request-Promise' },

            json: true // Automatically stringifies the body to JSON
          };_context2.next = 6;return _regenerator["default"].awrap(

          rp(resOptions));case 6:restaurantData = _context2.sent;if (!(
          restaurantData && Object.entries(restaurantData.data).length > 0)) {_context2.next = 16;break;}
          restaurant_ids = restaurantData.data.map(function (item) {
            return item['_id'];
          });

          orderOptions = {
            method: 'POST',
            uri: orderApiUrl + 'ordersAmount',
            body: {
              restaurantids: restaurant_ids,
              fromdate: req.query.fromdate,
              todate: req.query.todate },

            json: true // Automatically stringifies the body to JSON
          };_context2.next = 12;return _regenerator["default"].awrap(

          rp(orderOptions));case 12:totalAmount = _context2.sent;
          if (totalAmount && Object.entries(totalAmount.data).length > 0) {
            restHelper.status = 'Success';
            restHelper.code = 200;
            restHelper.message = 'Successfully fetched order total amount of today.';
            restHelper.responseData = totalAmount.data;
          } else {
            restHelper.status = 'Success';
            restHelper.code = 204;
            restHelper.message = 'No data.';
            restHelper.responseData = [];
          }_context2.next = 20;break;case 16:


          restHelper.status = 'Success';
          restHelper.code = 204;
          restHelper.message = 'No data.';
          restHelper.responseData = [];case 20:_context2.next = 25;break;case 22:_context2.prev = 22;_context2.t0 = _context2["catch"](1);


          //console.log(err);
          restHelper.message = 'Failed to get order total amount' + _context2.t0.message;case 25:


          restHelper.sendResponse(res);case 26:case "end":return _context2.stop();}}}, null, null, [[1, 22]]);};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvc2VydmljZXMvcmVwb3J0U2VydmljZS5qcyJdLCJuYW1lcyI6WyJycCIsInJlcXVpcmUiLCJyZXN0SGVscGVyIiwiY2hlY2siLCJ2YWxpZGF0aW9uUmVzdWx0Iiwib3JkZXJBcGlVcmwiLCJyZXN0YXVyYW50QXBpVXJsIiwiZXhwb3J0cyIsIm9yZGVyc0xpc3QiLCJyZXEiLCJyZXMiLCJtZXNzYWdlIiwiY2l0eSIsInF1ZXJ5IiwicmVzT3B0aW9ucyIsIm1ldGhvZCIsInVyaSIsInRvTG93ZXJDYXNlIiwiaGVhZGVycyIsImpzb24iLCJyZXN0YXVyYW50RGF0YSIsIk9iamVjdCIsImVudHJpZXMiLCJkYXRhIiwibGVuZ3RoIiwicmVzdGF1cmFudF9pZHMiLCJtYXAiLCJpdGVtIiwib3JkZXJPcHRpb25zIiwiYm9keSIsInJlc3RhdXJhbnRpZHMiLCJmcm9tZGF0ZSIsInRvZGF0ZSIsInBhZ2VObyIsIm9yZGVyTGlzdERhdGEiLCJzdGF0dXMiLCJjb2RlIiwicmVzcG9uc2VEYXRhIiwic2VuZFJlc3BvbnNlIiwib3JkZXJzVG90YWxBbW91bnQiLCJ0b3RhbEFtb3VudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0EsYTs7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLE9BQU8sQ0FBQyxpQkFBRCxDQUFsQjtBQUNBLElBQU1DLFVBQVUsR0FBR0QsT0FBTyxDQUFDLG1CQUFELENBQTFCLEM7QUFDb0NBLE9BQU8sQ0FBQyxtQkFBRCxDLENBQW5DRSxLLFlBQUFBLEssQ0FBT0MsZ0IsWUFBQUEsZ0I7QUFDZixJQUFNQyxXQUFXLEdBQUcsOEJBQXBCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsbUNBQXpCOztBQUVBO0FBQ0FDLE9BQU8sQ0FBQ0MsVUFBUixHQUFxQixpQkFBT0MsR0FBUCxFQUFZQyxHQUFaO0FBQ2pCUixVQUFBQSxVQUFVLENBQUNTLE9BQVgsR0FBcUIsMEJBQXJCLENBRGlCOztBQUdUQyxVQUFBQSxJQUhTLEdBR0ZILEdB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ZWtCLFdBQVcsQ0FBQ2pCLElBQTNCLEVBQWlDQyxNQUFqQyxHQUEwQyxDQUE3RCxFQUFnRTtBQUM1RHRCLFlBQUFBLFVBQVUsQ0FBQ2lDLE1BQVgsR0FBb0IsU0FBcEI7QUFDQWpDLFlBQUFBLFVBQVUsQ0FBQ2tDLElBQVgsR0FBa0IsR0FBbEI7QUFDQWxDLFlBQUFBLFVBQVUsQ0FBQ1MsT0FBWCxHQUFxQixtREFBckI7QUFDQVQsWUFBQUEsVUFBVSxDQUFDbUMsWUFBWCxHQUEwQkcsV0FBVyxDQUFDakIsSUFBdEM7QUFDSCxXQUxELE1BS087QUFDSHJCLFlBQUFBLFVBQVUsQ0FBQ2lDLE1BQVgsR0FBb0IsU0FBcEI7QUFDQWpDLFlBQUFBLFVBQVUsQ0FBQ2tDLElBQVgsR0FBa0IsR0FBbEI7QUFDQWxDLFlBQUFBLFVBQVUsQ0FBQ1MsT0FBWCxHQUFxQixVQUFyQjtBQUNBVCxZQUFBQSxVQUFVLENBQUNtQyxZQUFYLEdBQTBCLEVBQTFCO0FBQ0gsV0EzQ2U7OztBQThDaEJuQyxVQUFBQSxVQUFVLENBQUNpQyxNQUFYLEdBQW9CLFNBQXBCO0FBQ0FqQyxVQUFBQSxVQUFVLENBQUNrQyxJQUFYLEdBQWtCLEdBQWxCO0FBQ0FsQyxVQUFBQSxVQUFVLENBQUNTLE9BQVgsR0FBcUIsVUFBckI7QUFDQVQsVUFBQUEsVUFBVSxDQUFDbUMsWUFBWCxHQUEwQixFQUExQixDQWpEZ0I7OztBQW9EcEI7QUFDQW5DLFVBQUFBLFVBQVUsQ0FBQ1MsT0FBWCxHQUFxQixxQ0FBcUMsYUFBSUEsT0FBOUQsQ0FyRG9COzs7QUF3RHhCVCxVQUFBQSxVQUFVLENBQUNvQyxZQUFYLENBQXdCNUIsR0FBeEIsRUF4RHdCLHdFQUE1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBzZXJ2aWNlIGZpbGUgdG8gaGFuZGxlIHJlcG9ydCByZWxhdGVkIGFwaSBjYWxsc1xyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IHJwID0gcmVxdWlyZSgncmVxdWVzdC1wcm9taXNlJyk7XHJcbmNvbnN0IHJlc3RIZWxwZXIgPSByZXF1aXJlKCcuLi9saWIvcmVzdEhlbHBlcicpXHJcbmNvbnN0IHsgY2hlY2ssIHZhbGlkYXRpb25SZXN1bHQgfSA9IHJlcXVpcmUoJ2V4cHJlc3MtdmFsaWRhdG9yJyk7XHJcbmNvbnN0IG9yZGVyQXBpVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODIvb3JkZXIvXCI7XHJcbmNvbnN0IHJlc3RhdXJhbnRBcGlVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4My9yZXN0YXVyYW50L1wiO1xyXG5cclxuLy8gZ2V0IG9yZGVycyBsaXN0XHJcbmV4cG9ydHMub3JkZXJzTGlzdCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgcmVzdEhlbHBlci5tZXNzYWdlID0gXCJGYWlsZWQgdG8gZ2V0IG9yZGVyIGxpc3RcIlxyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgY2l0eSA9IHJlcS5xdWVyeS5jaXR5O1xyXG4gICAgICAgIGxldCByZXNPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmk6IHJlc3RhdXJhbnRBcGlVcmwgKyAncmVzTGlzdD9jaXR5PScgKyBjaXR5LnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdVc2VyLUFnZW50JzogJ1JlcXVlc3QtUHJvbWlzZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSAvLyBBdXRvbWF0aWNhbGx5IHN0cmluZ2lmaWVzIHRoZSBib2R5IHRvIEpTT05cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZldGNoaW5nIHJlc3QgaWRzXHJcbiAgICAgICAgY29uc3QgcmVzdGF1cmFudERhdGEgPSBhd2FpdCBycChyZXNPcHRpb25zKTtcclxuICAgICAgICBpZiAocmVzdGF1cmFudERhdGEgJiYgT2JqZWN0LmVudHJpZXMocmVzdGF1cmFudERhdGEuZGF0YSkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdGF1cmFudF9pZHMgPSByZXN0YXVyYW50RGF0YS5kYXRhLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1bJ19pZCddO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBvcmRlck9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIHVyaTogb3JkZXJBcGlVcmwgKyAnb3JkZXJMaXN0JyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN0YXVyYW50aWRzOiByZXN0YXVyYW50X2lkcyxcclxuICAgICAgICAgICAgICAgICAgICBmcm9tZGF0ZTogcmVxLnF1ZXJ5LmZyb21kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvZGF0ZTogcmVxLnF1ZXJ5LnRvZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlTm86IHJlcS5xdWVyeS5wYWdlTm9cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBqc29uOiB0cnVlIC8vIEF1dG9tYXRpY2FsbHkgc3RyaW5naWZpZXMgdGhlIGJvZHkgdG8gSlNPTlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBvcmRlckxpc3REYXRhID0gYXdhaXQgcnAob3JkZXJPcHRpb25zKTtcclxuICAgICAgICAgICAgaWYgKG9yZGVyTGlzdERhdGEgJiYgT2JqZWN0LmVudHJpZXMob3JkZXJMaXN0RGF0YS5kYXRhKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXN0SGVscGVyLnN0YXR1cyA9ICdTdWNjZXNzJztcclxuICAgICAgICAgICAgICAgIHJlc3RIZWxwZXIuY29kZSA9IDIwMDtcclxuICAgICAgICAgICAgICAgIHJlc3RIZWxwZXIubWVzc2FnZSA9ICdTdWNjZXNzZnVsbHkgZmV0Y2hlZCBvcmRlciBsaXN0IG9mIHRvZGF5Lic7XHJcbiAgICAgICAgICAgICAgICByZXN0SGVscGVyLnJlc3BvbnNlRGF0YSA9IG9yZGVyTGlzdERhdGEuZGF0YTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3RIZWxwZXIuc3RhdHVzID0gJ1N1Y2Nlc3MnO1xyXG4gICAgICAgICAgICAgICAgcmVzdEhlbHBlci5jb2RlID0gMjA0O1xyXG4gICAgICAgICAgICAgICAgcmVzdEhlbHBlci5tZXNzYWdlID0gJ05vIGRhdGEuJztcclxuICAgICAgICAgICAgICAgIHJlc3RIZWxwZXIucmVzcG9uc2VEYXRhID0gW107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5zdGF0dXMgPSAnU3VjY2Vzcyc7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuY29kZSA9IDIwNDtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5tZXNzYWdlID0gJ05vIGRhdGEuJztcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5yZXNwb25zZURhdGEgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgcmVzdEhlbHBlci5tZXNzYWdlID0gJ0ZhaWxlZCB0byBnZXQgb3JkZXIgbGlzdCAnICsgZXJyLm1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdEhlbHBlci5zZW5kUmVzcG9uc2UocmVzKTtcclxufTtcclxuXHJcbi8vIGdldCB0b3RhbCBhbW91bnQgb2YgYWxsIG9yZGVyc1xyXG5leHBvcnRzLm9yZGVyc1RvdGFsQW1vdW50ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSBcIkZhaWxlZCB0byBnZXQgb3JkZXIgdG90YWwgYW1vdW50XCJcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCBjaXR5ID0gcmVxLnF1ZXJ5LmNpdHk7XHJcblxyXG4gICAgICAgIGxldCByZXNPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmk6IHJlc3RhdXJhbnRBcGlVcmwgKyAncmVzTGlzdD9jaXR5PScgKyBjaXR5LnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdVc2VyLUFnZW50JzogJ1JlcXVlc3QtUHJvbWlzZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSAvLyBBdXRvbWF0aWNhbGx5IHN0cmluZ2lmaWVzIHRoZSBib2R5IHRvIEpTT05cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3RhdXJhbnREYXRhID0gYXdhaXQgcnAocmVzT3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHJlc3RhdXJhbnREYXRhICYmIE9iamVjdC5lbnRyaWVzKHJlc3RhdXJhbnREYXRhLmRhdGEpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdmFyIHJlc3RhdXJhbnRfaWRzID0gcmVzdGF1cmFudERhdGEuZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtWydfaWQnXTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgb3JkZXJPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICB1cmk6IG9yZGVyQXBpVXJsICsgJ29yZGVyc0Ftb3VudCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdGF1cmFudGlkczogcmVzdGF1cmFudF9pZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbWRhdGU6IHJlcS5xdWVyeS5mcm9tZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICB0b2RhdGU6IHJlcS5xdWVyeS50b2RhdGVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBqc29uOiB0cnVlIC8vIEF1dG9tYXRpY2FsbHkgc3RyaW5naWZpZXMgdGhlIGJvZHkgdG8gSlNPTlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0b3RhbEFtb3VudCA9IGF3YWl0IHJwKG9yZGVyT3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGlmICh0b3RhbEFtb3VudCAmJiBPYmplY3QuZW50cmllcyh0b3RhbEFtb3VudC5kYXRhKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXN0SGVscGVyLnN0YXR1cyA9ICdTdWNjZXNzJztcclxuICAgICAgICAgICAgICAgIHJlc3RIZWxwZXIuY29kZSA9IDIwMDtcclxuICAgICAgICAgICAgICAgIHJlc3RIZWxwZXIubWVzc2FnZSA9ICdTdWNjZXNzZnVsbHkgZmV0Y2hlZCBvcmRlciB0b3RhbCBhbW91bnQgb2YgdG9kYXkuJztcclxuICAgICAgICAgICAgICAgIHJlc3RIZWxwZXIucmVzcG9uc2VEYXRhID0gdG90YWxBbW91bnQuZGF0YTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3RIZWxwZXIuc3RhdHVzID0gJ1N1Y2Nlc3MnO1xyXG4gICAgICAgICAgICAgICAgcmVzdEhlbHBlci5jb2RlID0gMjA0O1xyXG4gICAgICAgICAgICAgICAgcmVzdEhlbHBlci5tZXNzYWdlID0gJ05vIGRhdGEuJztcclxuICAgICAgICAgICAgICAgIHJlc3RIZWxwZXIucmVzcG9uc2VEYXRhID0gW107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5zdGF0dXMgPSAnU3VjY2Vzcyc7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuY29kZSA9IDIwNDtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5tZXNzYWdlID0gJ05vIGRhdGEuJztcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5yZXNwb25zZURhdGEgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgcmVzdEhlbHBlci5tZXNzYWdlID0gJ0ZhaWxlZCB0byBnZXQgb3JkZXIgdG90YWwgYW1vdW50JyArIGVyci5tZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3RIZWxwZXIuc2VuZFJlc3BvbnNlKHJlcyk7XHJcbn07Il19