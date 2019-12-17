/**
 * @file
 * Config file to set env vars to custom vars
 */

'use strict';

//getting env file vars
const dotenv = require('dotenv').config();

module.exports = {
    mongoUrl: process.env.MONGO_URL,
    mongoDb: process.env.DB,
    port: process.env.PORT,
    serByDistance: process.env.SEARCH_BY_DISTANCE,
    paginationLimit: process.env.PAGINATION_LIMIT
};
