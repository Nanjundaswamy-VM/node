/**
 * @file
 * Config file for mongoose db connection
 */

'use strict';var _require =
require('./index'),mongoUrl = _require.mongoUrl,mongoDb = _require.mongoDb;
var mongoose = require('mongoose');
var dbUrl = mongoUrl + mongoDb;

//connecting to database
mongoose.connect(
dbUrl + "?retryWrites=true&w=majority",
{
  useNewUrlParser: true,
  useUnifiedTopology: true });



var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log("Connected to MongoDB database");
});

module.exports = db;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29uZmlnL2RhdGFiYXNlLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJtb25nb1VybCIsIm1vbmdvRGIiLCJtb25nb29zZSIsImRiVXJsIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImRiIiwiY29ubmVjdGlvbiIsIm9uIiwiY29uc29sZSIsImVycm9yIiwiYmluZCIsIm9uY2UiLCJsb2ciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQSxhO0FBQzhCQSxPQUFPLENBQUMsU0FBRCxDLENBQTdCQyxRLFlBQUFBLFEsQ0FBVUMsTyxZQUFBQSxPO0FBQ2xCLElBQU1DLFFBQVEsR0FBR0gsT0FBTyxDQUFDLFVBQUQsQ0FBeEI7QUFDQSxJQUFNSSxLQUFLLEdBQUdILFFBQVEsR0FBR0MsT0FBekI7O0FBRUE7QUFDQUMsUUFBUSxDQUFDRSxPQUFUO0FBQ0VELEtBQUssR0FBRyw4QkFEVjtBQUVFO0FBQ0VFLEVBQUFBLGVBQWUsRUFBRSxJQURuQjtBQUVFQyxFQUFBQSxrQkFBa0IsRUFBRSxJQUZ0QixFQUZGOzs7O0FBUUEsSUFBTUMsRUFBRSxHQUFHTCxRQUFRLENBQUNNLFVBQXBCO0FBQ0FELEVBQUUsQ0FBQ0UsRUFBSCxDQUFNLE9BQU4sRUFBZUMsT0FBTyxDQUFDQyxLQUFSLENBQWNDLElBQWQsQ0FBbUJGLE9BQW5CLEVBQTRCLG1CQUE1QixDQUFmO0FBQ0FILEVBQUUsQ0FBQ00sSUFBSCxDQUFRLE1BQVIsRUFBZ0IsWUFBWTtBQUMxQjtBQUNBSCxFQUFBQSxPQUFPLENBQUNJLEdBQVIsQ0FBWSwrQkFBWjtBQUNELENBSEQ7O0FBS0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlQsRUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVcclxuICogQ29uZmlnIGZpbGUgZm9yIG1vbmdvb3NlIGRiIGNvbm5lY3Rpb25cclxuICovXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcbmNvbnN0IHsgbW9uZ29VcmwsIG1vbmdvRGIgfSA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcclxuY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXHJcbmNvbnN0IGRiVXJsID0gbW9uZ29VcmwgKyBtb25nb0RiXHJcblxyXG4vL2Nvbm5lY3RpbmcgdG8gZGF0YWJhc2VcclxubW9uZ29vc2UuY29ubmVjdChcclxuICBkYlVybCArIFwiP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiLFxyXG4gIHtcclxuICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZVxyXG4gIH1cclxuKVxyXG5cclxuY29uc3QgZGIgPSBtb25nb29zZS5jb25uZWN0aW9uO1xyXG5kYi5vbignZXJyb3InLCBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSwgJ2Nvbm5lY3Rpb24gZXJyb3I6JykpXHJcbmRiLm9uY2UoJ29wZW4nLCBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gd2UncmUgY29ubmVjdGVkIVxyXG4gIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIE1vbmdvREIgZGF0YWJhc2VcIilcclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGI7Il19