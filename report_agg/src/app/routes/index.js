'use strict';

const express = require('express')
const router = express.Router()

const orderslist = require('./orderslist')
const orders_totalamount = require('./orders_totalamount')

router.get('/orders_totalamount', orders_totalamount.orders_totalamount)
router.get('/orderslist', orderslist.orderslist)

module.exports = router;