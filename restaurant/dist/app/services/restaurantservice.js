'use strict';var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var Restaurant = require('../models/restaurant');
var restHelper = require('../lib/restHelper');
var querObj = require('../lib/queryHandler');var _require =
require('../config/index'),paginationLimit = _require.paginationLimit,serByDistance = _require.serByDistance;

// get restuarant by lat and lang
exports.search = function _callee(req, res) {var data;return _regenerator["default"].async(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
          restHelper.message = "Failed to save restuarant";_context.prev = 1;_context.next = 4;return _regenerator["default"].awrap(

          querObj.findEntry(Restaurant, req.body, serByDistance, paginationLimit));case 4:data = _context.sent;
          if (Object.entries(data).length > 0) {
            restHelper.status = 'Success';
            restHelper.code = 200;
            restHelper.message = 'Successfully fetched the restaurant list.';
            restHelper.responseData = data;
          } else {
            restHelper.status = 'Success';
            restHelper.code = 204;
            restHelper.message = 'No data.';
            restHelper.responseData = data;
          }_context.next = 11;break;case 8:_context.prev = 8;_context.t0 = _context["catch"](1);

          restHelper.message = 'Failed to save ' + _context.t0.message;case 11:


          restHelper.sendResponse(res);case 12:case "end":return _context.stop();}}}, null, null, [[1, 8]]);};


exports.create = function _callee2(req, res) {var restaurant, data;return _regenerator["default"].async(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
          restHelper.message = "Failed to save restuarant";_context2.prev = 1;


          // Create a order var
          restaurant = new Restaurant({
            name: req.body.name,
            city: req.body.city,
            address: req.body.address,
            cuisines: req.body.cuisines,
            zipcode: req.body.zipcode,
            budget: req.body.budget,
            ratings: req.body.ratings,
            phonenumber: req.body.phonenumber,
            location: req.body.location,
            created_at: new Date(),
            menu: req.body.items });_context2.next = 5;return _regenerator["default"].awrap(


          querObj.saveEntry(restaurant));case 5:data = _context2.sent;
          if (data) {
            restHelper.status = 'Success';
            restHelper.code = 200;
            restHelper.message = 'successfully.';
            restHelper.responseData = data;
          }_context2.next = 12;break;case 9:_context2.prev = 9;_context2.t0 = _context2["catch"](1);


          restHelper.message = 'Failed to save ' + _context2.t0.message;case 12:


          restHelper.sendResponse(res);case 13:case "end":return _context2.stop();}}}, null, null, [[1, 9]]);};

