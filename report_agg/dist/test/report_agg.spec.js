"use strict";var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _dotenv = _interopRequireDefault(require("dotenv"));
var _path = _interopRequireDefault(require("path"));

var _config = _interopRequireDefault(require("../app/config"));


var http = _interopRequireWildcard(require("http"));





var _app = _interopRequireDefault(require("../app"));process.env.NODE_ENV = 'test'; //Require the dev-dependencies
var chai = require('chai');var chaiHttp = require('chai-http');
var should = chai.should();
var expect = chai.expect;

chai.use(chaiHttp);

/*
                      * Test the /GET list of order
                    */
describe('/GET /report/ordersList', function () {
  it('it should not get list of orders on given dates', function (done) {
    chai.request(_app["default"]).
    get('/report/ordersList?city=kolkata&fromdate=2019-12-15&todate=2019-12-16&pageNo=1').
    end(function (err, res) {
      res.should.have.status(204);
      done();
    });
  });
});

/*
      * Test the /GET list of order
    */
describe('/GET /report/ordersList', function () {
  it('it should not list of orders on given dates', function (done) {
    chai.request(_app["default"]).
    get('/report/ordersList?city=bangalore&fromdate=2019-12-15&todate=2019-12-16&pageNo=1').
    end(function (err, res) {
      var resLen = Object.entries(res.body.data).length;
      res.should.have.status(200);
      resLen.should.be.above(0);
      res.body.success.should.be.eq('Success');
      done();
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L3JlcG9ydF9hZ2cuc3BlYy5qcyJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJjaGFpIiwicmVxdWlyZSIsImNoYWlIdHRwIiwic2hvdWxkIiwiZXhwZWN0IiwidXNlIiwiZGVzY3JpYmUiLCJpdCIsImRvbmUiLCJyZXF1ZXN0IiwiYXBwIiwiZ2V0IiwiZW5kIiwiZXJyIiwicmVzIiwiaGF2ZSIsInN0YXR1cyIsInJlc0xlbiIsIk9iamVjdCIsImVudHJpZXMiLCJib2R5IiwiZGF0YSIsImxlbmd0aCIsImJlIiwiYWJvdmUiLCJzdWNjZXNzIiwiZXEiXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7Ozs7O0FBTUEscURBYkFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEdBQXVCLE1BQXZCLEMsQ0FTQTtBQUNBLElBQUlDLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBbEIsQ0FDQSxJQUFJQyxRQUFRLEdBQUdELE9BQU8sQ0FBQyxXQUFELENBQXRCO0FBSUEsSUFBSUUsTUFBTSxHQUFHSCxJQUFJLENBQUNHLE1BQUwsRUFBYjtBQUNBLElBQU1DLE1BQU0sR0FBR0osSUFBSSxDQUFDSSxNQUFwQjs7QUFFQUosSUFBSSxDQUFDSyxHQUFMLENBQVNILFFBQVQ7O0FBRUE7OztBQUdBSSxRQUFRLENBQUMseUJBQUQsRUFBNEIsWUFBTTtBQUN4Q0MsRUFBQUEsRUFBRSxDQUFDLGlEQUFELEVBQW9ELFVBQUNDLElBQUQsRUFBVTtBQUM5RFIsSUFBQUEsSUFBSSxDQUFDUyxPQUFMLENBQWFDLGVBQWI7QUFDR0MsSUFBQUEsR0FESCxDQUNPLGdGQURQO0FBRUdDLElBQUFBLEdBRkgsQ0FFTyxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUNqQkEsTUFBQUEsR0FBRyxDQUFDWCxNQUFKLENBQVdZLElBQVgsQ0FBZ0JDLE1BQWhCLENBQXVCLEdBQXZCO0FBQ0FSLE1BQUFBLElBQUk7QUFDTCxLQUxIO0FBTUQsR0FQQyxDQUFGO0FBUUQsQ0FUTyxDQUFSOztBQVdBOzs7QUFHQUYsUUFBUSxDQUFDLHlCQUFELEVBQTRCLFlBQU07QUFDeENDLEVBQUFBLEVBQUUsQ0FBQyw2Q0FBRCxFQUFnRCxVQUFDQyxJQUFELEVBQVU7QUFDMURSLElBQUFBLElBQUksQ0FBQ1MsT0FBTCxDQUFhQyxlQUFiO0FBQ0dDLElBQUFBLEdBREgsQ0FDTyxrRkFEUDtBQUVHQyxJQUFBQSxHQUZILENBRU8sVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDakIsVUFBSUcsTUFBTSxHQUFHQyxNQUFNLENBQUNDLE9BQVAsQ0FBZUwsR0FBRyxDQUFDTSxJQUFKLENBQVNDLElBQXhCLEVBQThCQyxNQUEzQztBQUNBUixNQUFBQSxHQUFHLENBQUNYLE1BQUosQ0FBV1ksSUFBWCxDQUFnQkMsTUFBaEIsQ0FBdUIsR0FBdkI7QUFDQUMsTUFBQUEsTUFBTSxDQUFDZCxNQUFQLENBQWNvQixFQUFkLENBQWlCQyxLQUFqQixDQUF1QixDQUF2QjtBQUNBVixNQUFBQSxHQUFHLENBQUNNLElBQUosQ0FBU0ssT0FBVCxDQUFpQnRCLE1BQWpCLENBQXdCb0IsRUFBeEIsQ0FBMkJHLEVBQTNCLENBQThCLFNBQTlCO0FBQ0FsQixNQUFBQSxJQUFJO0FBQ0wsS0FSSDtBQVNELEdBVkMsQ0FBRjtBQVdELENBWk8sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbInByb2Nlc3MuZW52Lk5PREVfRU5WID0gJ3Rlc3QnXHJcbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52J1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9hcHAvY29uZmlnJ1xyXG4vL2NvbnNvbGUubG9nKCcqKipjb25maWcnLCBjb25maWcpXHJcblxyXG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnXHJcblxyXG4vL1JlcXVpcmUgdGhlIGRldi1kZXBlbmRlbmNpZXNcclxubGV0IGNoYWkgPSByZXF1aXJlKCdjaGFpJylcclxubGV0IGNoYWlIdHRwID0gcmVxdWlyZSgnY2hhaS1odHRwJylcclxuXHJcbmltcG9ydCBhcHAgZnJvbSAnLi4vYXBwJ1xyXG5cclxubGV0IHNob3VsZCA9IGNoYWkuc2hvdWxkKClcclxuY29uc3QgZXhwZWN0ID0gY2hhaS5leHBlY3RcclxuXHJcbmNoYWkudXNlKGNoYWlIdHRwKVxyXG5cclxuLypcclxuICAqIFRlc3QgdGhlIC9HRVQgbGlzdCBvZiBvcmRlclxyXG4qL1xyXG5kZXNjcmliZSgnL0dFVCAvcmVwb3J0L29yZGVyc0xpc3QnLCAoKSA9PiB7XHJcbiAgaXQoJ2l0IHNob3VsZCBub3QgZ2V0IGxpc3Qgb2Ygb3JkZXJzIG9uIGdpdmVuIGRhdGVzJywgKGRvbmUpID0+IHtcclxuICAgIGNoYWkucmVxdWVzdChhcHApXHJcbiAgICAgIC5nZXQoJy9yZXBvcnQvb3JkZXJzTGlzdD9jaXR5PWtvbGthdGEmZnJvbWRhdGU9MjAxOS0xMi0xNSZ0b2RhdGU9MjAxOS0xMi0xNiZwYWdlTm89MScpXHJcbiAgICAgIC5lbmQoKGVyciwgcmVzKSA9PiB7XHJcbiAgICAgICAgcmVzLnNob3VsZC5oYXZlLnN0YXR1cygyMDQpXHJcbiAgICAgICAgZG9uZSgpXHJcbiAgICAgIH0pXHJcbiAgfSlcclxufSlcclxuXHJcbi8qXHJcbiAgKiBUZXN0IHRoZSAvR0VUIGxpc3Qgb2Ygb3JkZXJcclxuKi9cclxuZGVzY3JpYmUoJy9HRVQgL3JlcG9ydC9vcmRlcnNMaXN0JywgKCkgPT4ge1xyXG4gIGl0KCdpdCBzaG91bGQgbm90IGxpc3Qgb2Ygb3JkZXJzIG9uIGdpdmVuIGRhdGVzJywgKGRvbmUpID0+IHtcclxuICAgIGNoYWkucmVxdWVzdChhcHApXHJcbiAgICAgIC5nZXQoJy9yZXBvcnQvb3JkZXJzTGlzdD9jaXR5PWJhbmdhbG9yZSZmcm9tZGF0ZT0yMDE5LTEyLTE1JnRvZGF0ZT0yMDE5LTEyLTE2JnBhZ2VObz0xJylcclxuICAgICAgLmVuZCgoZXJyLCByZXMpID0+IHtcclxuICAgICAgICBsZXQgcmVzTGVuID0gT2JqZWN0LmVudHJpZXMocmVzLmJvZHkuZGF0YSkubGVuZ3RoXHJcbiAgICAgICAgcmVzLnNob3VsZC5oYXZlLnN0YXR1cygyMDApXHJcbiAgICAgICAgcmVzTGVuLnNob3VsZC5iZS5hYm92ZSgwKVxyXG4gICAgICAgIHJlcy5ib2R5LnN1Y2Nlc3Muc2hvdWxkLmJlLmVxKCdTdWNjZXNzJylcclxuICAgICAgICBkb25lKClcclxuICAgICAgfSlcclxuICB9KVxyXG59KSJdfQ==