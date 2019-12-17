/**
 * @file
 * Library file to handle the rest api related function.
 */

'use strict';var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));var

RestHelper = /*#__PURE__*/function () {

  /**
                                        * @desc to initialize rest response vars.
                                        */
  function RestHelper(code, status, message) {(0, _classCallCheck2["default"])(this, RestHelper);
    this.code = code;
    this.status = status;
    this.message = message;
    this.responseData = [];
  }

  /**
     * @name sendResponse
     * @desc to send output msg to user.
     * @input response data
     * @output response with code
     */(0, _createClass2["default"])(RestHelper, [{ key: "sendResponse", value: function sendResponse(
    res) {
      //console.log(res);
      res.status(this.code).json({
        success: this.status,
        statusCode: this.code,
        message: this.message,
        data: this.responseData });

    } }]);return RestHelper;}();


var rest = new RestHelper(400, 'Failure', "Something happened, Failed to get resource.");
module.exports = rest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvbGliL3Jlc3RIZWxwZXIuanMiXSwibmFtZXMiOlsiUmVzdEhlbHBlciIsImNvZGUiLCJzdGF0dXMiLCJtZXNzYWdlIiwicmVzcG9uc2VEYXRhIiwicmVzIiwianNvbiIsInN1Y2Nlc3MiLCJzdGF0dXNDb2RlIiwiZGF0YSIsInJlc3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQSxhOztBQUVNQSxVOztBQUVGOzs7QUFHQSxzQkFBWUMsSUFBWixFQUFrQkMsTUFBbEIsRUFBMEJDLE9BQTFCLEVBQW1DO0FBQy9CLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsRUFBcEI7QUFDSDs7QUFFRDs7Ozs7O0FBTWFDLElBQUFBLEcsRUFBSztBQUNkO0FBQ0FBLE1BQUFBLEdBQUcsQ0FBQ0gsTUFBSixDQUFXLEtBQUtELElBQWhCLEVBQXNCSyxJQUF0QixDQUEyQjtBQUN2QkMsUUFBQUEsT0FBTyxFQUFFLEtBQUtMLE1BRFM7QUFFdkJNLFFBQUFBLFVBQVUsRUFBRSxLQUFLUCxJQUZNO0FBR3ZCRSxRQUFBQSxPQUFPLEVBQUUsS0FBS0EsT0FIUztBQUl2Qk0sUUFBQUEsSUFBSSxFQUFFLEtBQUtMLFlBSlksRUFBM0I7O0FBTUgsSzs7O0FBR0wsSUFBTU0sSUFBSSxHQUFHLElBQUlWLFVBQUosQ0FBZSxHQUFmLEVBQW9CLFNBQXBCLEVBQStCLDZDQUEvQixDQUFiO0FBQ0FXLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkYsSUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVcclxuICogTGlicmFyeSBmaWxlIHRvIGhhbmRsZSB0aGUgcmVzdCBhcGkgcmVsYXRlZCBmdW5jdGlvbi5cclxuICovXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBSZXN0SGVscGVyIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjIHRvIGluaXRpYWxpemUgcmVzdCByZXNwb25zZSB2YXJzLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb2RlLCBzdGF0dXMsIG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBuYW1lIHNlbmRSZXNwb25zZVxyXG4gICAgICogQGRlc2MgdG8gc2VuZCBvdXRwdXQgbXNnIHRvIHVzZXIuXHJcbiAgICAgKiBAaW5wdXQgcmVzcG9uc2UgZGF0YVxyXG4gICAgICogQG91dHB1dCByZXNwb25zZSB3aXRoIGNvZGVcclxuICAgICAqL1xyXG4gICAgc2VuZFJlc3BvbnNlKHJlcykge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICByZXMuc3RhdHVzKHRoaXMuY29kZSkuanNvbih7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRoaXMuc3RhdHVzLFxyXG4gICAgICAgICAgICBzdGF0dXNDb2RlOiB0aGlzLmNvZGUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcclxuICAgICAgICAgICAgZGF0YTogdGhpcy5yZXNwb25zZURhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuY29uc3QgcmVzdCA9IG5ldyBSZXN0SGVscGVyKDQwMCwgJ0ZhaWx1cmUnLCBcIlNvbWV0aGluZyBoYXBwZW5lZCwgRmFpbGVkIHRvIGdldCByZXNvdXJjZS5cIik7XHJcbm1vZHVsZS5leHBvcnRzID0gcmVzdDsiXX0=