'use strict';
class Query_handler {
    
 save_entry(element) {
    return new Promise((resolve, reject) => {
        // save the order
        element.save(function(err,data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

get_order_list(element,querys){
    return new Promise((resolve, reject) => {
        const queryObj = {}
        if(querys.restaurantids){
            queryObj.restaurant_id = { $in : querys.restaurantids}
        }

        if(querys.fromdate && querys.todate){
            queryObj.created_at = {$gte:  new Date(querys.fromdate), $lt:  new Date(querys.todate)}
        }
        
        // get the entry with specified fields
        element.find({ $and : [queryObj]},function(err, data) {
            if (err) {
                reject(err);
            }else{
                resolve(data);
            }
        });
    })
}

get_orders_amount(element,querys){
    return new Promise((resolve, reject) => {
        const queryObj = {}
        if(querys.restaurantids){
            queryObj.restaurant_id = { $in : querys.restaurantids}
        }

        if(querys.fromdate && querys.todate){
            queryObj.created_at = {$gte:  new Date(querys.fromdate), $lt:  new Date(querys.todate)}
        }
        console.log(querys);
        // get the entry with specified fields
        element.aggregate([{$match:{ $and : [queryObj]}},{ $group: {_id : null, sum : { $sum: "$orderamount" } } }],function(err, data) {
            if (err) {
                //console.log(err)
                reject(err);
            }else{
                resolve(data);
            }
        });
    })
}

 get_entry_by_id(element,id) {
    return new Promise((resolve, reject) => {
        // get the entry
        element.findById(id, function(err, data) {
            if (err) {
                reject(err);
            }else{
                resolve(data);
            }
        });
    })
}

 get_entry_fields_by_id(element,id,fields) {
    return new Promise((resolve, reject) => {
        // get the entry with specified fields
        element.findById(id, fields,function(err, data) {
            if (err) {
                reject(err);
            }else{
                resolve(data);
            }
        });
    })
}

 update_entry(element,id,fields) {
    return new Promise((resolve, reject) => {
        // update the entry
        element.updateOne({ '_id': Object(id) }, fields, function(err, data) {
            if (err) {
                reject(err);
            }else{
                resolve(data);
            }
        });
    })
}

}
const query_obj = new Query_handler();
module.exports = query_obj;