/**
 * @file
 * model file to handel order schema.
 */

'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema

//defining schema
let orderSchema = new Schema({
    customerid: { type: Number, required: true },
    orderamount: { type: Number, required: true },
    updated_at: { type: Date, default: Date.now },
    restaurant_id: { type: String, required: true },
    items: [{
        itemname: { type: String, required: true, minlength: 3, maxlength: 1000 },
        quantity: { type: Number, required: true },
        amount: { type: Number, required: true }
    }],
    created_at: { type: Date },
    delivery_address: { type: String },
    delivered_status: { type: Boolean, default: 0 },
    order_status: { type: Boolean, default: 1 }
})


// Export the model
module.exports = mongoose.model('order', orderSchema)