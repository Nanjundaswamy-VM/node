/**
 * @file
 * handle the search restaurant api.
 */

'use strict';

const restaurantService = require('../services/restaurantService')

module.exports = {
    search: restaurantService.search
}