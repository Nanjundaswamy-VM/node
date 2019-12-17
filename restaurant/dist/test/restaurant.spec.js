"use strict";var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _dotenv = _interopRequireDefault(require("dotenv"));
var _path = _interopRequireDefault(require("path"));

var _config = _interopRequireDefault(require("../app/config"));


require("../app/config/database");
var http = _interopRequireWildcard(require("http"));

require("../app/models/restaurant");









var _app = _interopRequireDefault(require("../app"));process.env.NODE_ENV = 'test';var mongoose = require("mongoose");var Restaurant = mongoose.model("restaurant"); //Require the dev-dependencies
var chai = require('chai');var chaiHttp = require('chai-http');
var should = chai.should();
var expect = chai.expect;

chai.use(chaiHttp);

/*
                    * Test the /POST search restaurants route
                    */
describe('/POST /restaurant/search', function () {
  it('it should get the restaurant list', function (done) {
    var data = {
      "ratings": 4,
      "location": "DELHI",
      "pageNo": 1 };

    chai.request(_app["default"]).
    post('/restaurant/search').
    send(data).
    end(function (err, res) {
      var resLen = Object.entries(res.body.data).length;
      res.should.have.status(200);
      resLen.should.be.above(0);
      res.body.success.should.be.eq('Success');
      done();
    });
  });
});

/*
      * Test the /GET list of restaurant
    */
describe('/GET /restaurant/resList', function () {
  it('it should not get list of restaurant', function (done) {
    chai.request(_app["default"]).
    get('/restaurant/resList?city=test').
    end(function (err, res) {
      res.should.have.status(204);
      done();
    });
  });
});

/*
      * Test the /GET restuarant list route
    */
