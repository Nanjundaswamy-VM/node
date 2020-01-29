/**
 * @file
 * handle the restaurant related apis.
 */

'use strict';

const express = require('express')
const router = express.Router()

const restaurantService = require('../services/restaurantService')

//defining routes
router.post('/search', restaurantService.search)
router.post('/add', restaurantService.create)
router.get('/resList', restaurantService.resList)

module.exports = router;