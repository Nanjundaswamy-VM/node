'use strict';var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));var

Rest_helper = /*#__PURE__*/function () {
  function Rest_helper(code, status, message) {(0, _classCallCheck2["default"])(this, Rest_helper);
    this.code = code;
    this.status = status;
    this.message = message;
    this.response_data = [];
  }(0, _createClass2["default"])(Rest_helper, [{ key: "sendResponse", value: function sendResponse(

    res) {
      //console.log(res);
      res.status(this.code).json({
        success: this.status,
        statusCode: this.code,
        message: this.message,
        data: this.response_data });

    } }]);return Rest_helper;}();


var rest = new Rest_helper(400, 'Failure', "Something happened, Failed to get resource.");
module.exports = rest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvbGliL3Jlc3RfaGVscGVyLmpzIl0sIm5hbWVzIjpbIlJlc3RfaGVscGVyIiwiY29kZSIsInN0YXR1cyIsIm1lc3NhZ2UiLCJyZXNwb25zZV9kYXRhIiwicmVzIiwianNvbiIsInN1Y2Nlc3MiLCJzdGF0dXNDb2RlIiwiZGF0YSIsInJlc3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxhOztBQUVNQSxXO0FBQ0YsdUJBQVlDLElBQVosRUFBaUJDLE1BQWpCLEVBQXdCQyxPQUF4QixFQUFpQztBQUM3QixTQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLEVBQXJCO0FBQ0gsRzs7QUFFWUMsSUFBQUEsRyxFQUFJO0FBQ2I7QUFDQUEsTUFBQUEsR0FBRyxDQUFDSCxNQUFKLENBQVcsS0FBS0QsSUFBaEIsRUFBc0JLLElBQXRCLENBQTJCO0FBQ3ZCQyxRQUFBQSxPQUFPLEVBQUcsS0FBS0wsTUFEUTtBQUV2Qk0sUUFBQUEsVUFBVSxFQUFHLEtBQUtQLElBRks7QUFHdkJFLFFBQUFBLE9BQU8sRUFBRSxLQUFLQSxPQUhTO0FBSXZCTSxRQUFBQSxJQUFJLEVBQUcsS0FBS0wsYUFKVyxFQUEzQjs7QUFNSCxLOzs7QUFHTCxJQUFNTSxJQUFJLEdBQUksSUFBSVYsV0FBSixDQUFnQixHQUFoQixFQUFvQixTQUFwQixFQUE4Qiw2Q0FBOUIsQ0FBZDtBQUNBVyxNQUFNLENBQUNDLE9BQVAsR0FBaUJGLElBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgUmVzdF9oZWxwZXIge1xyXG4gICAgY29uc3RydWN0b3IoY29kZSxzdGF0dXMsbWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgICAgICB0aGlzLnJlc3BvbnNlX2RhdGEgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kUmVzcG9uc2UocmVzKXtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgcmVzLnN0YXR1cyh0aGlzLmNvZGUpLmpzb24oe1xyXG4gICAgICAgICAgICBzdWNjZXNzIDogdGhpcy5zdGF0dXMsXHJcbiAgICAgICAgICAgIHN0YXR1c0NvZGUgOiB0aGlzLmNvZGUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcclxuICAgICAgICAgICAgZGF0YSA6IHRoaXMucmVzcG9uc2VfZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5jb25zdCByZXN0ICA9IG5ldyBSZXN0X2hlbHBlcig0MDAsJ0ZhaWx1cmUnLFwiU29tZXRoaW5nIGhhcHBlbmVkLCBGYWlsZWQgdG8gZ2V0IHJlc291cmNlLlwiKTtcclxubW9kdWxlLmV4cG9ydHMgPSByZXN0OyJdfQ==