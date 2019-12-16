'use strict';

const Order = require('../models/order')
const rest_helper = require('../lib/rest_helper')
const query_obj = require('../lib/query_handler');
const { check, validationResult } = require('express-validator');


// Create and place new order
exports.placeorder = async (req, res) =>  {
    rest_helper.message = "Failed to place order"
    let orderamount = 0
   
    try {
        if(req.body.items){
            Object.values(req.body.items).forEach(value=>{
                orderamount += parseInt(value.amount);
             });
        }
        // Create a order var
        const order = new Order({
            customerid: req.body.customerid, 
            restaurant_id: req.body.restaurant_id,
            orderamount: orderamount,
            created_at: new Date(),
            delivery_address : req.body.delivery_address,
            items: req.body.items
        });

        let data = await query_obj.save_entry(order)
        if(data){
            rest_helper.status = 'Success';
            rest_helper.code = 200;
            rest_helper.message = 'Placed order successfully.';
            rest_helper.response_data = data;
        }
        
    } catch (err) {
        //console.log(err);
        rest_helper.message = 'Failed to place order '+ err.message;
    }

    rest_helper.sendResponse(res);
};

// view order details
exports.vieworder = async (req, res) => {
    rest_helper.message = "Failed to get order details"
    try {
        let data = await query_obj.get_entry_by_id(Order,req.params.id) 
        if(data){
            rest_helper.status = 'Success';
            rest_helper.code = 200;
            rest_helper.message = 'Successfully fetched order details.';
            rest_helper.response_data = data;
        }
        
    } catch (err) {
        if(err.kind && err.kind === 'ObjectId') {
            rest_helper.message = "Order not found with id " + req.params.id;
            rest_helper.code = 204;              
        }else{
            rest_helper.message = "Error retrieving order with id " + req.params.id;
        }
    }

    rest_helper.sendResponse(res);
};

// get total amount
exports.totalamount = async (req, res) => {
    rest_helper.message = "Failed to get order details"
    
    try {
        let data = await query_obj.get_entry_fields_by_id(Order,req.params.id,'orderamount') 
        if(data){
            rest_helper.status = 'Success';
            rest_helper.code = 200;
            rest_helper.message = 'Successfully fetched order details.';
            rest_helper.response_data = data;
        }
        
    } catch (err) {
        if(err.kind && err.kind === 'ObjectId') {
            rest_helper.message = "Order not found with id " + req.params.id;
            rest_helper.code = 204;              
        }else{
            rest_helper.message = "Error retrieving order with id " + req.params.id;
        }
    }

    rest_helper.sendResponse(res);
};

// update order
exports.updateorder = async (req, res) => {
    
    rest_helper.message = "Failed to update order details"
    
    try {
        // Create a order var
        const orderDetails = {
            customerid: req.body.customerid, 
            orderamount: req.body.orderamount,
            delivery_address : req.body.delivery_address,
            delivery_status: req.body.delivery_status,
            restaurant_id: req.body.restaurant_id,
            items: req.body.items
        };
    
        let data = await query_obj.update_entry(Order,req.params.id,orderDetails) 
        if(data){
            rest_helper.status = 'Success';
            rest_helper.code = 200;
            rest_helper.message = "Successfully updated order deatails";
            rest_helper.response_data = [];
        }
    } catch (err) {
        if(err.kind && err.kind === 'ObjectId') {
            rest_helper.message = "Order not found with id " + req.params.id;
            rest_helper.code = 204;              
        }else{
            rest_helper.message = "Error retrieving order with id " + req.params.id;
        }
    }

    rest_helper.sendResponse(res);
};

// cancel order
exports.cancel = async (req, res) => {
    rest_helper.message = "Failed to update order details"
    
    try {
        // Create a order var
        const orderDetails = {
            order_status: 0
        };
    
        let data = await query_obj.update_entry(Order,req.params.id,orderDetails) 
        if(data){
            rest_helper.status = 'Success';
            rest_helper.code = 200;
            rest_helper.message = "Successfully updated order deatails";
            rest_helper.response_data = [];
        }
    } catch (err) {
        if(err.kind && err.kind === 'ObjectId') {
            rest_helper.message = "Order not found with id " + req.params.id;
            rest_helper.code = 204;              
        }else{
            rest_helper.message = "Error retrieving order with id " + req.params.id;
        }
    }

    rest_helper.sendResponse(res);
    
};


// get total amount for given orders 
exports.get_orders_amount = async (req, res) => {
    rest_helper.message = "Failed to get amount for orders"
    try {
        let data = await query_obj.get_orders_amount(Order,req.body) 
        if(Object.entries(data).length > 0){
            rest_helper.status = 'Success';
            rest_helper.code = 200;
            rest_helper.message = 'Successfully fetched order details.';
            rest_helper.response_data = data;
        }else{
        rest_helper.status = 'Success';
        rest_helper.code = 204;
        rest_helper.message = 'No data.';
        rest_helper.response_data = data;
    }
        
    } catch (err) {
        console.log(err)
        if(err.kind && err.kind === 'ObjectId') {
            rest_helper.message = "Order not found with id " + req.params.id;
            rest_helper.code = 204;              
        }else{
            rest_helper.message = "Error retrieving order with id " + req.params.id;
        }
    }

    rest_helper.sendResponse(res);
};

// get orders list for given restaurants and data 
exports.get_order_list = async (req, res) => {
    rest_helper.message = "Failed to get order details"
    try {
        let data = await query_obj.get_order_list(Order,req.body) 
        if(Object.entries(data).length > 0 ){
            rest_helper.status = 'Success';
            rest_helper.code = 200;
            rest_helper.message = 'Successfully fetched order list.';
            rest_helper.response_data = data;
        }else{
			rest_helper.status = 'Success';
            rest_helper.code = 204;
            rest_helper.message = 'No data.';
            rest_helper.response_data = data;
		}
        
    } catch (err) {
        if(err.kind && err.kind === 'ObjectId') {
            rest_helper.message = "Order not found with id " + req.params.id;
            rest_helper.code = 204;              
        }else{
            rest_helper.message = "Error retrieving order with id " + req.params.id;
        }
    }
    rest_helper.sendResponse(res);
};
