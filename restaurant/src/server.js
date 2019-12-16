'use strict';

const {port,server} = require('./app/config/index');
const app = require('./app/index')
const consul = require('./consul')

let IP_ADDRESS = process.env.IP_ADDRESS || server
let portNo = process.env.PORT || port
app.set('port', portNo)
//listening to the port
app.listen(port)