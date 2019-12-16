'use strict';

const dotenv = require('dotenv').config();

module.exports = {
    mongo_url : process.env.MONGO_URL,
    mongo_db :  process.env.DB,
    port: process.env.PORT
};
