'use strict';

const rp = require('request-promise');
const rest_helper = require('../lib/rest_helper')
const { check, validationResult } = require('express-validator');
const order_api_url = "http://localhost:8082/order/";
const restaurant_api_url = "http://localhost:8083/restaurant/";
// get orders list
exports.orderslist = async (req, res) =>  {
    rest_helper.message = "Failed to get order list"
    
    try {
        let city = req.body.city;
        
        let res_options = {
            method: 'GET',
            uri: restaurant_api_url + 'res_list?city='+city.toLowerCase(),
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true // Automatically stringifies the body to JSON
        }

        const restaurant_data = await rp(res_options);
        if(restaurant_data && Object.entries(restaurant_data.data).length > 0){
            var restaurant_ids = restaurant_data.data.map(function(item) {
                return item['_id'];
            });
            
            let order_options = {
                method: 'POST',
                uri: order_api_url + 'order_list',
                body: {
                    restaurantids: restaurant_ids,
                    fromdate : req.query.fromdate,
                    todate:req.query.todate
                },
                json: true // Automatically stringifies the body to JSON
            }

            const orderlist_data = await rp(order_options);
            if(orderlist_data && Object.entries(orderlist_data).length > 0 ){
                rest_helper.status = 'Success';
                rest_helper.code = 200;
                rest_helper.message = 'Successfully fetched order list of today.';
                rest_helper.response_data = orderlist_data;
            }else{
                rest_helper.status = 'Success';
                rest_helper.code = 204;
                rest_helper.message = 'No data.';
                rest_helper.response_data = [];
            }

        }else{
			rest_helper.status = 'Success';
            rest_helper.code = 204;
            rest_helper.message = 'No data.';
            rest_helper.response_data = [];
		}
    } catch (err) {
        //console.log(err);
        rest_helper.message = 'Failed to get order list '+ err.message;
    }

    rest_helper.sendResponse(res);
};

// get total amount of all orders
exports.orders_totalamount = async (req, res) =>  {
    rest_helper.message = "Failed to get order total amount"
    
    try {
        let city = req.query.city;
        
        let res_options = {
            method: 'GET',
            uri: restaurant_api_url + 'res_list?city='+city.toLowerCase(),
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true // Automatically stringifies the body to JSON
        }

        const restaurant_data = await rp(res_options);
        if(restaurant_data && Object.entries(restaurant_data.data).length > 0){
            var restaurant_ids = restaurant_data.data.map(function(item) {
                return item['_id'];
            });
            
            let order_options = {
                method: 'POST',
                uri: order_api_url + 'orders_amount',
                body: {
                    restaurantids: restaurant_ids,
                    fromdate : req.query.fromdate,
                    todate:req.query.todate
                },
                json: true // Automatically stringifies the body to JSON
            }

            const totalamount = await rp(order_options);
            if(totalamount && Object.entries(totalamount).length > 0 ){
                rest_helper.status = 'Success';
                rest_helper.code = 200;
                rest_helper.message = 'Successfully fetched order total amount of today.';
                rest_helper.response_data = totalamount;
            }else{
                rest_helper.status = 'Success';
                rest_helper.code = 204;
                rest_helper.message = 'No data.';
                rest_helper.response_data = [];
            }

        }else{
			rest_helper.status = 'Success';
            rest_helper.code = 204;
            rest_helper.message = 'No data.';
            rest_helper.response_data = [];
		}
    } catch (err) {
        //console.log(err);
        rest_helper.message = 'Failed to get order total amount'+ err.message;
    }

    rest_helper.sendResponse(res);
};