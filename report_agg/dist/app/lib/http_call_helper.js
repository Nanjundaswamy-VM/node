'use strict';var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));var
Http_call_helper = /*#__PURE__*/function () {function Http_call_helper() {(0, _classCallCheck2["default"])(this, Http_call_helper);}(0, _createClass2["default"])(Http_call_helper, [{ key: "fetchResult", value: function fetchResult(

    res_pro, options) {
      res_pro(options).
      then(function (body) {
        return body;
      })["catch"](
      function (err) {
        return err;
      });
    } }]);return Http_call_helper;}();



var http_call_helper_obj = new Http_call_helper();
module.exports = http_call_helper_obj;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvbGliL2h0dHBfY2FsbF9oZWxwZXIuanMiXSwibmFtZXMiOlsiSHR0cF9jYWxsX2hlbHBlciIsInJlc19wcm8iLCJvcHRpb25zIiwidGhlbiIsImJvZHkiLCJlcnIiLCJodHRwX2NhbGxfaGVscGVyX29iaiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLGE7QUFDTUEsZ0I7O0FBRU9DLElBQUFBLE8sRUFBUUMsTyxFQUFTO0FBQzFCRCxNQUFBQSxPQUFPLENBQUNDLE9BQUQsQ0FBUDtBQUNDQyxNQUFBQSxJQURELENBQ00sVUFBVUMsSUFBVixFQUFnQjtBQUNsQixlQUFPQSxJQUFQO0FBQ0gsT0FIRDtBQUlPLGdCQUFVQyxHQUFWLEVBQWU7QUFDbEIsZUFBT0EsR0FBUDtBQUNILE9BTkQ7QUFPSCxLOzs7O0FBSUQsSUFBTUMsb0JBQW9CLEdBQUcsSUFBSU4sZ0JBQUosRUFBN0I7QUFDQU8sTUFBTSxDQUFDQyxPQUFQLEdBQWlCRixvQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcbmNsYXNzIEh0dHBfY2FsbF9oZWxwZXIge1xyXG4gICAgXHJcbiBmZXRjaFJlc3VsdChyZXNfcHJvLG9wdGlvbnMpIHtcclxuICAgIHJlc19wcm8ob3B0aW9ucylcclxuICAgIC50aGVuKGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgcmV0dXJuIGJvZHlcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgIHJldHVybiBlcnJcclxuICAgIH0pO1xyXG59XHJcblxyXG59XHJcblxyXG5jb25zdCBodHRwX2NhbGxfaGVscGVyX29iaiA9IG5ldyBIdHRwX2NhbGxfaGVscGVyKCk7XHJcbm1vZHVsZS5leHBvcnRzID0gaHR0cF9jYWxsX2hlbHBlcl9vYmo7Il19