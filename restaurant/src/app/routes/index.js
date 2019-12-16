'use strict';

const express = require('express')
const router = express.Router()

const create = require('./save')
const search = require('./search')
const res_list = require('./res_list')

router.post('/search', search.search)
router.post('/add', create.create);
router.get('/res_list', res_list.res_list);


module.exports = router;