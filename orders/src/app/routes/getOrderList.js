/**
 * @file
 * route file to handel get order list.
 */

'use strict';

const orderService = require('../services/orderService')

module.exports = {
    getOrderList: orderService.getOrderList
}