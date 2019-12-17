/**
 * @file
 * model file to handel order schema.
 */

'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema

//defining restaurantSchema
let restaurantSchema = new Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 1000 },
    city: { type: String, required: true },
    budget: { type: Number, required: true },
    updated_at: { type: Date, default: Date.now },
    ratings: { type: Number, default: 1.0, max: 5.0, min: 1.0 },
    cuisines: { type: Array, required: true },
    phonenumber: { type: Number, required: true },
    menu: [{
        itemname: { type: String, required: true, minlength: 3, maxlength: 1000 },
        desc: { type: String },
        price: { type: Number, required: true }
    }],
    location: {
        type: { type: String, enum: ['Point'], required: true },
        coordinates: { type: [Number], required: true }
    },
    created_at: { type: Date },
    address: { type: String },
    zipcode: { type: Number },
    status: { type: Boolean, default: 1 }
})

restaurantSchema.index({ location: "2dsphere" });

// Export the model
module.exports = mongoose.model('restaurant', restaurantSchema)