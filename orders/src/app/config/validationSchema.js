// load Joi module
const Joi = require('joi');

// accepts name only as letters and converts to uppercase
const name = Joi.string().regex(/^[a-zA-Z0-9_.- ]+$/).lowercase();

const placeOrderSchema = Joi.object().keys({
    customerid: Joi.number().required(),
    restaurant_id: Joi.alphanum(),

});

// updateOrderschema
const updateOrderSchema = Joi.object({
    customerid: Joi.number().required(),
    restaurant_id: Joi.alphanum(),
});

// export the schemas
module.exports = {
    '/place': placeOrderSchema,
    '/update/:id': updateOrderSchema,
};