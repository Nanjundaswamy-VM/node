/**
 * @file
 * Library file to handle the query related function.
 */

'use strict';
class QueryHandler {
    /**
     * @name saveEntry
     * @desc to create the resturant entry in db.
     * @input DB element to save
     * @output resturant obj / err obj
     */
    saveEntry(element) {
        return new Promise((resolve, reject) => {
            // save the resturant
            element.save(function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        })
    }

    /**
        * @name getEntryById
        * @desc to get the restaurant based on id.
        * @input DB element and restaurantid
        * @output restaurant obj / err obj
        */
    getEntryById(element, id) {
        return new Promise((resolve, reject) => {
            // get the entry
            element.findById(id, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        })
    }

    /**
     * @name getIdsByCity
     * @desc to get the restaurantids based city name
     * @input DB element and city
     * @output restaurant obj / err obj
     */

    getIdsByCity(element, value, fields) {
        return new Promise((resolve, reject) => {
            // get the entry with specified fields
            element.find({ city: new RegExp('^' + value + '$', 'i') }, fields, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        })
    }

    /**
         * @name updateEntry
         * @desc to update the restaurant based on id.
         * @input DB element,restaurantid and fields
         * @output restaurant obj / err obj
         */
    updateEntry(element, id, fields) {
        return new Promise((resolve, reject) => {
            // update the entry
            element.updateOne({ '_id': Object(id) }, fields, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        })
    }

    /**
         * @name findEntry
         * @desc to search the restaurant based on input params.
         * @input DB element,serByDistance and fields
         * @output restaurant obj / err obj
         */
    findEntry(element, reqData, serByDistance, paginationLimit) {
        return new Promise((resolve, reject) => {
            const queryObj = {}
            let skipVal = reqData.pageNo ? parseInt(reqData.pageNo) - 1 : 0;
            let limitVal = paginationLimit ? parseInt(paginationLimit) : 9;
            if (reqData.cuisine) {
                let cus = new RegExp('^' + reqData.cuisine + '$', 'i');
                queryObj.cuisines = { $regex: cus }
            }

            if (reqData.name) {
                let name = new RegExp('^' + reqData.name + '$', 'i');
                queryObj.name = { $regex: name }
            }
            if (reqData.ratings) {
                queryObj.ratings = { $gte: reqData.ratings };
            }

            if (reqData.budget) {
                queryObj.budget = { $lte: reqData.budget };
            }

            if (reqData.location) {
                let location = new RegExp('^' + reqData.location + '$', 'i');
                queryObj.city = { $regex: location };
            }
            if (reqData.menu) {
                let menu = new RegExp('^' + reqData.menu + '$', 'i');
                queryObj.menu = { $elemMatch: { itemname: { $regex: menu } } };
            }
            if (reqData.distance) {
                let long = reqData.distance[0]
                let latt = reqData.distance[1]
                queryObj.location = {
                    $near: {
                        $maxDistance: serByDistance,
                        $geometry: {
                            type: "Point",
                            coordinates: [long, latt]
                        }
                    }
                }
            }
            skipVal = limitVal * skipVal;
            limitVal = limitVal;
            element.find({ $and: [queryObj] }).skip(skipVal).limit(limitVal).exec(function (err, docs) {
                if (err) {
                    reject(err);
                } else {
                    resolve(docs);
                }
            });

        })
    }
}
const queryObj = new QueryHandler();
module.exports = queryObj;