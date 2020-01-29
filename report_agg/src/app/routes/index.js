/**
 * @file
 * route file to report related api calls.
 */

'use strict';

const express = require('express')
const router = express.Router()

//including the services file
const reportService = require('../services/reportService')

//defining routes
router.get('/ordersTotalAmount', reportService.ordersTotalAmount)
router.get('/ordersList', reportService.ordersList)

module.exports = router;