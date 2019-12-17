/**
 * @file
 * Library file to handle the query related function.
 */

'use strict';

//QueryHandler class
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));var QueryHandler = /*#__PURE__*/function () {function QueryHandler() {(0, _classCallCheck2["default"])(this, QueryHandler);}(0, _createClass2["default"])(QueryHandler, [{ key: "saveEntry",

    /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @name saveEntry
                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @desc to create the order entry in db.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @input DB element to save
                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @output order obj / err obj
                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */value: function saveEntry(
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
    }

    /**
       * @name getOrderList
       * @desc to get the order list based on query params.
       * @input DB element and queries
       * @output order objs / err obj
       */ }, { key: "getOrderList", value: function getOrderList(
    element, querys, paginationLimit) {
      return new Promise(function (resolve, reject) {
        var skipVal = querys.pageNo ? parseInt(querys.pageNo) - 1 : 0;
        var limitVal = paginationLimit ? parseInt(paginationLimit) : 9;
        //query object consturction based on input 
        var queryObj = {};
        if (querys.restaurantids) {
          queryObj.restaurant_id = { $in: querys.restaurantids };
        }

        if (querys.fromdate && querys.todate) {
          queryObj.created_at = { $gte: new Date(querys.fromdate), $lt: new Date(querys.todate) };
        }
        skipVal = limitVal * skipVal;
        limitVal = limitVal;

        // get the entry with specified fields
        element.find({ $and: [queryObj] }).skip(skipVal).limit(limitVal).exec(function (err, data) {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
    }

    /**
       * @name getOrdersAmount
       * @desc to get the total order amount based on query params.
       * @input DB element and queries
       * @output order amount objs / err obj
       */ }, { key: "getOrdersAmount", value: function getOrdersAmount(

    element, querys) {
      return new Promise(function (resolve, reject) {
        //query object consturction based on input 
        var queryObj = {};
        if (querys.restaurantids) {
          queryObj.restaurant_id = { $in: querys.restaurantids };
        }

        if (querys.fromdate && querys.todate) {
          queryObj.created_at = { $gte: new Date(querys.fromdate), $lt: new Date(querys.todate) };
        }

        // get the entry with specified fields
        element.aggregate([{ $match: { $and: [queryObj] } }, { $group: { _id: null, sum: { $sum: "$orderamount" } } }], function (err, data) {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
    }

    /**
       * @name getEntryById
       * @desc to get the order based on id.
       * @input DB element and orderid
       * @output order obj / err obj
       */ }, { key: "getEntryById", value: function getEntryById(

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
    }

    /**
       * @name getEntryFieldsById
       * @desc to get the order based on id..
       * @input DB element,orderid and fields
       * @output order obj / err obj
       */ }, { key: "getEntryFieldsById", value: function getEntryFieldsById(
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
    }

    /**
       * @name updateEntry
       * @desc to update the order based on id.
       * @input DB element,orderid and fields
       * @output order obj / err obj
       */ }, { key: "updateEntry", value: function updateEntry(
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
    } }]);return QueryHandler;}();


var queryObj = new QueryHandler();
module.exports = queryObj;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvbGliL3F1ZXJ5SGFuZGxlci5qcyJdLCJuYW1lcyI6WyJRdWVyeUhhbmRsZXIiLCJlbGVtZW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzYXZlIiwiZXJyIiwiZGF0YSIsInF1ZXJ5cyIsInBhZ2luYXRpb25MaW1pdCIsInNraXBWYWwiLCJwYWdlTm8iLCJwYXJzZUludCIsImxpbWl0VmFsIiwicXVlcnlPYmoiLCJyZXN0YXVyYW50aWRzIiwicmVzdGF1cmFudF9pZCIsIiRpbiIsImZyb21kYXRlIiwidG9kYXRlIiwiY3JlYXRlZF9hdCIsIiRndGUiLCJEYXRlIiwiJGx0IiwiZmluZCIsIiRhbmQiLCJza2lwIiwibGltaXQiLCJleGVjIiwiYWdncmVnYXRlIiwiJG1hdGNoIiwiJGdyb3VwIiwiX2lkIiwic3VtIiwiJHN1bSIsImlkIiwiZmluZEJ5SWQiLCJmaWVsZHMiLCJ1cGRhdGVPbmUiLCJPYmplY3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7QUFFQTttUkFDTUEsWTs7QUFFRjs7Ozs7O0FBTVVDLElBQUFBLE8sRUFBUztBQUNmLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQztBQUNBSCxRQUFBQSxPQUFPLENBQUNJLElBQVIsQ0FBYSxVQUFVQyxHQUFWLEVBQWVDLElBQWYsRUFBcUI7QUFDOUIsY0FBSUQsR0FBSixFQUFTO0FBQ0xGLFlBQUFBLE1BQU0sQ0FBQ0UsR0FBRCxDQUFOO0FBQ0gsV0FGRCxNQUVPO0FBQ0hILFlBQUFBLE9BQU8sQ0FBQ0ksSUFBRCxDQUFQO0FBQ0g7QUFDSixTQU5EO0FBT0gsT0FUTSxDQUFQO0FBVUg7O0FBRUQ7Ozs7OztBQU1hTixJQUFBQSxPLEVBQVNPLE0sRUFBT0MsZSxFQUFpQjtBQUMxQyxhQUFPLElBQUlQLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7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V0FGRCxNQUVPO0FBQ0hILFlBQUFBLE9BQU8sQ0FBQ0ksSUFBRCxDQUFQO0FBQ0g7QUFDSixTQU5EO0FBT0gsT0FUTSxDQUFQO0FBVUgsSzs7O0FBR0wsSUFBTU8sUUFBUSxHQUFHLElBQUlkLFlBQUosRUFBakI7QUFDQXdDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjNCLFFBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIExpYnJhcnkgZmlsZSB0byBoYW5kbGUgdGhlIHF1ZXJ5IHJlbGF0ZWQgZnVuY3Rpb24uXHJcbiAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy9RdWVyeUhhbmRsZXIgY2xhc3NcclxuY2xhc3MgUXVlcnlIYW5kbGVyIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBuYW1lIHNhdmVFbnRyeVxyXG4gICAgICogQGRlc2MgdG8gY3JlYXRlIHRoZSBvcmRlciBlbnRyeSBpbiBkYi5cclxuICAgICAqIEBpbnB1dCBEQiBlbGVtZW50IHRvIHNhdmVcclxuICAgICAqIEBvdXRwdXQgb3JkZXIgb2JqIC8gZXJyIG9ialxyXG4gICAgICovXHJcbiAgICBzYXZlRW50cnkoZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHNhdmUgdGhlIG9yZGVyXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2F2ZShmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBuYW1lIGdldE9yZGVyTGlzdFxyXG4gICAgICogQGRlc2MgdG8gZ2V0IHRoZSBvcmRlciBsaXN0IGJhc2VkIG9uIHF1ZXJ5IHBhcmFtcy5cclxuICAgICAqIEBpbnB1dCBEQiBlbGVtZW50IGFuZCBxdWVyaWVzXHJcbiAgICAgKiBAb3V0cHV0IG9yZGVyIG9ianMgLyBlcnIgb2JqXHJcbiAgICAgKi9cclxuICAgIGdldE9yZGVyTGlzdChlbGVtZW50LCBxdWVyeXMscGFnaW5hdGlvbkxpbWl0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNraXBWYWwgPSBxdWVyeXMucGFnZU5vID8gcGFyc2VJbnQocXVlcnlzLnBhZ2VObykgLSAxIDogMDtcclxuICAgICAgICAgICAgbGV0IGxpbWl0VmFsID0gcGFnaW5hdGlvbkxpbWl0ID8gcGFyc2VJbnQocGFnaW5hdGlvbkxpbWl0KSA6IDk7XHJcbiAgICAgICAgICAgIC8vcXVlcnkgb2JqZWN0IGNvbnN0dXJjdGlvbiBiYXNlZCBvbiBpbnB1dCBcclxuICAgICAgICAgICAgY29uc3QgcXVlcnlPYmogPSB7fVxyXG4gICAgICAgICAgICBpZiAocXVlcnlzLnJlc3RhdXJhbnRpZHMpIHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5T2JqLnJlc3RhdXJhbnRfaWQgPSB7ICRpbjogcXVlcnlzLnJlc3RhdXJhbnRpZHMgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocXVlcnlzLmZyb21kYXRlICYmIHF1ZXJ5cy50b2RhdGUpIHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5T2JqLmNyZWF0ZWRfYXQgPSB7ICRndGU6IG5ldyBEYXRlKHF1ZXJ5cy5mcm9tZGF0ZSksICRsdDogbmV3IERhdGUocXVlcnlzLnRvZGF0ZSkgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNraXBWYWwgPSBsaW1pdFZhbCAqIHNraXBWYWw7XHJcbiAgICAgICAgICAgIGxpbWl0VmFsID0gbGltaXRWYWw7XHJcblxyXG4gICAgICAgICAgICAvLyBnZXQgdGhlIGVudHJ5IHdpdGggc3BlY2lmaWVkIGZpZWxkc1xyXG4gICAgICAgICAgICBlbGVtZW50LmZpbmQoeyAkYW5kOiBbcXVlcnlPYmpdIH0pLnNraXAoc2tpcFZhbCkubGltaXQobGltaXRWYWwpLmV4ZWMoIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBuYW1lIGdldE9yZGVyc0Ftb3VudFxyXG4gICAgICogQGRlc2MgdG8gZ2V0IHRoZSB0b3RhbCBvcmRlciBhbW91bnQgYmFzZWQgb24gcXVlcnkgcGFyYW1zLlxyXG4gICAgICogQGlucHV0IERCIGVsZW1lbnQgYW5kIHF1ZXJpZXNcclxuICAgICAqIEBvdXRwdXQgb3JkZXIgYW1vdW50IG9ianMgLyBlcnIgb2JqXHJcbiAgICAgKi9cclxuXHJcbiAgICBnZXRPcmRlcnNBbW91bnQoZWxlbWVudCwgcXVlcnlzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgLy9xdWVyeSBvYmplY3QgY29uc3R1cmN0aW9uIGJhc2VkIG9uIGlucHV0IFxyXG4gICAgICAgICAgICBjb25zdCBxdWVyeU9iaiA9IHt9XHJcbiAgICAgICAgICAgIGlmIChxdWVyeXMucmVzdGF1cmFudGlkcykge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlPYmoucmVzdGF1cmFudF9pZCA9IHsgJGluOiBxdWVyeXMucmVzdGF1cmFudGlkcyB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChxdWVyeXMuZnJvbWRhdGUgJiYgcXVlcnlzLnRvZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlPYmouY3JlYXRlZF9hdCA9IHsgJGd0ZTogbmV3IERhdGUocXVlcnlzLmZyb21kYXRlKSwgJGx0OiBuZXcgRGF0ZShxdWVyeXMudG9kYXRlKSB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGdldCB0aGUgZW50cnkgd2l0aCBzcGVjaWZpZWQgZmllbGRzXHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWdncmVnYXRlKFt7ICRtYXRjaDogeyAkYW5kOiBbcXVlcnlPYmpdIH0gfSwgeyAkZ3JvdXA6IHsgX2lkOiBudWxsLCBzdW06IHsgJHN1bTogXCIkb3JkZXJhbW91bnRcIiB9IH0gfV0sIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBuYW1lIGdldEVudHJ5QnlJZFxyXG4gICAgICogQGRlc2MgdG8gZ2V0IHRoZSBvcmRlciBiYXNlZCBvbiBpZC5cclxuICAgICAqIEBpbnB1dCBEQiBlbGVtZW50IGFuZCBvcmRlcmlkXHJcbiAgICAgKiBAb3V0cHV0IG9yZGVyIG9iaiAvIGVyciBvYmpcclxuICAgICAqL1xyXG5cclxuICAgIGdldEVudHJ5QnlJZChlbGVtZW50LCBpZCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGdldCB0aGUgZW50cnlcclxuICAgICAgICAgICAgZWxlbWVudC5maW5kQnlJZChpZCwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQG5hbWUgZ2V0RW50cnlGaWVsZHNCeUlkXHJcbiAgICAgKiBAZGVzYyB0byBnZXQgdGhlIG9yZGVyIGJhc2VkIG9uIGlkLi5cclxuICAgICAqIEBpbnB1dCBEQiBlbGVtZW50LG9yZGVyaWQgYW5kIGZpZWxkc1xyXG4gICAgICogQG91dHB1dCBvcmRlciBvYmogLyBlcnIgb2JqXHJcbiAgICAgKi9cclxuICAgIGdldEVudHJ5RmllbGRzQnlJZChlbGVtZW50LCBpZCwgZmllbGRzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBlbnRyeSB3aXRoIHNwZWNpZmllZCBmaWVsZHNcclxuICAgICAgICAgICAgZWxlbWVudC5maW5kQnlJZChpZCwgZmllbGRzLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAbmFtZSB1cGRhdGVFbnRyeVxyXG4gICAgICogQGRlc2MgdG8gdXBkYXRlIHRoZSBvcmRlciBiYXNlZCBvbiBpZC5cclxuICAgICAqIEBpbnB1dCBEQiBlbGVtZW50LG9yZGVyaWQgYW5kIGZpZWxkc1xyXG4gICAgICogQG91dHB1dCBvcmRlciBvYmogLyBlcnIgb2JqXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUVudHJ5KGVsZW1lbnQsIGlkLCBmaWVsZHMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGVudHJ5XHJcbiAgICAgICAgICAgIGVsZW1lbnQudXBkYXRlT25lKHsgJ19pZCc6IE9iamVjdChpZCkgfSwgZmllbGRzLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59XHJcbmNvbnN0IHF1ZXJ5T2JqID0gbmV3IFF1ZXJ5SGFuZGxlcigpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHF1ZXJ5T2JqOyJdfQ==