/**
 * @file
 * route file to handel get order amount.
 */

'use strict';

const orderService = require('../services/orderService')

module.exports = {
    getOrdersAmount: orderService.getOrdersAmount
}