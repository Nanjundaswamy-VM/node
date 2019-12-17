/**
 * @file
 * handle the restaurant related apis.
 */

'use strict';

const express = require('express')
const router = express.Router()

const create = require('./save')
const search = require('./search')
const resList = require('./resList')

//defining routes
router.post('/search', search.search)
router.post('/add', create.create);
router.get('/resList', resList.resList);


module.exports = router;