describe('/GET /restaurant/resList', function () {
  it('it should get list of restaurant', function (done) {
    chai.request(_app["default"]).
    get('/restaurant/resList?city=bangalore').
    end(function (err, res) {
      var resLen = Object.entries(res.body.data).length;
      res.should.have.status(200);
      resLen.should.be.above(0);
      res.body.success.should.be.eq('Success');
      done();
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L3Jlc3RhdXJhbnQuc3BlYy5qcyJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJtb25nb29zZSIsInJlcXVpcmUiLCJSZXN0YXVyYW50IiwibW9kZWwiLCJjaGFpIiwiY2hhaUh0dHAiLCJzaG91bGQiLCJleHBlY3QiLCJ1c2UiLCJkZXNjcmliZSIsIml0IiwiZG9uZSIsImRhdGEiLCJyZXF1ZXN0IiwiYXBwIiwicG9zdCIsInNlbmQiLCJlbmQiLCJlcnIiLCJyZXMiLCJyZXNMZW4iLCJPYmplY3QiLCJlbnRyaWVzIiwiYm9keSIsImxlbmd0aCIsImhhdmUiLCJzdGF0dXMiLCJiZSIsImFib3ZlIiwic3VjY2VzcyIsImVxIiwiZ2V0Il0sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQVVBLHFEQXBCQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVosR0FBdUIsTUFBdkIsQ0FZQSxJQUFJQyxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXRCLENBRUEsSUFBSUMsVUFBVSxHQUFHRixRQUFRLENBQUNHLEtBQVQsQ0FBZSxZQUFmLENBQWpCLEMsQ0FFQTtBQUNBLElBQUlDLElBQUksR0FBR0gsT0FBTyxDQUFDLE1BQUQsQ0FBbEIsQ0FDQSxJQUFJSSxRQUFRLEdBQUdKLE9BQU8sQ0FBQyxXQUFELENBQXRCO0FBSUEsSUFBSUssTUFBTSxHQUFHRixJQUFJLENBQUNFLE1BQUwsRUFBYjtBQUNBLElBQU1DLE1BQU0sR0FBR0gsSUFBSSxDQUFDRyxNQUFwQjs7QUFFQUgsSUFBSSxDQUFDSSxHQUFMLENBQVNILFFBQVQ7O0FBRUE7OztBQUdBSSxRQUFRLENBQUMsMEJBQUQsRUFBNkIsWUFBTTtBQUN6Q0MsRUFBQUEsRUFBRSxDQUFDLG1DQUFELEVBQXNDLFVBQUNDLElBQUQsRUFBVTtBQUNoRCxRQUFJQyxJQUFJLEdBQUc7QUFDVCxpQkFBVyxDQURGO0FBRVQsa0JBQVksT0FGSDtBQUdULGdCQUFVLENBSEQsRUFBWDs7QUFLQVIsSUFBQUEsSUFBSSxDQUFDUyxPQUFMLENBQWFDLGVBQWI7QUFDR0MsSUFBQUEsSUFESCxDQUNRLG9CQURSO0FBRUdDLElBQUFBLElBRkgsQ0FFUUosSUFGUjtBQUdHSyxJQUFBQSxHQUhILENBR08sVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDakIsVUFBSUMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLE9BQVAsQ0FBZUgsR0FBRyxDQUFDSSxJQUFKLENBQVNYLElBQXhCLEVBQThCWSxNQUEzQztBQUNBTCxNQUFBQSxHQUFHLENBQUNiLE1BQUosQ0FBV21CLElBQVgsQ0FBZ0JDLE1BQWhCLENBQXVCLEdBQXZCO0FBQ0FOLE1BQUFBLE1BQU0sQ0FBQ2QsTUFBUCxDQUFjcUIsRUFBZCxDQUFpQkMsS0FBakIsQ0FBdUIsQ0FBdkI7QUFDQVQsTUFBQUEsR0FBRyxDQUFDSSxJQUFKLENBQVNNLE9BQVQsQ0FBaUJ2QixNQUFqQixDQUF3QnFCLEVBQXhCLENBQTJCRyxFQUEzQixDQUE4QixTQUE5QjtBQUNBbkIsTUFBQUEsSUFBSTtBQUNMLEtBVEg7QUFVRCxHQWhCQyxDQUFGO0FBaUJELENBbEJPLENBQVI7O0FBb0JBOzs7QUFHQUYsUUFBUSxDQUFDLDBCQUFELEVBQTZCLFlBQU07QUFDekNDLEVBQUFBLEVBQUUsQ0FBQyxzQ0FBRCxFQUF5QyxVQUFDQyxJQUFELEVBQVU7QUFDbkRQLElBQUFBLElBQUksQ0FBQ1MsT0FBTCxDQUFhQyxlQUFiO0FBQ0dpQixJQUFBQSxHQURILENBQ08sK0JBRFA7QUFFR2QsSUFBQUEsR0FGSCxDQUVPLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ2pCQSxNQUFBQSxHQUFHLENBQUNiLE1BQUosQ0FBV21CLElBQVgsQ0FBZ0JDLE1BQWhCLENBQXVCLEdBQXZCO0FBQ0FmLE1BQUFBLElBQUk7QUFDTCxLQUxIO0FBTUQsR0FQQyxDQUFGO0FBUUQsQ0FUTyxDQUFSOztBQVdBOzs7QUFHQUYsUUFBUSxDQUFDLDBCQUFELEVBQTZCLFlBQU07QUFDekNDLEVBQUFBLEVBQUUsQ0FBQyxrQ0FBRCxFQUFxQyxVQUFDQyxJQUFELEVBQVU7QUFDL0NQLElBQUFBLElBQUksQ0FBQ1MsT0FBTCxDQUFhQyxlQUFiO0FBQ0dpQixJQUFBQSxHQURILENBQ08sb0NBRFA7QUFFR2QsSUFBQUEsR0FGSCxDQUVPLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ2pCLFVBQUlDLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxPQUFQLENBQWVILEdBQUcsQ0FBQ0ksSUFBSixDQUFTWCxJQUF4QixFQUE4QlksTUFBM0M7QUFDQUwsTUFBQUEsR0FBRyxDQUFDYixNQUFKLENBQVdtQixJQUFYLENBQWdCQyxNQUFoQixDQUF1QixHQUF2QjtBQUNBTixNQUFBQSxNQUFNLENBQUNkLE1BQVAsQ0FBY3FCLEVBQWQsQ0FBaUJDLEtBQWpCLENBQXVCLENBQXZCO0FBQ0FULE1BQUFBLEdBQUcsQ0FBQ0ksSUFBSixDQUFTTSxPQUFULENBQWlCdkIsTUFBakIsQ0FBd0JxQixFQUF4QixDQUEyQkcsRUFBM0IsQ0FBOEIsU0FBOUI7QUFDQW5CLE1BQUFBLElBQUk7QUFDTCxLQVJIO0FBU0QsR0FWQyxDQUFGO0FBV0QsQ0FaTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsicHJvY2Vzcy5lbnYuTk9ERV9FTlYgPSAndGVzdCdcclxuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2FwcC9jb25maWcnXHJcbi8vY29uc29sZS5sb2coJyoqKmNvbmZpZycsIGNvbmZpZylcclxuXHJcbmltcG9ydCAnLi4vYXBwL2NvbmZpZy9kYXRhYmFzZSdcclxuaW1wb3J0ICogYXMgaHR0cCBmcm9tICdodHRwJ1xyXG5cclxuaW1wb3J0ICcuLi9hcHAvbW9kZWxzL3Jlc3RhdXJhbnQnXHJcblxyXG5sZXQgbW9uZ29vc2UgPSByZXF1aXJlKFwibW9uZ29vc2VcIilcclxuXHJcbmxldCBSZXN0YXVyYW50ID0gbW9uZ29vc2UubW9kZWwoXCJyZXN0YXVyYW50XCIpXHJcblxyXG4vL1JlcXVpcmUgdGhlIGRldi1kZXBlbmRlbmNpZXNcclxubGV0IGNoYWkgPSByZXF1aXJlKCdjaGFpJylcclxubGV0IGNoYWlIdHRwID0gcmVxdWlyZSgnY2hhaS1odHRwJylcclxuXHJcbmltcG9ydCBhcHAgZnJvbSAnLi4vYXBwJ1xyXG5cclxubGV0IHNob3VsZCA9IGNoYWkuc2hvdWxkKClcclxuY29uc3QgZXhwZWN0ID0gY2hhaS5leHBlY3RcclxuXHJcbmNoYWkudXNlKGNoYWlIdHRwKVxyXG5cclxuLypcclxuKiBUZXN0IHRoZSAvUE9TVCBzZWFyY2ggcmVzdGF1cmFudHMgcm91dGVcclxuKi9cclxuZGVzY3JpYmUoJy9QT1NUIC9yZXN0YXVyYW50L3NlYXJjaCcsICgpID0+IHtcclxuICBpdCgnaXQgc2hvdWxkIGdldCB0aGUgcmVzdGF1cmFudCBsaXN0JywgKGRvbmUpID0+IHtcclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICBcInJhdGluZ3NcIjogNCxcclxuICAgICAgXCJsb2NhdGlvblwiOiBcIkRFTEhJXCIsXHJcbiAgICAgIFwicGFnZU5vXCI6IDFcclxuICAgIH1cclxuICAgIGNoYWkucmVxdWVzdChhcHApXHJcbiAgICAgIC5wb3N0KCcvcmVzdGF1cmFudC9zZWFyY2gnKVxyXG4gICAgICAuc2VuZChkYXRhKVxyXG4gICAgICAuZW5kKChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgIGxldCByZXNMZW4gPSBPYmplY3QuZW50cmllcyhyZXMuYm9keS5kYXRhKS5sZW5ndGhcclxuICAgICAgICByZXMuc2hvdWxkLmhhdmUuc3RhdHVzKDIwMClcclxuICAgICAgICByZXNMZW4uc2hvdWxkLmJlLmFib3ZlKDApXHJcbiAgICAgICAgcmVzLmJvZHkuc3VjY2Vzcy5zaG91bGQuYmUuZXEoJ1N1Y2Nlc3MnKVxyXG4gICAgICAgIGRvbmUoKVxyXG4gICAgICB9KVxyXG4gIH0pXHJcbn0pXHJcblxyXG4vKlxyXG4gICogVGVzdCB0aGUgL0dFVCBsaXN0IG9mIHJlc3RhdXJhbnRcclxuKi9cclxuZGVzY3JpYmUoJy9HRVQgL3Jlc3RhdXJhbnQvcmVzTGlzdCcsICgpID0+IHtcclxuICBpdCgnaXQgc2hvdWxkIG5vdCBnZXQgbGlzdCBvZiByZXN0YXVyYW50JywgKGRvbmUpID0+IHtcclxuICAgIGNoYWkucmVxdWVzdChhcHApXHJcbiAgICAgIC5nZXQoJy9yZXN0YXVyYW50L3Jlc0xpc3Q/Y2l0eT10ZXN0JylcclxuICAgICAgLmVuZCgoZXJyLCByZXMpID0+IHtcclxuICAgICAgICByZXMuc2hvdWxkLmhhdmUuc3RhdHVzKDIwNClcclxuICAgICAgICBkb25lKClcclxuICAgICAgfSlcclxuICB9KVxyXG59KVxyXG5cclxuLypcclxuICAqIFRlc3QgdGhlIC9HRVQgcmVzdHVhcmFudCBsaXN0IHJvdXRlXHJcbiovXHJcbmRlc2NyaWJlKCcvR0VUIC9yZXN0YXVyYW50L3Jlc0xpc3QnLCAoKSA9PiB7XHJcbiAgaXQoJ2l0IHNob3VsZCBnZXQgbGlzdCBvZiByZXN0YXVyYW50JywgKGRvbmUpID0+IHtcclxuICAgIGNoYWkucmVxdWVzdChhcHApXHJcbiAgICAgIC5nZXQoJy9yZXN0YXVyYW50L3Jlc0xpc3Q/Y2l0eT1iYW5nYWxvcmUnKVxyXG4gICAgICAuZW5kKChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgIGxldCByZXNMZW4gPSBPYmplY3QuZW50cmllcyhyZXMuYm9keS5kYXRhKS5sZW5ndGhcclxuICAgICAgICByZXMuc2hvdWxkLmhhdmUuc3RhdHVzKDIwMClcclxuICAgICAgICByZXNMZW4uc2hvdWxkLmJlLmFib3ZlKDApXHJcbiAgICAgICAgcmVzLmJvZHkuc3VjY2Vzcy5zaG91bGQuYmUuZXEoJ1N1Y2Nlc3MnKVxyXG4gICAgICAgIGRvbmUoKVxyXG4gICAgICB9KVxyXG4gIH0pXHJcbn0pIl19