/**
 * @file
 * route file to handle get orderlist api.
 */

'use strict';

const reportService = require('../services/reportService')

module.exports = {
    ordersList: reportService.ordersList
}