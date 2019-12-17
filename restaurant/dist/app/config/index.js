/**
 * @file
 * Config file to set env vars to custom vars
 */

'use strict';

//getting env file vars
var dotenv = require('dotenv').config();

module.exports = {
  mongoUrl: process.env.MONGO_URL,
  mongoDb: process.env.DB,
  port: process.env.PORT,
  serByDistance: process.env.SEARCH_BY_DISTANCE,
  paginationLimit: process.env.PAGINATION_LIMIT };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29uZmlnL2luZGV4LmpzIl0sIm5hbWVzIjpbImRvdGVudiIsInJlcXVpcmUiLCJjb25maWciLCJtb2R1bGUiLCJleHBvcnRzIiwibW9uZ29VcmwiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJMIiwibW9uZ29EYiIsIkRCIiwicG9ydCIsIlBPUlQiLCJzZXJCeURpc3RhbmNlIiwiU0VBUkNIX0JZX0RJU1RBTkNFIiwicGFnaW5hdGlvbkxpbWl0IiwiUEFHSU5BVElPTl9MSU1JVCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7O0FBRUE7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyxRQUFELENBQVAsQ0FBa0JDLE1BQWxCLEVBQWY7O0FBRUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiQyxFQUFBQSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxTQURUO0FBRWJDLEVBQUFBLE9BQU8sRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLEVBRlI7QUFHYkMsRUFBQUEsSUFBSSxFQUFFTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUssSUFITDtBQUliQyxFQUFBQSxhQUFhLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTyxrQkFKZDtBQUtiQyxFQUFBQSxlQUFlLEVBQUVULE9BQU8sQ0FBQ0MsR0FBUixDQUFZUyxnQkFMaEIsRUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVcclxuICogQ29uZmlnIGZpbGUgdG8gc2V0IGVudiB2YXJzIHRvIGN1c3RvbSB2YXJzXHJcbiAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy9nZXR0aW5nIGVudiBmaWxlIHZhcnNcclxuY29uc3QgZG90ZW52ID0gcmVxdWlyZSgnZG90ZW52JykuY29uZmlnKCk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIG1vbmdvVXJsOiBwcm9jZXNzLmVudi5NT05HT19VUkwsXHJcbiAgICBtb25nb0RiOiBwcm9jZXNzLmVudi5EQixcclxuICAgIHBvcnQ6IHByb2Nlc3MuZW52LlBPUlQsXHJcbiAgICBzZXJCeURpc3RhbmNlOiBwcm9jZXNzLmVudi5TRUFSQ0hfQllfRElTVEFOQ0UsXHJcbiAgICBwYWdpbmF0aW9uTGltaXQ6IHByb2Nlc3MuZW52LlBBR0lOQVRJT05fTElNSVRcclxufTtcclxuIl19