/**
 * @file
 * route file to handel to view order.
 */

'use strict';

const orderService = require('../services/orderService')

module.exports = {
    viewOrder: orderService.viewOrder
}