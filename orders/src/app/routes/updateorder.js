/**
 * @file
 * route file to handel to update order.
 */

'use strict';

const orderService = require('../services/orderService')

module.exports = {
    updateOrder: orderService.updateOrder
}