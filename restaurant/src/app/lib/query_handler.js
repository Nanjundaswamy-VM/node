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

get_ids_by_city(element,value,fields) {
    return new Promise((resolve, reject) => {
        // get the entry with specified fields
        element.find({ city:new RegExp('^' +value + '$', 'i')},fields,function(err, data) {
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

find_entry(element,req_data) {
    return new Promise((resolve, reject) => {
        const queryObj = {}
        if(req_data.cuisine){
            queryObj.cuisines = { $eq: req_data.cuisine}
        }

        if(req_data.name){
            queryObj.name = { $eq: req_data.name} ;
        }
        if(req_data.ratings){
            queryObj.ratings = { $gte: req_data.ratings} ;
        }

        if(req_data.budget){
            queryObj.budget = { $lte: req_data.budget} ;
        }
		
		if(req_data.location){
            queryObj.city = { $eq: req_data.location} ;
        }
		if(req_data.menu){
            queryObj.menu =  { $elemMatch: { itemname: req_data.menu } } ;
        }
		if(req_data.distance){
		 let long =req_data.distance[0]
		 let latt =req_data.distance[1]
		 queryObj.location = {
		   $near: {
			$maxDistance: 10000,
			$geometry: {
			 type: "Point",
			 coordinates: [long, latt]
			}
		   }
		  }
        }
        console.log(queryObj);
        element.find({ $and : [queryObj]}, function (err, docs) {
            if (err) {
                reject(err);
            }else{
                console.log(docs);
                resolve(docs);
            }
        });
        
    })
}

}
const query_obj = new Query_handler();
module.exports = query_obj;