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
          }_context.next = 12;break;case 8:_context.prev = 8;_context.t0 = _context["catch"](1);

          console.log(_context.t0);
          restHelper.message = 'Failed to save ' + _context.t0.message;case 12:


          restHelper.sendResponse(res);case 13:case "end":return _context.stop();}}}, null, null, [[1, 8]]);};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvc2VydmljZXMvcmVzdGF1cmFudFNlcnZpY2UuanMiXSwibmFtZXMiOlsiUmVzdGF1cmFudCIsInJlcXVpcmUiLCJyZXN0SGVscGVyIiwicXVlck9iaiIsInBhZ2luYXRpb25MaW1pdCIsInNlckJ5RGlzdGFuY2UiLCJleHBvcnRzIiwic2VhcmNoIiwicmVxIiwicmVzIiwibWVzc2FnZSIsImZpbmRFbnRyeSIsImJvZHkiLCJkYXRhIiwiT2JqZWN0IiwiZW50cmllcyIsImxlbmd0aCIsInN0YXR1cyIsImNvZGUiLCJyZXNwb25zZURhdGEiLCJjb25zb2xlIiwibG9nIiwic2VuZFJlc3BvbnNlIiwiY3JlYXRlIiwicmVzdGF1cmFudCIsIm5hbWUiLCJjaXR5IiwiYWRkcmVzcyIsImN1aXNpbmVzIiwiemlwY29kZSIsImJ1ZGdldCIsInJhdGluZ3MiLCJwaG9uZW51bWJlciIsImxvY2F0aW9uIiwiY3JlYXRlZF9hdCIsIkRhdGUiLCJtZW51IiwiaXRlbXMiLCJzYXZlRW50cnkiLCJyZXNMaXN0IiwiZ2V0SWRzQnlDaXR5IiwicXVlcnkiXSwibWFwcGluZ3MiOiJBQUFBLGE7O0FBRUEsSUFBTUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsc0JBQUQsQ0FBMUI7QUFDQSxJQUFNQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxtQkFBRCxDQUExQjtBQUNBLElBQU1FLE9BQU8sR0FBR0YsT0FBTyxDQUFDLHFCQUFELENBQXZCLEM7QUFDMkNBLE9BQU8sQ0FBQyxpQkFBRCxDLENBQTFDRyxlLFlBQUFBLGUsQ0FBaUJDLGEsWUFBQUEsYTs7QUFFekI7QUFDQUMsT0FBTyxDQUFDQyxNQUFSLEdBQWlCLGlCQUFPQyxHQUFQLEVBQVlDLEdBQVo7QUFDYlAsVUFBQUEsVUFBVSxDQUFDUSxPQUFYLEdBQXFCLDJCQUFyQixDQURhOztBQUdRUCxVQUFBQSxPQUFPLENBQUNRLFNBQVIsQ0FBa0JYLFVBQWxCLEVBQThCUSxHQUFHLENBQUNJLElBQWxDLEVBQXdD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QUFYLEdBQXFCLCtCQUFyQixDQURjOztBQUdPUCxVQUFBQSxPQUFPLENBQUNxQyxZQUFSLENBQXFCeEMsVUFBckIsRUFBaUNRLEdBQUcsQ0FBQ2lDLEtBQUosQ0FBVWYsSUFBM0MsRUFBaUQsS0FBakQsQ0FIUCxTQUdOYixJQUhNO0FBSVYsY0FBSUMsTUFBTSxDQUFDQyxPQUFQLENBQWVGLElBQWYsRUFBcUJHLE1BQXJCLEtBQWdDLENBQXBDLEVBQXVDO0FBQ25DZCxZQUFBQSxVQUFVLENBQUNlLE1BQVgsR0FBb0IsU0FBcEI7QUFDQWYsWUFBQUEsVUFBVSxDQUFDZ0IsSUFBWCxHQUFrQixHQUFsQjtBQUNBaEIsWUFBQUEsVUFBVSxDQUFDUSxPQUFYLEdBQXFCLDJDQUFyQjtBQUNBUixZQUFBQSxVQUFVLENBQUNpQixZQUFYLEdBQTBCTixJQUExQjtBQUNILFdBTEQsTUFLTztBQUNIWCxZQUFBQSxVQUFVLENBQUNlLE1BQVgsR0FBb0IsU0FBcEI7QUFDQWYsWUFBQUEsVUFBVSxDQUFDZ0IsSUFBWCxHQUFrQixHQUFsQjtBQUNBaEIsWUFBQUEsVUFBVSxDQUFDUSxPQUFYLEdBQXFCLFVBQXJCO0FBQ0FSLFlBQUFBLFVBQVUsQ0FBQ2lCLFlBQVgsR0FBMEJOLElBQTFCO0FBQ0gsV0FkUzs7QUFnQlZYLFVBQUFBLFVBQVUsQ0FBQ1EsT0FBWCxHQUFxQixtQ0FBbUMsYUFBSUEsT0FBNUQsQ0FoQlU7O0FBa0JkUixVQUFBQSxVQUFVLENBQUNvQixZQUFYLENBQXdCYixHQUF4QixFQWxCYyx1RUFBbEIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBSZXN0YXVyYW50ID0gcmVxdWlyZSgnLi4vbW9kZWxzL3Jlc3RhdXJhbnQnKVxyXG5jb25zdCByZXN0SGVscGVyID0gcmVxdWlyZSgnLi4vbGliL3Jlc3RIZWxwZXInKVxyXG5jb25zdCBxdWVyT2JqID0gcmVxdWlyZSgnLi4vbGliL3F1ZXJ5SGFuZGxlcicpO1xyXG5jb25zdCB7IHBhZ2luYXRpb25MaW1pdCwgc2VyQnlEaXN0YW5jZSB9ID0gcmVxdWlyZSgnLi4vY29uZmlnL2luZGV4JylcclxuXHJcbi8vIGdldCByZXN0dWFyYW50IGJ5IGxhdCBhbmQgbGFuZ1xyXG5leHBvcnRzLnNlYXJjaCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgcmVzdEhlbHBlci5tZXNzYWdlID0gXCJGYWlsZWQgdG8gc2F2ZSByZXN0dWFyYW50XCJcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCBxdWVyT2JqLmZpbmRFbnRyeShSZXN0YXVyYW50LCByZXEuYm9keSwgc2VyQnlEaXN0YW5jZSwgcGFnaW5hdGlvbkxpbWl0KVxyXG4gICAgICAgIGlmIChPYmplY3QuZW50cmllcyhkYXRhKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuc3RhdHVzID0gJ1N1Y2Nlc3MnO1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLmNvZGUgPSAyMDA7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIubWVzc2FnZSA9ICdTdWNjZXNzZnVsbHkgZmV0Y2hlZCB0aGUgcmVzdGF1cmFudCBsaXN0Lic7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIucmVzcG9uc2VEYXRhID0gZGF0YTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLnN0YXR1cyA9ICdTdWNjZXNzJztcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5jb2RlID0gMjA0O1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSAnTm8gZGF0YS4nO1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLnJlc3BvbnNlRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSAnRmFpbGVkIHRvIHNhdmUgJyArIGVyci5tZXNzYWdlXHJcbiAgICB9XHJcblxyXG4gICAgcmVzdEhlbHBlci5zZW5kUmVzcG9uc2UocmVzKVxyXG59O1xyXG5cclxuZXhwb3J0cy5jcmVhdGUgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHJlc3RIZWxwZXIubWVzc2FnZSA9IFwiRmFpbGVkIHRvIHNhdmUgcmVzdHVhcmFudFwiXHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgYSBvcmRlciB2YXJcclxuICAgICAgICBjb25zdCByZXN0YXVyYW50ID0gbmV3IFJlc3RhdXJhbnQoe1xyXG4gICAgICAgICAgICBuYW1lOiByZXEuYm9keS5uYW1lLFxyXG4gICAgICAgICAgICBjaXR5OiByZXEuYm9keS5jaXR5LFxyXG4gICAgICAgICAgICBhZGRyZXNzOiByZXEuYm9keS5hZGRyZXNzLFxyXG4gICAgICAgICAgICBjdWlzaW5lczogcmVxLmJvZHkuY3Vpc2luZXMsXHJcbiAgICAgICAgICAgIHppcGNvZGU6IHJlcS5ib2R5LnppcGNvZGUsXHJcbiAgICAgICAgICAgIGJ1ZGdldDogcmVxLmJvZHkuYnVkZ2V0LFxyXG4gICAgICAgICAgICByYXRpbmdzOiByZXEuYm9keS5yYXRpbmdzLFxyXG4gICAgICAgICAgICBwaG9uZW51bWJlcjogcmVxLmJvZHkucGhvbmVudW1iZXIsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiByZXEuYm9keS5sb2NhdGlvbixcclxuICAgICAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgbWVudTogcmVxLmJvZHkuaXRlbXNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCBxdWVyT2JqLnNhdmVFbnRyeShyZXN0YXVyYW50KVxyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuc3RhdHVzID0gJ1N1Y2Nlc3MnO1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLmNvZGUgPSAyMDA7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIubWVzc2FnZSA9ICdzdWNjZXNzZnVsbHkuJztcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5yZXNwb25zZURhdGEgPSBkYXRhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSAnRmFpbGVkIHRvIHNhdmUgJyArIGVyci5tZXNzYWdlXHJcbiAgICB9XHJcblxyXG4gICAgcmVzdEhlbHBlci5zZW5kUmVzcG9uc2UocmVzKVxyXG59XHJcbi8vIGdldCByZXN0dWFyYW50IGJ5IGNpdHlcclxuZXhwb3J0cy5yZXNMaXN0ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSBcIkZhaWxlZCB0byBnZXQgcmVzdHVhcmFudCBsaXN0XCJcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCBxdWVyT2JqLmdldElkc0J5Q2l0eShSZXN0YXVyYW50LCByZXEucXVlcnkuY2l0eSwgJ19pZCcpXHJcbiAgICAgICAgaWYgKE9iamVjdC5lbnRyaWVzKGRhdGEpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLnN0YXR1cyA9ICdTdWNjZXNzJztcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5jb2RlID0gMjAwO1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLm1lc3NhZ2UgPSAnU3VjY2Vzc2Z1bGx5IGZldGNoZWQgdGhlIHJlc3R1YXJhbnQgbGlzdC4nO1xyXG4gICAgICAgICAgICByZXN0SGVscGVyLnJlc3BvbnNlRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5zdGF0dXMgPSAnU3VjY2Vzcyc7XHJcbiAgICAgICAgICAgIHJlc3RIZWxwZXIuY29kZSA9IDIwNDtcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5tZXNzYWdlID0gJ05vIGRhdGEuJztcclxuICAgICAgICAgICAgcmVzdEhlbHBlci5yZXNwb25zZURhdGEgPSBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJlc3RIZWxwZXIubWVzc2FnZSA9ICdGYWlsZWQgdG8gZ2V0IHJlc3R1YXJhbnQgbGlzdCAnICsgZXJyLm1lc3NhZ2VcclxuICAgIH1cclxuICAgIHJlc3RIZWxwZXIuc2VuZFJlc3BvbnNlKHJlcylcclxufTtcclxuIl19