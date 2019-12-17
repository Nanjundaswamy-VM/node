/**
 * @file
 * Library file to handle the query related function.
 */

'use strict';

//QueryHandler class
class QueryHandler {

    /**
     * @name saveEntry
     * @desc to create the order entry in db.
     * @input DB element to save
     * @output order obj / err obj
     */
    saveEntry(element) {
        return new Promise((resolve, reject) => {
            // save the order
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
     * @name getOrderList
     * @desc to get the order list based on query params.
     * @input DB element and queries
     * @output order objs / err obj
     */
    getOrderList(element, querys,paginationLimit) {
        return new Promise((resolve, reject) => {
            let skipVal = querys.pageNo ? parseInt(querys.pageNo) - 1 : 0;
            let limitVal = paginationLimit ? parseInt(paginationLimit) : 9;
            //query object consturction based on input 
            const queryObj = {}
            if (querys.restaurantids) {
                queryObj.restaurant_id = { $in: querys.restaurantids }
            }

            if (querys.fromdate && querys.todate) {
                queryObj.created_at = { $gte: new Date(querys.fromdate), $lt: new Date(querys.todate) }
            }
            skipVal = limitVal * skipVal;
            limitVal = limitVal;
            
            // get the entry with specified fields
            element.find({ $and: [queryObj] }).skip(skipVal).limit(limitVal).exec( function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        })
    }

    /**
     * @name getOrdersAmount
     * @desc to get the total order amount based on query params.
     * @input DB element and queries
     * @output order amount objs / err obj
     */

    getOrdersAmount(element, querys) {
        return new Promise((resolve, reject) => {
            //query object consturction based on input 
            const queryObj = {}
            if (querys.restaurantids) {
                queryObj.restaurant_id = { $in: querys.restaurantids }
            }

            if (querys.fromdate && querys.todate) {
                queryObj.created_at = { $gte: new Date(querys.fromdate), $lt: new Date(querys.todate) }
            }

            // get the entry with specified fields
            element.aggregate([{ $match: { $and: [queryObj] } }, { $group: { _id: null, sum: { $sum: "$orderamount" } } }], function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        })
    }

    /**
     * @name getEntryById
     * @desc to get the order based on id.
     * @input DB element and orderid
     * @output order obj / err obj
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
     * @name getEntryFieldsById
     * @desc to get the order based on id..
     * @input DB element,orderid and fields
     * @output order obj / err obj
     */
    getEntryFieldsById(element, id, fields) {
        return new Promise((resolve, reject) => {
            // get the entry with specified fields
            element.findById(id, fields, function (err, data) {
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
     * @desc to update the order based on id.
     * @input DB element,orderid and fields
     * @output order obj / err obj
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

}
const queryObj = new QueryHandler();
module.exports = queryObj;