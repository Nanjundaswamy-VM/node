/**
 * @file
 * handle the restaurant list related api.
 */

'use strict';

const restaurantService = require('../services/restaurantService')

module.exports = {
    resList: restaurantService.resList
}