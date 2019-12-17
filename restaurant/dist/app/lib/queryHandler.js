/**
 * @file
 * Library file to handle the query related function.
 */

'use strict';var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));var
QueryHandler = /*#__PURE__*/function () {function QueryHandler() {(0, _classCallCheck2["default"])(this, QueryHandler);}(0, _createClass2["default"])(QueryHandler, [{ key: "saveEntry",
    /**
                                                                                                                                                                                          * @name saveEntry
                                                                                                                                                                                          * @desc to create the resturant entry in db.
                                                                                                                                                                                          * @input DB element to save
                                                                                                                                                                                          * @output resturant obj / err obj
                                                                                                                                                                                          */value: function saveEntry(
    element) {
      return new Promise(function (resolve, reject) {
        // save the resturant
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
          * @name getEntryById
          * @desc to get the restaurant based on id.
          * @input DB element and restaurantid
          * @output restaurant obj / err obj
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
       * @name getIdsByCity
       * @desc to get the restaurantids based city name
       * @input DB element and city
       * @output restaurant obj / err obj
       */ }, { key: "getIdsByCity", value: function getIdsByCity(

    element, value, fields) {
      return new Promise(function (resolve, reject) {
        // get the entry with specified fields
        element.find({ city: new RegExp('^' + value + '$', 'i') }, fields, function (err, data) {
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
           * @desc to update the restaurant based on id.
           * @input DB element,restaurantid and fields
           * @output restaurant obj / err obj
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
    }

    /**
           * @name findEntry
           * @desc to search the restaurant based on input params.
           * @input DB element,serByDistance and fields
           * @output restaurant obj / err obj
           */ }, { key: "findEntry", value: function findEntry(
    element, reqData, serByDistance, paginationLimit) {
      return new Promise(function (resolve, reject) {
        var queryObj = {};
        var skipVal = reqData.pageNo ? parseInt(reqData.pageNo) - 1 : 0;
        var limitVal = paginationLimit ? parseInt(paginationLimit) : 9;
        if (reqData.cuisine) {
          var cus = new RegExp('^' + reqData.cuisine + '$', 'i');
          queryObj.cuisines = { $regex: cus };
        }

        if (reqData.name) {
          var name = new RegExp('^' + reqData.name + '$', 'i');
          queryObj.name = { $regex: name };
        }
        if (reqData.ratings) {
          queryObj.ratings = { $gte: reqData.ratings };
        }

        if (reqData.budget) {
          queryObj.budget = { $lte: reqData.budget };
        }

        if (reqData.location) {
          var location = new RegExp('^' + reqData.location + '$', 'i');
          queryObj.city = { $regex: location };
        }
        if (reqData.menu) {
          var menu = new RegExp('^' + reqData.menu + '$', 'i');
          queryObj.menu = { $elemMatch: { itemname: { $regex: menu } } };
        }
        if (reqData.distance) {
          var _long = reqData.distance[0];
          var latt = reqData.distance[1];
          queryObj.location = {
            $near: {
              $maxDistance: serByDistance,
              $geometry: {
                type: "Point",
                coordinates: [_long, latt] } } };



        }
        skipVal = limitVal * skipVal;
        limitVal = limitVal;
        element.find({ $and: [queryObj] }).skip(skipVal).limit(limitVal).exec(function (err, docs) {
          if (err) {
            reject(err);
          } else {
            resolve(docs);
          }
        });

      });
    } }]);return QueryHandler;}();

var queryObj = new QueryHandler();
module.exports = queryObj;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvbGliL3F1ZXJ5SGFuZGxlci5qcyJdLCJuYW1lcyI6WyJRdWVyeUhhbmRsZXIiLCJlbGVtZW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzYXZlIiwiZXJyIiwiZGF0YSIsImlkIiwiZmluZEJ5SWQiLCJ2YWx1ZSIsImZpZWxkcyIsImZpbmQiLCJjaXR5IiwiUmVnRXhwIiwidXBkYXRlT25lIiwiT2JqZWN0IiwicmVxRGF0YSIsInNlckJ5RGlzdGFuY2UiLCJwYWdpbmF0aW9uTGltaXQiLCJxdWVyeU9iaiIsInNraXBWYWwiLCJwYWdlTm8iLCJwYXJzZUludCIsImxpbWl0VmFsIiwiY3Vpc2luZSIsImN1cyIsImN1aXNpbmVzIiwiJHJlZ2V4IiwibmFtZSIsInJhdGluZ3MiLCIkZ3RlIiwiYnVkZ2V0IiwiJGx0ZSIsImxvY2F0aW9uIiwibWVudSIsIiRlbGVtTWF0Y2giLCJpdGVtbmFtZSIsImRpc3RhbmNlIiwibG9uZyIsImxhdHQiLCIkbmVhciIsIiRtYXhEaXN0YW5jZSIsIiRnZW9tZXRyeSIsInR5cGUiLCJjb29yZGluYXRlcyIsIiRhbmQiLCJza2lwIiwibGltaXQiLCJleGVjIiwiZG9jcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBLGE7QUFDTUEsWTtBQUNGOzs7Ozs7QUFNVUMsSUFBQUEsTyxFQUFTO0FBQ2YsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDO0FBQ0FILFFBQUFBLE9BQU8sQ0FBQ0ksSUFBUixDQUFhLFVBQVVDLEdBQVYsRUFBZUMsSUFBZixFQUFxQjtBQUM5QixjQUFJRCxHQUFKLEVBQVM7QUFDTEYsWUFBQUEsTUFBTSxDQUFDRSxHQUFELENBQU47QUFDSCxXQUZELE1BRU87QUFDSEgsWUFBQUEsT0FBTyxDQUFDSSxJQUFELENBQVA7QUFDSDtBQUNKLFNBTkQ7QUFPSCxPQVRNLENBQVA7QUFVSDs7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LE9BREM7QUFFUEMsZ0JBQUFBLFdBQVcsRUFBRSxDQUFDTixLQUFELEVBQU9DLElBQVAsQ0FGTixFQUZSLEVBRFMsRUFBcEI7Ozs7QUFTSDtBQUNEbkIsUUFBQUEsT0FBTyxHQUFHRyxRQUFRLEdBQUdILE9BQXJCO0FBQ0FHLFFBQUFBLFFBQVEsR0FBR0EsUUFBWDtBQUNBdkIsUUFBQUEsT0FBTyxDQUFDVyxJQUFSLENBQWEsRUFBRWtDLElBQUksRUFBRSxDQUFDMUIsUUFBRCxDQUFSLEVBQWIsRUFBbUMyQixJQUFuQyxDQUF3QzFCLE9BQXhDLEVBQWlEMkIsS0FBakQsQ0FBdUR4QixRQUF2RCxFQUFpRXlCLElBQWpFLENBQXNFLFVBQVUzQyxHQUFWLEVBQWU0QyxJQUFmLEVBQXFCO0FBQ3ZGLGNBQUk1QyxHQUFKLEVBQVM7QUFDTEYsWUFBQUEsTUFBTSxDQUFDRSxHQUFELENBQU47QUFDSCxXQUZELE1BRU87QUFDSEgsWUFBQUEsT0FBTyxDQUFDK0MsSUFBRCxDQUFQO0FBQ0g7QUFDSixTQU5EOztBQVFILE9BcERNLENBQVA7QUFxREgsSzs7QUFFTCxJQUFNOUIsUUFBUSxHQUFHLElBQUlwQixZQUFKLEVBQWpCO0FBQ0FtRCxNQUFNLENBQUNDLE9BQVAsR0FBaUJoQyxRQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBMaWJyYXJ5IGZpbGUgdG8gaGFuZGxlIHRoZSBxdWVyeSByZWxhdGVkIGZ1bmN0aW9uLlxyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuY2xhc3MgUXVlcnlIYW5kbGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQG5hbWUgc2F2ZUVudHJ5XHJcbiAgICAgKiBAZGVzYyB0byBjcmVhdGUgdGhlIHJlc3R1cmFudCBlbnRyeSBpbiBkYi5cclxuICAgICAqIEBpbnB1dCBEQiBlbGVtZW50IHRvIHNhdmVcclxuICAgICAqIEBvdXRwdXQgcmVzdHVyYW50IG9iaiAvIGVyciBvYmpcclxuICAgICAqL1xyXG4gICAgc2F2ZUVudHJ5KGVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBzYXZlIHRoZSByZXN0dXJhbnRcclxuICAgICAgICAgICAgZWxlbWVudC5zYXZlKGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICAgICogQG5hbWUgZ2V0RW50cnlCeUlkXHJcbiAgICAgICAgKiBAZGVzYyB0byBnZXQgdGhlIHJlc3RhdXJhbnQgYmFzZWQgb24gaWQuXHJcbiAgICAgICAgKiBAaW5wdXQgREIgZWxlbWVudCBhbmQgcmVzdGF1cmFudGlkXHJcbiAgICAgICAgKiBAb3V0cHV0IHJlc3RhdXJhbnQgb2JqIC8gZXJyIG9ialxyXG4gICAgICAgICovXHJcbiAgICBnZXRFbnRyeUJ5SWQoZWxlbWVudCwgaWQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBnZXQgdGhlIGVudHJ5XHJcbiAgICAgICAgICAgIGVsZW1lbnQuZmluZEJ5SWQoaWQsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBuYW1lIGdldElkc0J5Q2l0eVxyXG4gICAgICogQGRlc2MgdG8gZ2V0IHRoZSByZXN0YXVyYW50aWRzIGJhc2VkIGNpdHkgbmFtZVxyXG4gICAgICogQGlucHV0IERCIGVsZW1lbnQgYW5kIGNpdHlcclxuICAgICAqIEBvdXRwdXQgcmVzdGF1cmFudCBvYmogLyBlcnIgb2JqXHJcbiAgICAgKi9cclxuXHJcbiAgICBnZXRJZHNCeUNpdHkoZWxlbWVudCwgdmFsdWUsIGZpZWxkcykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGdldCB0aGUgZW50cnkgd2l0aCBzcGVjaWZpZWQgZmllbGRzXHJcbiAgICAgICAgICAgIGVsZW1lbnQuZmluZCh7IGNpdHk6IG5ldyBSZWdFeHAoJ14nICsgdmFsdWUgKyAnJCcsICdpJykgfSwgZmllbGRzLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgICAgICogQG5hbWUgdXBkYXRlRW50cnlcclxuICAgICAgICAgKiBAZGVzYyB0byB1cGRhdGUgdGhlIHJlc3RhdXJhbnQgYmFzZWQgb24gaWQuXHJcbiAgICAgICAgICogQGlucHV0IERCIGVsZW1lbnQscmVzdGF1cmFudGlkIGFuZCBmaWVsZHNcclxuICAgICAgICAgKiBAb3V0cHV0IHJlc3RhdXJhbnQgb2JqIC8gZXJyIG9ialxyXG4gICAgICAgICAqL1xyXG4gICAgdXBkYXRlRW50cnkoZWxlbWVudCwgaWQsIGZpZWxkcykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgZW50cnlcclxuICAgICAgICAgICAgZWxlbWVudC51cGRhdGVPbmUoeyAnX2lkJzogT2JqZWN0KGlkKSB9LCBmaWVsZHMsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAgICAgKiBAbmFtZSBmaW5kRW50cnlcclxuICAgICAgICAgKiBAZGVzYyB0byBzZWFyY2ggdGhlIHJlc3RhdXJhbnQgYmFzZWQgb24gaW5wdXQgcGFyYW1zLlxyXG4gICAgICAgICAqIEBpbnB1dCBEQiBlbGVtZW50LHNlckJ5RGlzdGFuY2UgYW5kIGZpZWxkc1xyXG4gICAgICAgICAqIEBvdXRwdXQgcmVzdGF1cmFudCBvYmogLyBlcnIgb2JqXHJcbiAgICAgICAgICovXHJcbiAgICBmaW5kRW50cnkoZWxlbWVudCwgcmVxRGF0YSwgc2VyQnlEaXN0YW5jZSwgcGFnaW5hdGlvbkxpbWl0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcXVlcnlPYmogPSB7fVxyXG4gICAgICAgICAgICBsZXQgc2tpcFZhbCA9IHJlcURhdGEucGFnZU5vID8gcGFyc2VJbnQocmVxRGF0YS5wYWdlTm8pIC0gMSA6IDA7XHJcbiAgICAgICAgICAgIGxldCBsaW1pdFZhbCA9IHBhZ2luYXRpb25MaW1pdCA/IHBhcnNlSW50KHBhZ2luYXRpb25MaW1pdCkgOiA5O1xyXG4gICAgICAgICAgICBpZiAocmVxRGF0YS5jdWlzaW5lKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VzID0gbmV3IFJlZ0V4cCgnXicgKyByZXFEYXRhLmN1aXNpbmUgKyAnJCcsICdpJyk7XHJcbiAgICAgICAgICAgICAgICBxdWVyeU9iai5jdWlzaW5lcyA9IHsgJHJlZ2V4OiBjdXMgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmVxRGF0YS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IG5ldyBSZWdFeHAoJ14nICsgcmVxRGF0YS5uYW1lICsgJyQnLCAnaScpO1xyXG4gICAgICAgICAgICAgICAgcXVlcnlPYmoubmFtZSA9IHsgJHJlZ2V4OiBuYW1lIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVxRGF0YS5yYXRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeU9iai5yYXRpbmdzID0geyAkZ3RlOiByZXFEYXRhLnJhdGluZ3MgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHJlcURhdGEuYnVkZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeU9iai5idWRnZXQgPSB7ICRsdGU6IHJlcURhdGEuYnVkZ2V0IH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyZXFEYXRhLmxvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9jYXRpb24gPSBuZXcgUmVnRXhwKCdeJyArIHJlcURhdGEubG9jYXRpb24gKyAnJCcsICdpJyk7XHJcbiAgICAgICAgICAgICAgICBxdWVyeU9iai5jaXR5ID0geyAkcmVnZXg6IGxvY2F0aW9uIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlcURhdGEubWVudSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1lbnUgPSBuZXcgUmVnRXhwKCdeJyArIHJlcURhdGEubWVudSArICckJywgJ2knKTtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5T2JqLm1lbnUgPSB7ICRlbGVtTWF0Y2g6IHsgaXRlbW5hbWU6IHsgJHJlZ2V4OiBtZW51IH0gfSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXFEYXRhLmRpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9uZyA9IHJlcURhdGEuZGlzdGFuY2VbMF1cclxuICAgICAgICAgICAgICAgIGxldCBsYXR0ID0gcmVxRGF0YS5kaXN0YW5jZVsxXVxyXG4gICAgICAgICAgICAgICAgcXVlcnlPYmoubG9jYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG5lYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJG1heERpc3RhbmNlOiBzZXJCeURpc3RhbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUG9pbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbbG9uZywgbGF0dF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBza2lwVmFsID0gbGltaXRWYWwgKiBza2lwVmFsO1xyXG4gICAgICAgICAgICBsaW1pdFZhbCA9IGxpbWl0VmFsO1xyXG4gICAgICAgICAgICBlbGVtZW50LmZpbmQoeyAkYW5kOiBbcXVlcnlPYmpdIH0pLnNraXAoc2tpcFZhbCkubGltaXQobGltaXRWYWwpLmV4ZWMoZnVuY3Rpb24gKGVyciwgZG9jcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRvY3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5jb25zdCBxdWVyeU9iaiA9IG5ldyBRdWVyeUhhbmRsZXIoKTtcclxubW9kdWxlLmV4cG9ydHMgPSBxdWVyeU9iajsiXX0=