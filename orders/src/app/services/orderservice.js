/**
 * @file
 * service file to handel order related api.
 */

'use strict';

const Order = require('../models/order')
const restHelper = require('../lib/restHelper')
const queryObj = require('../lib/queryHandler');
const { check, body, validationResult } = require('express-validator');
const { paginationLimit } = require('../config/index')
const publishPayload = require('../lib/publisher')

// Create and place new order
exports.placeOrder = async (req, res) => {
    restHelper.message = "Failed to place order"
    let orderamount = 0
    const errors = validationResult(req);
    if (errors.array().length == 0 && req.body.items.length !== 0) {
        try {
            //caluclating total order amount
            if (req.body.items) {
                Object.values(req.body.items).forEach(value => {
                    orderamount += parseInt(value.amount);
                });
            }

            // Create a order var
            const order = new Order({
                customerid: req.body.customerid,
                restaurant_id: req.body.restaurant_id,
                orderamount: orderamount,
                created_at: new Date(),
                delivery_address: req.body.delivery_address,
                items: req.body.items
            });

            let data = await queryObj.saveEntry(order)
            if (data) {
                restHelper.status = 'Success';
                restHelper.code = 200;
                restHelper.message = 'Placed order successfully.';
                restHelper.responseData = data;
                publishPayload.publishOrderPayload(data);
            }

        } catch (err) {
            restHelper.message = 'Failed to place order ' + err.message;
        }
    } else {
        restHelper.message = "Failed to place the order.Please enter valid input data.";
    }
    restHelper.sendResponse(res);
};

// view order details
exports.viewOrder = async (req, res) => {
    restHelper.message = "Failed to get order details"
    try {
        let data = await queryObj.getEntryById(Order, req.params.id)
        if (data) {
            restHelper.status = 'Success';
            restHelper.code = 200;
            restHelper.message = 'Successfully fetched order details.';
            restHelper.responseData = data;
        }

    } catch (err) {
        if (err.kind && err.kind === 'ObjectId') {
            restHelper.message = "Order not found with id " + req.params.id;
            restHelper.code = 204;
        } else {
            restHelper.message = "Error retrieving order with id " + req.params.id;
        }
    }

    restHelper.sendResponse(res);
};

// get total amount
exports.totalAmount = async (req, res) => {
    restHelper.message = "Failed to get order details"
    try {
        let data = await queryObj.getEntryFieldsById(Order, req.params.id, 'orderamount')
        if (data) {
            restHelper.status = 'Success';
            restHelper.code = 200;
            restHelper.message = 'Successfully fetched order details.';
            restHelper.responseData = data;
        }

    } catch (err) {
        if (err.kind && err.kind === 'ObjectId') {
            restHelper.message = "Order not found with id " + req.params.id;
            restHelper.code = 204;
        } else {
            restHelper.message = "Error retrieving order with id " + req.params.id;
        }
    }

    restHelper.sendResponse(res);
};

// update order
exports.updateOrder = async (req, res) => {
    restHelper.message = "Failed to update order details"
    const errors = validationResult(req);
    if (errors.array().length == 0 && req.body.items.length !== 0) {

        try {
            let orderamount = 0
            //caluclating total order amount
            if (req.body.items) {
                Object.values(req.body.items).forEach(value => {
                    orderamount += parseInt(value.amount);
                });
            }

            // updated a order var
            const orderDetails = {
                customerid: req.body.customerid,
                orderamount: orderamount,
                delivery_address: req.body.delivery_address,
                delivered_status: req.body.delivery_status,
                restaurant_id: req.body.restaurant_id,
                items: req.body.items
            };

            let data = await queryObj.updateEntry(Order, req.params.id, orderDetails)
            if (data) {
                restHelper.status = 'Success';
                restHelper.code = 200;
                restHelper.message = "Successfully updated order deatails";
                restHelper.responseData = [];
            }
        } catch (err) {
            console.log(err);
            if (err.kind && err.kind === 'ObjectId') {
                restHelper.message = "Order not found with id " + req.params.id;
                restHelper.code = 204;
            } else {
                restHelper.message = "Error retrieving order with id " + req.params.id;
            }
        }
    } else {
        restHelper.message = "Failed to place the order.Please enter valid input data.";
    }
    restHelper.sendResponse(res);
};

// cancel order
exports.cancel = async (req, res) => {
    restHelper.message = "Failed to update order details"

    try {
        // Create a order var
        const orderDetails = {
            order_status: 0
        };

        let data = await queryObj.updateEntry(Order, req.params.id, orderDetails)
        if (data) {
            restHelper.status = 'Success';
            restHelper.code = 200;
            restHelper.message = "Successfully updated order deatails";
            restHelper.responseData = [];
        }
    } catch (err) {
        if (err.kind && err.kind === 'ObjectId') {
            restHelper.message = "Order not found with id " + req.params.id;
            restHelper.code = 204;
        } else {
            restHelper.message = "Error retrieving order with id " + req.params.id;
        }
    }

    restHelper.sendResponse(res);

};


// get total amount for given orders 
exports.getOrdersAmount = async (req, res) => {
    restHelper.message = "Failed to get amount for orders"
    try {
        let data = await queryObj.getOrdersAmount(Order, req.body)
        if (Object.entries(data).length > 0) {
            restHelper.status = 'Success';
            restHelper.code = 200;
            restHelper.message = 'Successfully fetched order details.';
            restHelper.responseData = data;
        } else {
            restHelper.status = 'Success';
            restHelper.code = 204;
            restHelper.message = 'No data.';
            restHelper.responseData = data;
        }

    } catch (err) {
        if (err.kind && err.kind === 'ObjectId') {
            restHelper.message = "Order not found with id " + req.params.id;
            restHelper.code = 204;
        } else {
            restHelper.message = "Error retrieving order with id " + req.params.id;
        }
    }

    restHelper.sendResponse(res);
};

// get orders list for given restaurants and data 
exports.getOrderList = async (req, res) => {
    restHelper.message = "Failed to get order details"
    try {
        let data = await queryObj.getOrderList(Order, req.body, paginationLimit)
        if (Object.entries(data).length > 0) {
            restHelper.status = 'Success';
            restHelper.code = 200;
            restHelper.message = 'Successfully fetched order list.';
            restHelper.responseData = data;
        } else {
            restHelper.status = 'Success';
            restHelper.code = 204;
            restHelper.message = 'No data.';
            restHelper.responseData = data;
        }

    } catch (err) {
        if (err.kind && err.kind === 'ObjectId') {
            restHelper.message = "Order not found with id " + req.params.id;
            restHelper.code = 204;
        } else {
            restHelper.message = "Error retrieving order with id " + req.params.id;
        }
    }
    restHelper.sendResponse(res);
};


/**
 * Returns the validation errors for input.
 *
 * @param {json} request-body.
 * @return {json} returns the validation errors if exist.
 */
exports.validate = (val) => {
    switch (val) {
        case 'placeOrder': {
            return [
                check('customerid').not().isEmpty().trim().escape().isInt().withMessage('please enter the valid customerid'),
                check('restaurant_id').exists().trim().escape().isLength({ min: 3, max: 150 }).withMessage('please enter valid restaurant_id'),
            ]
        };
        case 'updateOrder': {
            return [
                check('customerid').not().isEmpty().trim().escape().isInt().withMessage('please enter the valid customerid'),
                check('restaurant_id').exists().trim().escape().isLength({ min: 3, max: 150 }).withMessage('please enter valid restaurant_id'),
            ]
        }
    }
}