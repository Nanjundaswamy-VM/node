'use strict';

const Restaurant = require('../models/restaurant')
const restHelper = require('../lib/restHelper')
const querObj = require('../lib/queryHandler');
const { paginationLimit, serByDistance } = require('../config/index')

// get restuarant by lat and lang
exports.search = async (req, res) => {
    restHelper.message = "Failed to save restuarant"
    try {
        let data = await querObj.findEntry(Restaurant, req.body, serByDistance, paginationLimit)
        if (Object.entries(data).length > 0) {
            restHelper.status = 'Success';
            restHelper.code = 200;
            restHelper.message = 'Successfully fetched the restaurant list.';
            restHelper.responseData = data;
        } else {
            restHelper.status = 'Success';
            restHelper.code = 204;
            restHelper.message = 'No data.';
            restHelper.responseData = data;
        }
    } catch (err) {
        restHelper.message = 'Failed to save ' + err.message
    }

    restHelper.sendResponse(res)
};

exports.create = async (req, res) => {
    restHelper.message = "Failed to save restuarant"
    try {

        // Create a order var
        const restaurant = new Restaurant({
            name: req.body.name,
            city: req.body.city,
            address: req.body.address,
            cuisines: req.body.cuisines,
            zipcode: req.body.zipcode,
            budget: req.body.budget,
            ratings: req.body.ratings,
            phonenumber: req.body.phonenumber,
            location: req.body.location,
            created_at: new Date(),
            menu: req.body.items
        });

        let data = await querObj.saveEntry(restaurant)
        if (data) {
            restHelper.status = 'Success';
            restHelper.code = 200;
            restHelper.message = 'successfully.';
            restHelper.responseData = data;
        }

    } catch (err) {
        restHelper.message = 'Failed to save ' + err.message
    }

    restHelper.sendResponse(res)
}
// get restuarant by city
exports.resList = async (req, res) => {
    restHelper.message = "Failed to get restuarant list"
    try {
        let data = await querObj.getIdsByCity(Restaurant, req.query.city, '_id')
        if (Object.entries(data).length !== 0) {
            restHelper.status = 'Success';
            restHelper.code = 200;
            restHelper.message = 'Successfully fetched the restuarant list.';
            restHelper.responseData = data;
        } else {
            restHelper.status = 'Success';
            restHelper.code = 204;
            restHelper.message = 'No data.';
            restHelper.responseData = data;
        }
    } catch (err) {
        restHelper.message = 'Failed to get restuarant list ' + err.message
    }
    restHelper.sendResponse(res)
};
