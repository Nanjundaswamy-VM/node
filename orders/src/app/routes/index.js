/**
 * @file
 * handle the orders related apis.
 */

'use strict';

const express = require('express')
const router = express.Router()

//including all routes file
const placeOrder = require('./placeOrder')
const updateOrder = require('./updateOrder')
const viewOrder = require('./viewOrder')
const totalAmount = require('./totalAmount')
const cancelOrder = require('./cancelOrder')
const getOrderList = require('./getOrderList')
const getOrdersAmount = require('./getOrdersAmount')

//defining routes
router.get('/view/:id', viewOrder.viewOrder)
router.post('/orderList', getOrderList.getOrderList)
router.post('/ordersAmount', getOrdersAmount.getOrdersAmount)
router.get('/totalAmount/:id', totalAmount.totalAmount)
router.put('/update/:id', updateOrder.updateOrder)
router.post('/place', placeOrder.placeOrder)
router.patch('/cancel/:id', cancelOrder.cancelOrder)

module.exports = router;