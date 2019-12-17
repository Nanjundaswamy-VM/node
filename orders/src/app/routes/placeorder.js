/**
 * @file
 * route file to handel to place order.
 */
'use strict';

const orderService = require('../services/orderService')

module.exports = {
    placeOrder: orderService.placeOrder
}