// get restuarant by city
exports.resList = function _callee3(req, res) {var data;return _regenerator["default"].async(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
          restHelper.message = "Failed to get restuarant list";_context3.prev = 1;_context3.next = 4;return _regenerator["default"].awrap(

          querObj.getIdsByCity(Restaurant, req.query.city, '_id'));case 4:data = _context3.sent;
          if (Object.entries(data).length !== 0) {
            restHelper.status = 'Success';
            restHelper.code = 200;
            restHelper.message = 'Successfully fetched the restuarant list.';
            restHelper.responseData = data;
          } else {
            restHelper.status = 'Success';
            restHelper.code = 204;
            restHelper.message = 'No data.';
            restHelper.responseData = data;
          }_context3.next = 11;break;case 8:_context3.prev = 8;_context3.t0 = _context3["catch"](1);

          restHelper.message = 'Failed to get restuarant list ' + _context3.t0.message;case 11:

          restHelper.sendResponse(res);case 12:case "end":return _context3.stop();}}}, null, null, [[1, 8]]);};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvc2VydmljZXMvcmVzdGF1cmFudFNlcnZpY2UuanMiXSwibmFtZXMiOlsiUmVzdGF1cmFudCIsInJlcXVpcmUiLCJyZXN0SGVscGVyIiwicXVlck9iaiIsInBhZ2luYXRpb25MaW1pdCIsInNlckJ5RGlzdGFuY2UiLCJleHBvcnRzIiwic2VhcmNoIiwicmVxIiwicmVzIiwibWVzc2FnZSIsImZpbmRFbnRyeSIsImJvZHkiLCJkYXRhIiwiT2JqZWN0IiwiZW50cmllcyIsImxlbmd0aCIsInN0YXR1cyIsImNvZGUiLCJyZXNwb25zZURhdGEiLCJzZW5kUmVzcG9uc2UiLCJjcmVhdGUiLCJyZXN0YXVyYW50IiwibmFtZSIsImNpdHkiLCJhZGRyZXNzIiwiY3Vpc2luZXMiLCJ6aXBjb2RlIiwiYnVkZ2V0IiwicmF0aW5ncyIsInBob25lbnVtYmVyIiwibG9jYXRpb24iLCJjcmVhdGVkX2F0IiwiRGF0ZSIsIm1lbnUiLCJpdGVtcyIsInNhdmVFbnRyeSIsInJlc0xpc3QiLCJnZXRJZHNCeUNpdHkiLCJxdWVyeSJdLCJtYXBwaW5ncyI6IkFBQUEsYTs7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxzQkFBRCxDQUExQjtBQUNBLElBQU1DLFVBQVUsR0FBR0QsT0FBTyxDQUFDLG1CQUFELENBQTFCO0FBQ0EsSUFBTUUsT0FBTyxHQUFHRixPQUFPLENBQUMscUJBQUQsQ0FBdkIsQztBQUMyQ0EsT0FBTyxDQUFDLGlCQUFELEMsQ0FBMUNHLGUsWUFBQUEsZSxDQUFpQkMsYSxZQUFBQSxhOztBQUV6QjtBQUNBQyxPQUFPLENBQUNDLE1BQVIsR0FBaUIsaUJBQU9DLEdBQVAsRUFBWUMsR0FBWjtBQUNiUCxVQUFBQSxVQUFVLENBQUNRLE9BQVgsR0FBcUIsMkJBQXJCLENBRGE7O0FBR1FQLFVBQUFBLE9BQU8sQ0FBQ1EsU0FBUixDQUFrQlgsVUFBbEIsRUFBOEJRLEdBQUcsQ0FBQ0ksSUFBbEMsRUFBd0NQLGFBQXhDLEVBQXVERCxl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QVIsQ0FBcUJ0QyxVQUFyQixFQUFpQ1EsR0FBRyxDQUFDK0IsS0FBSixDQUFVZixJQUEzQyxFQUFpRCxLQUFqRCxDQUhQLFNBR05YLElBSE07QUFJVixjQUFJQyxNQUFNLENBQUNDLE9BQVAsQ0FBZUYsSUFBZixFQUFxQkcsTUFBckIsS0FBZ0MsQ0FBcEMsRUFBdUM7QUFDbkNkLFlBQUFBLFVBQVUsQ0FBQ2UsTUFBWCxHQUFvQixTQUFwQjtBQUNBZixZQUFBQSxVQUFVLENBQUNnQixJQUFYLEdBQWtCLEdBQWxCO0FBQ0FoQixZQUFBQSxVQUFVLENBQUNRLE9BQVgsR0FBcUIsMkNBQXJCO0FBQ0FSLFlBQUFBLFVBQVUsQ0FBQ2lCLFlBQVgsR0FBMEJOLElBQTFCO0FBQ0gsV0FMRCxNQUtPO0FBQ0hYLFlBQUFBLFVBQVUsQ0FBQ2UsTUFBWCxHQUFvQixTQUFwQjtBQUNBZixZQUFBQSxVQUFVLENBQUNnQixJQUFYLEdBQWtCLEdBQWxCO0FBQ0FoQixZQUFBQSxVQUFVLENBQUNRLE9BQVgsR0FBcUIsVUFBckI7QUFDQVIsWUFBQUEsVUFBVSxDQUFDaUIsWUFBWCxHQUEwQk4sSUFBMUI7QUFDSCxXQWRTOztBQWdCVlgsVUFBQUEsVUFBVSxDQUFDUSxPQUFYLEdBQXFCLG1DQUFtQyxhQUFJQSxPQUE1RCxDQWhCVTs7QUFrQmRSLFVBQUFBLFVBQVUsQ0FBQ2tCLFlBQVgsQ0FBd0JYLEdBQXhCLEVBbEJjLHVFQUFsQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFJlc3RhdXJhbnQgPSByZXF1aXJlKCcuLi9tb2RlbHMvcmVzdGF1cmFudCcpXHJcbmNvbnN0IHJlc3RIZWxwZXIgPSByZXF1aXJlKCcuLi9saWIvcmVzdEhlbHBlcicpXHJcbmNvbnN0IHF1ZXJPYmogPSByZXF1aXJlKCcuLi9saWIvcXVlcnlIYW5kbGVyJyk7XHJcbmNvbnN0IHsgcGFnaW5hdGlvbkxpbWl0LCBzZXJCeURpc3RhbmNlIH0gPSByZXF1aXJlKCcuLi9jb25maWcvaW5kZXgnKVxyXG5cclxuLy8gZ2V0IHJlc3R1YXJhbnQgYnkgbGF0IGFuZCBsYW5nXHJcbmV4cG9ydHMuc2VhcmNoID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSBcIkZhaWxlZCB0byBzYXZlIHJlc3R1YXJhbnRcIlxyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHF1ZXJPYmouZmluZEVudHJ5KFJlc3RhdXJhbnQsIHJlcS5ib2R5LCBzZXJCeURpc3RhbmNlLCBwYWdpbmF0aW9uTGltaXQpXHJcbiAgICAgICAgaWYgKE9iamVjdC5lbnRyaWVzKGRhdGEpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5zdGF0dXMgPSAnU3VjY2Vzcyc7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuY29kZSA9IDIwMDtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5tZXNzYWdlID0gJ1N1Y2Nlc3NmdWxseSBmZXRjaGVkIHRoZSByZXN0YXVyYW50IGxpc3QuJztcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5yZXNwb25zZURhdGEgPSBkYXRhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuc3RhdHVzID0gJ1N1Y2Nlc3MnO1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLmNvZGUgPSAyMDQ7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIubWVzc2FnZSA9ICdObyBkYXRhLic7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIucmVzcG9uc2VEYXRhID0gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSAnRmFpbGVkIHRvIHNhdmUgJyArIGVyci5tZXNzYWdlXHJcbiAgICB9XHJcblxyXG4gICAgcmVzdEhlbHBlci5zZW5kUmVzcG9uc2UocmVzKVxyXG59O1xyXG5cclxuZXhwb3J0cy5jcmVhdGUgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHJlc3RIZWxwZXIubWVzc2FnZSA9IFwiRmFpbGVkIHRvIHNhdmUgcmVzdHVhcmFudFwiXHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgYSBvcmRlciB2YXJcclxuICAgICAgICBjb25zdCByZXN0YXVyYW50ID0gbmV3IFJlc3RhdXJhbnQoe1xyXG4gICAgICAgICAgICBuYW1lOiByZXEuYm9keS5uYW1lLFxyXG4gICAgICAgICAgICBjaXR5OiByZXEuYm9keS5jaXR5LFxyXG4gICAgICAgICAgICBhZGRyZXNzOiByZXEuYm9keS5hZGRyZXNzLFxyXG4gICAgICAgICAgICBjdWlzaW5lczogcmVxLmJvZHkuY3Vpc2luZXMsXHJcbiAgICAgICAgICAgIHppcGNvZGU6IHJlcS5ib2R5LnppcGNvZGUsXHJcbiAgICAgICAgICAgIGJ1ZGdldDogcmVxLmJvZHkuYnVkZ2V0LFxyXG4gICAgICAgICAgICByYXRpbmdzOiByZXEuYm9keS5yYXRpbmdzLFxyXG4gICAgICAgICAgICBwaG9uZW51bWJlcjogcmVxLmJvZHkucGhvbmVudW1iZXIsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiByZXEuYm9keS5sb2NhdGlvbixcclxuICAgICAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgbWVudTogcmVxLmJvZHkuaXRlbXNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCBxdWVyT2JqLnNhdmVFbnRyeShyZXN0YXVyYW50KVxyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuc3RhdHVzID0gJ1N1Y2Nlc3MnO1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLmNvZGUgPSAyMDA7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIubWVzc2FnZSA9ICdzdWNjZXNzZnVsbHkuJztcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5yZXNwb25zZURhdGEgPSBkYXRhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSAnRmFpbGVkIHRvIHNhdmUgJyArIGVyci5tZXNzYWdlXHJcbiAgICB9XHJcblxyXG4gICAgcmVzdEhlbHBlci5zZW5kUmVzcG9uc2UocmVzKVxyXG59XHJcbi8vIGdldCByZXN0dWFyYW50IGJ5IGNpdHlcclxuZXhwb3J0cy5yZXNMaXN0ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSBcIkZhaWxlZCB0byBnZXQgcmVzdHVhcmFudCBsaXN0XCJcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCBxdWVyT2JqLmdldElkc0J5Q2l0eShSZXN0YXVyYW50LCByZXEucXVlcnkuY2l0eSwgJ19pZCcpXHJcbiAgICAgICAgaWYgKE9iamVjdC5lbnRyaWVzKGRhdGEpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLnN0YXR1cyA9ICdTdWNjZXNzJztcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5jb2RlID0gMjAwO1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSAnU3VjY2Vzc2Z1bGx5IGZldGNoZWQgdGhlIHJlc3R1YXJhbnQgbGlzdC4nO1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLnJlc3BvbnNlRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5zdGF0dXMgPSAnU3VjY2Vzcyc7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuY29kZSA9IDIwNDtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5tZXNzYWdlID0gJ05vIGRhdGEuJztcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5yZXNwb25zZURhdGEgPSBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJlc3RIZWxwZXIubWVzc2FnZSA9ICdGYWlsZWQgdG8gZ2V0IHJlc3R1YXJhbnQgbGlzdCAnICsgZXJyLm1lc3NhZ2VcclxuICAgIH1cclxuICAgIHJlc3RIZWxwZXIuc2VuZFJlc3BvbnNlKHJlcylcclxufTtcclxuIl19