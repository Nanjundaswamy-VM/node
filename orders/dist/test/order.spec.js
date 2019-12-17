"use strict";var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _dotenv = _interopRequireDefault(require("dotenv"));
var _path = _interopRequireDefault(require("path"));

var _config = _interopRequireDefault(require("../app/config"));


require("../app/config/database");
var http = _interopRequireWildcard(require("http"));

require("../app/models/order");









var _app = _interopRequireDefault(require("../app"));process.env.NODE_ENV = 'test';console.log('***config', _config["default"]);var mongoose = require("mongoose");var Order = mongoose.model("order"); //Require the dev-dependencies
var chai = require('chai');var chaiHttp = require('chai-http');
var should = chai.should();
var expect = chai.expect;

chai.use(chaiHttp);
/*
                      * Test the /GET route
                    */
describe('/GET /order/view/', function () {
  it('it should GET deatils of Order', function (done) {
    chai.request(_app["default"]).
    get('/order/view/5df4b97b4480fd08b800f1c9').
    end(function (err, res) {
      console.log(res);
      /*
                          res.should.have.status(200);
                          res.body.should.be.a('array');
                          res.body.length.should.be.eql(0);
                          */
      done();
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L29yZGVyLnNwZWMuanMiXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiY29uc29sZSIsImxvZyIsImNvbmZpZyIsIm1vbmdvb3NlIiwicmVxdWlyZSIsIk9yZGVyIiwibW9kZWwiLCJjaGFpIiwiY2hhaUh0dHAiLCJzaG91bGQiLCJleHBlY3QiLCJ1c2UiLCJkZXNjcmliZSIsIml0IiwiZG9uZSIsInJlcXVlc3QiLCJhcHAiLCJnZXQiLCJlbmQiLCJlcnIiLCJyZXMiXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FBVUEscURBcEJBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixHQUF1QixNQUF2QixDQUtBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCQyxrQkFBekIsRUFPQSxJQUFJQyxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXRCLENBRUEsSUFBSUMsS0FBSyxHQUFHRixRQUFRLENBQUNHLEtBQVQsQ0FBZSxPQUFmLENBQVosQyxDQUVBO0FBQ0EsSUFBSUMsSUFBSSxHQUFHSCxPQUFPLENBQUMsTUFBRCxDQUFsQixDQUNBLElBQUlJLFFBQVEsR0FBR0osT0FBTyxDQUFDLFdBQUQsQ0FBdEI7QUFJQSxJQUFJSyxNQUFNLEdBQUdGLElBQUksQ0FBQ0UsTUFBTCxFQUFiO0FBQ0EsSUFBTUMsTUFBTSxHQUFHSCxJQUFJLENBQUNHLE1BQXBCOztBQUVBSCxJQUFJLENBQUNJLEdBQUwsQ0FBU0gsUUFBVDtBQUNBOzs7QUFHQ0ksUUFBUSxDQUFDLG1CQUFELEVBQXNCLFlBQU07QUFDakNDLEVBQUFBLEVBQUUsQ0FBQyxnQ0FBRCxFQUFtQyxVQUFDQyxJQUFELEVBQVU7QUFDN0NQLElBQUFBLElBQUksQ0FBQ1EsT0FBTCxDQUFhQyxlQUFiO0FBQ0tDLElBQUFBLEdBREwsQ0FDUyxzQ0FEVDtBQUVLQyxJQUFBQSxHQUZMLENBRVMsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDakJwQixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWW1CLEdBQVo7QUFDQTs7Ozs7QUFLQU4sTUFBQUEsSUFBSTtBQUNMLEtBVkw7QUFXRCxHQVpDLENBQUY7QUFhSCxDQWRRLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJwcm9jZXNzLmVudi5OT0RFX0VOViA9ICd0ZXN0JztcclxuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vYXBwL2NvbmZpZyc7XHJcbmNvbnNvbGUubG9nKCcqKipjb25maWcnLCBjb25maWcpO1xyXG5cclxuaW1wb3J0ICcuLi9hcHAvY29uZmlnL2RhdGFiYXNlJztcclxuaW1wb3J0ICogYXMgaHR0cCBmcm9tICdodHRwJztcclxuXHJcbmltcG9ydCAnLi4vYXBwL21vZGVscy9vcmRlcic7XHJcblxyXG5sZXQgbW9uZ29vc2UgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XHJcblxyXG5sZXQgT3JkZXIgPSBtb25nb29zZS5tb2RlbChcIm9yZGVyXCIpO1xyXG5cclxuLy9SZXF1aXJlIHRoZSBkZXYtZGVwZW5kZW5jaWVzXHJcbmxldCBjaGFpID0gcmVxdWlyZSgnY2hhaScpO1xyXG5sZXQgY2hhaUh0dHAgPSByZXF1aXJlKCdjaGFpLWh0dHAnKTtcclxuXHJcbmltcG9ydCBhcHAgZnJvbSAnLi4vYXBwJztcclxuXHJcbmxldCBzaG91bGQgPSBjaGFpLnNob3VsZCgpO1xyXG5jb25zdCBleHBlY3QgPSBjaGFpLmV4cGVjdDtcclxuXHJcbmNoYWkudXNlKGNoYWlIdHRwKTtcclxuLypcclxuICAqIFRlc3QgdGhlIC9HRVQgcm91dGVcclxuKi9cclxuIGRlc2NyaWJlKCcvR0VUIC9vcmRlci92aWV3LycsICgpID0+IHtcclxuICAgIGl0KCdpdCBzaG91bGQgR0VUIGRlYXRpbHMgb2YgT3JkZXInLCAoZG9uZSkgPT4ge1xyXG4gICAgICBjaGFpLnJlcXVlc3QoYXBwKVxyXG4gICAgICAgICAgLmdldCgnL29yZGVyL3ZpZXcvNWRmNGI5N2I0NDgwZmQwOGI4MDBmMWM5JylcclxuICAgICAgICAgIC5lbmQoKGVyciwgcmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgcmVzLnNob3VsZC5oYXZlLnN0YXR1cygyMDApO1xyXG4gICAgICAgICAgICAgIHJlcy5ib2R5LnNob3VsZC5iZS5hKCdhcnJheScpO1xyXG4gICAgICAgICAgICAgIHJlcy5ib2R5Lmxlbmd0aC5zaG91bGQuYmUuZXFsKDApO1xyXG4gICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuIl19