'use strict';

const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productController');// Get the product list
router.get('/list', productsController.list);// Get product details for the given product id
router.get('/:id', productsController.productDetails);// Add product
router.post('/add', productsController.validate('add'), productsController.addProduct);// Update product
router.put('/update/:id', productsController.validate('update'), productsController.updateProduct);// Delete product
router.delete('/delete/:id', productsController.deleteProduct);

module.exports = router;