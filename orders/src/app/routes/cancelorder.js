'use strict';

const orderservice = require('../services/orderservice')

module.exports = {
    cancelorder : orderservice.cancel
}