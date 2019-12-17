/**
 * @file
 * route file to handel cancel order.
 */

'use strict';

const orderService = require('../services/orderService')

module.exports = {
    cancelOrder: orderService.cancel
}