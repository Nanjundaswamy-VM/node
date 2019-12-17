/**
 * @file
 * route file to handle get ordersTotalAmount api.
 */

'use strict';

const reportService = require('../services/reportService')

module.exports = {
    ordersTotalAmount: reportService.ordersTotalAmount
}