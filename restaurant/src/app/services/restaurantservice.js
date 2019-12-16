'use strict';

const Restaurant = require('../models/restaurant')
const rest_helper = require('../lib/rest_helper')
const query_obj = require('../lib/query_handler');

// get restuarant by lat and lang
exports.search = async (req, res) => {
    rest_helper.message = "Failed to save restuarant"
    
    try {
        let data = await query_obj.find_entry(Restaurant,req.body)
        if(Object.entries(data).length > 0 ){
            rest_helper.status = 'Success';
            rest_helper.code = 200;
            rest_helper.message = 'Successfully fetched the restaurant list.';
            rest_helper.response_data = data;
        }else{
			rest_helper.status = 'Success';
            rest_helper.code = 204;
            rest_helper.message = 'No data.';
            rest_helper.response_data = data;
		}
    }catch (err) {
        //console.log(err);
        rest_helper.message = 'Failed to save '+ err.message
    }

    rest_helper.sendResponse(res)
};

exports.create = async (req, res) => {
    rest_helper.message = "Failed to save restuarant"
    
    try {
        
        // Create a order var
        const restaurant = new Restaurant({
            name: req.body.name, 
            city: req.body.city,
            address:  req.body.address,
            cuisines: req.body.cuisines, 
            zipcode: req.body.zipcode,
            budget:  req.body.budget,
            ratings: req.body.ratings, 
            phonenumber: req.body.phonenumber,
            location: req.body.location,
            created_at: new Date(),
            menu: req.body.items
        });

        let data = await query_obj.save_entry(restaurant)
        if(data){
            rest_helper.status = 'Success';
            rest_helper.code = 200;
            rest_helper.message = 'successfully.';
            rest_helper.response_data = data;
        }
        
    } catch (err) {
        //console.log(err);
        rest_helper.message = 'Failed to save '+ err.message
    }

    rest_helper.sendResponse(res)
}
// get restuarant by city
exports.res_list = async (req, res) => {
    rest_helper.message = "Failed to get restuarant list"
    try {
        let data = await query_obj.get_ids_by_city(Restaurant,req.query.city,'_id')
        if(Object.entries(data).length !== 0){
            rest_helper.status = 'Success';
            rest_helper.code = 200;
            rest_helper.message = 'Successfully fetched the restuarant list.';
            rest_helper.response_data = data;
        }else{
			rest_helper.status = 'Success';
            rest_helper.code = 204;
            rest_helper.message = 'No data.';
            rest_helper.response_data = data;
		}
    }catch (err) {
        //console.log(err);
        rest_helper.message = 'Failed to get restuarant list '+ err.message
    }
    rest_helper.sendResponse(res)
};
