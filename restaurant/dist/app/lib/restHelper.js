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
     *  @input response data
     * @output response with code
     */(0, _createClass2["default"])(RestHelper, [{ key: "sendResponse", value: function sendResponse(
    res) {
      res.status(this.code).json({
        success: this.status,
        statusCode: this.code,
        message: this.message,
        data: this.responseData });

    } }]);return RestHelper;}();


var rest = new RestHelper(400, 'Failure', "Something happened, Failed to get resource.");
module.exports = rest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvbGliL3Jlc3RIZWxwZXIuanMiXSwibmFtZXMiOlsiUmVzdEhlbHBlciIsImNvZGUiLCJzdGF0dXMiLCJtZXNzYWdlIiwicmVzcG9uc2VEYXRhIiwicmVzIiwianNvbiIsInN1Y2Nlc3MiLCJzdGF0dXNDb2RlIiwiZGF0YSIsInJlc3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQSxhOztBQUVNQSxVOztBQUVGOzs7QUFHQSxzQkFBWUMsSUFBWixFQUFrQkMsTUFBbEIsRUFBMEJDLE9BQTFCLEVBQW1DO0FBQy9CLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsRUFBcEI7QUFDSDs7QUFFRDs7Ozs7O0FBTWFDLElBQUFBLEcsRUFBSztBQUNkQSxNQUFBQSxHQUFHLENBQUNILE1BQUosQ0FBVyxLQUFLRCxJQUFoQixFQUFzQkssSUFBdEIsQ0FBMkI7QUFDdkJDLFFBQUFBLE9BQU8sRUFBRSxLQUFLTCxNQURTO0FBRXZCTSxRQUFBQSxVQUFVLEVBQUUsS0FBS1AsSUFGTTtBQUd2QkUsUUFBQUEsT0FBTyxFQUFFLEtBQUtBLE9BSFM7QUFJdkJNLFFBQUFBLElBQUksRUFBRSxLQUFLTCxZQUpZLEVBQTNCOztBQU1ILEs7OztBQUdMLElBQU1NLElBQUksR0FBRyxJQUFJVixVQUFKLENBQWUsR0FBZixFQUFvQixTQUFwQixFQUErQiw2Q0FBL0IsQ0FBYjtBQUNBVyxNQUFNLENBQUNDLE9BQVAsR0FBaUJGLElBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIExpYnJhcnkgZmlsZSB0byBoYW5kbGUgdGhlIHJlc3QgYXBpIHJlbGF0ZWQgZnVuY3Rpb24uXHJcbiAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgUmVzdEhlbHBlciB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzYyB0byBpbml0aWFsaXplIHJlc3QgcmVzcG9uc2UgdmFycy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29kZSwgc3RhdHVzLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAbmFtZSBzZW5kUmVzcG9uc2VcclxuICAgICAqIEBkZXNjIHRvIHNlbmQgb3V0cHV0IG1zZyB0byB1c2VyLlxyXG4gICAgICogIEBpbnB1dCByZXNwb25zZSBkYXRhXHJcbiAgICAgKiBAb3V0cHV0IHJlc3BvbnNlIHdpdGggY29kZVxyXG4gICAgICovXHJcbiAgICBzZW5kUmVzcG9uc2UocmVzKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyh0aGlzLmNvZGUpLmpzb24oe1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0aGlzLnN0YXR1cyxcclxuICAgICAgICAgICAgc3RhdHVzQ29kZTogdGhpcy5jb2RlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGRhdGE6IHRoaXMucmVzcG9uc2VEYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmNvbnN0IHJlc3QgPSBuZXcgUmVzdEhlbHBlcig0MDAsICdGYWlsdXJlJywgXCJTb21ldGhpbmcgaGFwcGVuZWQsIEZhaWxlZCB0byBnZXQgcmVzb3VyY2UuXCIpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHJlc3Q7Il19