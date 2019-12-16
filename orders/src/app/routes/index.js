'use strict';

const express = require('express')
const router = express.Router()

const placeorder = require('./placeorder')
const updateorder = require('./updateorder')
const vieworder = require('./vieworder')
const totalamount = require('./totalamount')
const cancelorder = require('./cancelorder')
const get_order_list = require('./get_order_list')
const get_orders_amount = require('./get_orders_amount')

router.get('/view/:id', vieworder.vieworder)
router.post('/order_list', get_order_list.get_order_list)
router.post('/orders_amount', get_orders_amount.get_orders_amount)
router.get('/totalamount/:id', totalamount.totalamount)
router.put('/update/:id', updateorder.updateorder)
router.post('/place', placeorder.placeorder)
router.patch('/cancel/:id', cancelorder.cancelorder)

module.exports = router;