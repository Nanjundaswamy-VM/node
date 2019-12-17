/**
 * @file
 * root sserver file of project.
 */

'use strict';var _require =

require('./app/config/index'),port = _require.port,server = _require.server;
var app = require('./app/index');
//const consul = require('./app/config/consul')

var IP_ADDRESS = process.env.IP_ADDRESS || server;
var portNo = process.env.PORT || port;
app.set('port', portNo);
//listening to the port
app.listen(port);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2ZXIuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsInBvcnQiLCJzZXJ2ZXIiLCJhcHAiLCJJUF9BRERSRVNTIiwicHJvY2VzcyIsImVudiIsInBvcnRObyIsIlBPUlQiLCJzZXQiLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBLGE7O0FBRXlCQSxPQUFPLENBQUMsb0JBQUQsQyxDQUF4QkMsSSxZQUFBQSxJLENBQU1DLE0sWUFBQUEsTTtBQUNkLElBQU1DLEdBQUcsR0FBR0gsT0FBTyxDQUFDLGFBQUQsQ0FBbkI7QUFDQTs7QUFFQSxJQUFJSSxVQUFVLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixVQUFaLElBQTBCRixNQUEzQztBQUNBLElBQUlLLE1BQU0sR0FBR0YsT0FBTyxDQUFDQyxHQUFSLENBQVlFLElBQVosSUFBb0JQLElBQWpDO0FBQ0FFLEdBQUcsQ0FBQ00sR0FBSixDQUFRLE1BQVIsRUFBZ0JGLE1BQWhCO0FBQ0E7QUFDQUosR0FBRyxDQUFDTyxNQUFKLENBQVdULElBQVgiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGZpbGVcclxuICogcm9vdCBzc2VydmVyIGZpbGUgb2YgcHJvamVjdC5cclxuICovXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCB7IHBvcnQsIHNlcnZlciB9ID0gcmVxdWlyZSgnLi9hcHAvY29uZmlnL2luZGV4Jyk7XHJcbmNvbnN0IGFwcCA9IHJlcXVpcmUoJy4vYXBwL2luZGV4JylcclxuLy9jb25zdCBjb25zdWwgPSByZXF1aXJlKCcuL2FwcC9jb25maWcvY29uc3VsJylcclxuXHJcbmxldCBJUF9BRERSRVNTID0gcHJvY2Vzcy5lbnYuSVBfQUREUkVTUyB8fCBzZXJ2ZXJcclxubGV0IHBvcnRObyA9IHByb2Nlc3MuZW52LlBPUlQgfHwgcG9ydFxyXG5hcHAuc2V0KCdwb3J0JywgcG9ydE5vKVxyXG4vL2xpc3RlbmluZyB0byB0aGUgcG9ydFxyXG5hcHAubGlzdGVuKHBvcnQpIl19