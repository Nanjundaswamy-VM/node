/**
 * @file
 * service file to handle report related api calls
 */

'use strict';

const rp = require('request-promise');
const restHelper = require('../lib/restHelper')
const { check, validationResult } = require('express-validator');
const orderApiUrl = "http://localhost:8082/order/";
const restaurantApiUrl = "http://localhost:8083/restaurant/";

// get orders list
exports.ordersList = async (req, res) => {
    restHelper.message = "Failed to get order list"
    try {
        let city = req.query.city;
        let resOptions = {
            method: 'GET',
            uri: restaurantApiUrl + 'resList?city=' + city.toLowerCase(),
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true // Automatically stringifies the body to JSON
        }

        // fetching rest ids
        const restaurantData = await rp(resOptions);
        if (restaurantData && Object.entries(restaurantData.data).length > 0) {
            var restaurant_ids = restaurantData.data.map(function (item) {
                return item['_id'];
            });

            let orderOptions = {
                method: 'POST',
                uri: orderApiUrl + 'orderList',
                body: {
                    restaurantids: restaurant_ids,
                    fromdate: req.query.fromdate,
                    todate: req.query.todate,
                    pageNo: req.query.pageNo
                },
                json: true // Automatically stringifies the body to JSON
            }

            const orderListData = await rp(orderOptions);
            if (orderListData && Object.entries(orderListData.data).length > 0) {
                restHelper.status = 'Success';
                restHelper.code = 200;
                restHelper.message = 'Successfully fetched order list of today.';
                restHelper.responseData = orderListData.data;
            } else {
                restHelper.status = 'Success';
                restHelper.code = 204;
                restHelper.message = 'No data.';
                restHelper.responseData = [];
            }

        } else {
            restHelper.status = 'Success';
            restHelper.code = 204;
            restHelper.message = 'No data.';
            restHelper.responseData = [];
        }
    } catch (err) {
        //console.log(err);
        restHelper.message = 'Failed to get order list ' + err.message;
    }

    restHelper.sendResponse(res);
};

// get total amount of all orders
exports.ordersTotalAmount = async (req, res) => {
    restHelper.message = "Failed to get order total amount"

    try {
        let city = req.query.city;

        let resOptions = {
            method: 'GET',
            uri: restaurantApiUrl + 'resList?city=' + city.toLowerCase(),
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true // Automatically stringifies the body to JSON
        }

        const restaurantData = await rp(resOptions);
        if (restaurantData && Object.entries(restaurantData.data).length > 0) {
            var restaurant_ids = restaurantData.data.map(function (item) {
                return item['_id'];
            });

            let orderOptions = {
                method: 'POST',
                uri: orderApiUrl + 'ordersAmount',
                body: {
                    restaurantids: restaurant_ids,
                    fromdate: req.query.fromdate,
                    todate: req.query.todate
                },
                json: true // Automatically stringifies the body to JSON
            }

            const totalAmount = await rp(orderOptions);
            if (totalAmount && Object.entries(totalAmount.data).length > 0) {
                restHelper.status = 'Success';
                restHelper.code = 200;
                restHelper.message = 'Successfully fetched order total amount of today.';
                restHelper.responseData = totalAmount.data;
            } else {
                restHelper.status = 'Success';
                restHelper.code = 204;
                restHelper.message = 'No data.';
                restHelper.responseData = [];
            }

        } else {
            restHelper.status = 'Success';
            restHelper.code = 204;
            restHelper.message = 'No data.';
            restHelper.responseData = [];
        }
    } catch (err) {
        //console.log(err);
        restHelper.message = 'Failed to get order total amount' + err.message;
    }

    restHelper.sendResponse(res);
};