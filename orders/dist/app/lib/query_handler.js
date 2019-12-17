'use strict';var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));var
Query_handler = /*#__PURE__*/function () {function Query_handler() {(0, _classCallCheck2["default"])(this, Query_handler);}(0, _createClass2["default"])(Query_handler, [{ key: "save_entry", value: function save_entry(

    element) {
      return new Promise(function (resolve, reject) {
        // save the order
        element.save(function (err, data) {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
    } }, { key: "get_order_list", value: function get_order_list(

    element, querys) {
      return new Promise(function (resolve, reject) {
        var queryObj = {};
        if (querys.restaurantids) {
          queryObj.restaurant_id = { $in: querys.restaurantids };
        }

        if (querys.fromdate && querys.todate) {
          queryObj.created_at = { $gte: new Date(querys.fromdate), $lt: new Date(querys.todate) };
        }

        // get the entry with specified fields
        element.find({ $and: [queryObj] }, function (err, data) {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
    } }, { key: "get_orders_amount", value: function get_orders_amount(

    element, querys) {
      return new Promise(function (resolve, reject) {
        var queryObj = {};
        if (querys.restaurantids) {
          queryObj.restaurant_id = { $in: querys.restaurantids };
        }

        if (querys.fromdate && querys.todate) {
          queryObj.created_at = { $gte: new Date(querys.fromdate), $lt: new Date(querys.todate) };
        }
        console.log(querys);
        // get the entry with specified fields
        element.aggregate([{ $match: { $and: [queryObj] } }, { $group: { _id: null, sum: { $sum: "$orderamount" } } }], function (err, data) {
          if (err) {
            //console.log(err)
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
    } }, { key: "get_entry_by_id", value: function get_entry_by_id(

    element, id) {
      return new Promise(function (resolve, reject) {
        // get the entry
        element.findById(id, function (err, data) {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
    } }, { key: "get_entry_fields_by_id", value: function get_entry_fields_by_id(

    element, id, fields) {
      return new Promise(function (resolve, reject) {
        // get the entry with specified fields
        element.findById(id, fields, function (err, data) {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
    } }, { key: "update_entry", value: function update_entry(

    element, id, fields) {
      return new Promise(function (resolve, reject) {
        // update the entry
        element.updateOne({ '_id': Object(id) }, fields, function (err, data) {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
    } }]);return Query_handler;}();


var query_obj = new Query_handler();
module.exports = query_obj;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvbGliL3F1ZXJ5X2hhbmRsZXIuanMiXSwibmFtZXMiOlsiUXVlcnlfaGFuZGxlciIsImVsZW1lbnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNhdmUiLCJlcnIiLCJkYXRhIiwicXVlcnlzIiwicXVlcnlPYmoiLCJyZXN0YXVyYW50aWRzIiwicmVzdGF1cmFudF9pZCIsIiRpbiIsImZyb21kYXRlIiwidG9kYXRlIiwiY3JlYXRlZF9hdCIsIiRndGUiLCJEYXRlIiwiJGx0IiwiZmluZCIsIiRhbmQiLCJjb25zb2xlIiwibG9nIiwiYWdncmVnYXRlIiwiJG1hdGNoIiwiJGdyb3VwIiwiX2lkIiwic3VtIiwiJHN1bSIsImlkIiwiZmluZEJ5SWQiLCJmaWVsZHMiLCJ1cGRhdGVPbmUiLCJPYmplY3QiLCJxdWVyeV9vYmoiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxhO0FBQ01BLGE7O0FBRU1DLElBQUFBLE8sRUFBUztBQUNqQixhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEM7QUFDQUgsUUFBQUEsT0FBTyxDQUFDSSxJQUFSLENBQWEsVUFBU0MsR0FBVCxFQUFhQyxJQUFiLEVBQW1CO0FBQzVCLGNBQUlELEdBQUosRUFBUztBQUNMRixZQUFBQSxNQUFNLENBQUNFLEdBQUQsQ0FBTjtBQUNILFdBRkQsTUFFTztBQUNISCxZQUFBQSxPQUFPLENBQUNJLElBQUQsQ0FBUDtBQUNIO0FBQ0osU0FORDtBQU9ILE9BVE0sQ0FBUDtBQVVILEs7O0FBRWNOLElBQUFBLE8sRUFBUU8sTSxFQUFPO0FBQzFCLGFBQU8sSUFBSU4sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyxZQUFNSyxRQUFRLEdBQUcsRUFBakI7QUFDQSxZQUFHRCxNQUFNLENBQUNFLGFBQVYsRUFBd0I7QUFDcEJELFVBQUFBLFFBQVEsQ0FBQ0UsYUFBVCxH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LFFBQUFBLE9BQU8sQ0FBQzZCLFFBQVIsQ0FBaUJELEVBQWpCLEVBQXFCRSxNQUFyQixFQUE0QixVQUFTekIsR0FBVCxFQUFjQyxJQUFkLEVBQW9CO0FBQzVDLGNBQUlELEdBQUosRUFBUztBQUNMRixZQUFBQSxNQUFNLENBQUNFLEdBQUQsQ0FBTjtBQUNILFdBRkQsTUFFSztBQUNESCxZQUFBQSxPQUFPLENBQUNJLElBQUQsQ0FBUDtBQUNIO0FBQ0osU0FORDtBQU9ILE9BVE0sQ0FBUDtBQVVILEs7O0FBRWFOLElBQUFBLE8sRUFBUTRCLEUsRUFBR0UsTSxFQUFRO0FBQzdCLGFBQU8sSUFBSTdCLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEM7QUFDQUgsUUFBQUEsT0FBTyxDQUFDK0IsU0FBUixDQUFrQixFQUFFLE9BQU9DLE1BQU0sQ0FBQ0osRUFBRCxDQUFmLEVBQWxCLEVBQXlDRSxNQUF6QyxFQUFpRCxVQUFTekIsR0FBVCxFQUFjQyxJQUFkLEVBQW9CO0FBQ2pFLGNBQUlELEdBQUosRUFBUztBQUNMRixZQUFBQSxNQUFNLENBQUNFLEdBQUQsQ0FBTjtBQUNILFdBRkQsTUFFSztBQUNESCxZQUFBQSxPQUFPLENBQUNJLElBQUQsQ0FBUDtBQUNIO0FBQ0osU0FORDtBQU9ILE9BVE0sQ0FBUDtBQVVILEs7OztBQUdELElBQU0yQixTQUFTLEdBQUcsSUFBSWxDLGFBQUosRUFBbEI7QUFDQW1DLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkYsU0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcbmNsYXNzIFF1ZXJ5X2hhbmRsZXIge1xyXG4gICAgXHJcbiBzYXZlX2VudHJ5KGVsZW1lbnQpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgLy8gc2F2ZSB0aGUgb3JkZXJcclxuICAgICAgICBlbGVtZW50LnNhdmUoZnVuY3Rpb24oZXJyLGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmdldF9vcmRlcl9saXN0KGVsZW1lbnQscXVlcnlzKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcXVlcnlPYmogPSB7fVxyXG4gICAgICAgIGlmKHF1ZXJ5cy5yZXN0YXVyYW50aWRzKXtcclxuICAgICAgICAgICAgcXVlcnlPYmoucmVzdGF1cmFudF9pZCA9IHsgJGluIDogcXVlcnlzLnJlc3RhdXJhbnRpZHN9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihxdWVyeXMuZnJvbWRhdGUgJiYgcXVlcnlzLnRvZGF0ZSl7XHJcbiAgICAgICAgICAgIHF1ZXJ5T2JqLmNyZWF0ZWRfYXQgPSB7JGd0ZTogIG5ldyBEYXRlKHF1ZXJ5cy5mcm9tZGF0ZSksICRsdDogIG5ldyBEYXRlKHF1ZXJ5cy50b2RhdGUpfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBnZXQgdGhlIGVudHJ5IHdpdGggc3BlY2lmaWVkIGZpZWxkc1xyXG4gICAgICAgIGVsZW1lbnQuZmluZCh7ICRhbmQgOiBbcXVlcnlPYmpdfSxmdW5jdGlvbihlcnIsIGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxufVxyXG5cclxuZ2V0X29yZGVyc19hbW91bnQoZWxlbWVudCxxdWVyeXMpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCBxdWVyeU9iaiA9IHt9XHJcbiAgICAgICAgaWYocXVlcnlzLnJlc3RhdXJhbnRpZHMpe1xyXG4gICAgICAgICAgICBxdWVyeU9iai5yZXN0YXVyYW50X2lkID0geyAkaW4gOiBxdWVyeXMucmVzdGF1cmFudGlkc31cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHF1ZXJ5cy5mcm9tZGF0ZSAmJiBxdWVyeXMudG9kYXRlKXtcclxuICAgICAgICAgICAgcXVlcnlPYmouY3JlYXRlZF9hdCA9IHskZ3RlOiAgbmV3IERhdGUocXVlcnlzLmZyb21kYXRlKSwgJGx0OiAgbmV3IERhdGUocXVlcnlzLnRvZGF0ZSl9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5cyk7XHJcbiAgICAgICAgLy8gZ2V0IHRoZSBlbnRyeSB3aXRoIHNwZWNpZmllZCBmaWVsZHNcclxuICAgICAgICBlbGVtZW50LmFnZ3JlZ2F0ZShbeyRtYXRjaDp7ICRhbmQgOiBbcXVlcnlPYmpdfX0seyAkZ3JvdXA6IHtfaWQgOiBudWxsLCBzdW0gOiB7ICRzdW06IFwiJG9yZGVyYW1vdW50XCIgfSB9IH1dLGZ1bmN0aW9uKGVyciwgZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbn1cclxuXHJcbiBnZXRfZW50cnlfYnlfaWQoZWxlbWVudCxpZCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyBnZXQgdGhlIGVudHJ5XHJcbiAgICAgICAgZWxlbWVudC5maW5kQnlJZChpZCwgZnVuY3Rpb24oZXJyLCBkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbn1cclxuXHJcbiBnZXRfZW50cnlfZmllbGRzX2J5X2lkKGVsZW1lbnQsaWQsZmllbGRzKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIC8vIGdldCB0aGUgZW50cnkgd2l0aCBzcGVjaWZpZWQgZmllbGRzXHJcbiAgICAgICAgZWxlbWVudC5maW5kQnlJZChpZCwgZmllbGRzLGZ1bmN0aW9uKGVyciwgZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG59XHJcblxyXG4gdXBkYXRlX2VudHJ5KGVsZW1lbnQsaWQsZmllbGRzKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgZW50cnlcclxuICAgICAgICBlbGVtZW50LnVwZGF0ZU9uZSh7ICdfaWQnOiBPYmplY3QoaWQpIH0sIGZpZWxkcywgZnVuY3Rpb24oZXJyLCBkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbn1cclxuXHJcbn1cclxuY29uc3QgcXVlcnlfb2JqID0gbmV3IFF1ZXJ5X2hhbmRsZXIoKTtcclxubW9kdWxlLmV4cG9ydHMgPSBxdWVyeV9vYmo7Il19