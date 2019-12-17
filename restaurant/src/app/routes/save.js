/**
 * @file
 * handle the save restaurant api.
 */

'use strict';

const restaurantService = require('../services/restaurantService')

module.exports = {
    create: restaurantService.create
}