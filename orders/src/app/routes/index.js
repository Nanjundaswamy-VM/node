/**
 * @file
 * handle the orders related apis.
 */

'use strict';

const express = require('express')
const router = express.Router()

//including service file
const orderService = require('../services/orderservice')

//defining routes
router.get('/view/:id', orderService.viewOrder)
router.post('/orderList', orderService.getOrderList)
router.post('/ordersAmount', orderService.getOrdersAmount)
router.get('/totalAmount/:id', orderService.totalAmount)
router.put('/update/:id', orderService.updateOrder)
router.post('/place', orderService.placeOrder)
router.patch('/cancel/:id', orderService.cancel)

module.exports = router;