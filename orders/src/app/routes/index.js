/**
 * @file
 * handle the orders related apis.
 */

'use strict';

const express = require('express')
const router = express.Router()

//including service file
const orderService = require('../services/orderservice')
const SchemaValidator = require('../middlewares/schemaValidator')

// We are using the formatted Joi Validation error
// Pass false as argument to use a generic error
const validateRequest = SchemaValidator(true)

//defining routes
router.get('/view/:id', orderService.viewOrder)
router.post('/orderList', orderService.getOrderList)
router.post('/ordersAmount', orderService.getOrdersAmount)
router.get('/totalAmount/:id', orderService.totalAmount)
router.put('/update/:id', validateRequest,orderService.updateOrder)
router.post('/place', validateRequest,orderService.placeOrder)
router.patch('/cancel/:id', orderService.cancel)

module.exports = router;