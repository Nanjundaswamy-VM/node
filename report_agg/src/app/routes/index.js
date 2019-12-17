/**
 * @file
 * route file to report related api calls.
 */

'use strict';

const express = require('express')
const router = express.Router()

//defining routes
const ordersList = require('./ordersList')
const ordersTotalAmount = require('./ordersTotalAmount')

router.get('/ordersTotalAmount', ordersTotalAmount.ordersTotalAmount)
router.get('/ordersList', ordersList.ordersList)

module.exports = router;