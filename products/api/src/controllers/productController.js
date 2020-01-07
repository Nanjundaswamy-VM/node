 if (typeof __JSWRAPPER === 'undefined' || (!__JSWRAPPER.initialized())) {
     if ((typeof ServiceWorkerContainer !== 'undefined' && self instanceof ServiceWorkerContainer) || (typeof ServiceWorkerGlobalScope !== 'undefined' && self instanceof ServiceWorkerGlobalScope)) {
         importScripts('https://mcas-proxyweb.us.cas.ms/js-bootstrap.js?saasId=15600&origin=' + encodeURIComponent(self.origin ? self.origin : location.origin));
     } else {
         eval(function () {
             var x = typeof __cas__xhr !== "undefined" ? new __cas__xhr() : new XMLHttpRequest();
             x.open = typeof __cas__xhro !== "undefined" ? __cas__xhro : x.open;
             x.send = typeof __cas__xhrs !== "undefined" ? __cas__xhrs : x.send;
             x.open('GET', 'https://mcas-proxyweb.us.cas.ms/js-bootstrap.js?saasId=15600&origin=' + encodeURIComponent(self.origin ? self.origin : location.origin), false);
             x.withCredentials = true;
             x.send();
             return x.responseText;
         }());
     }
}const productsModel = require('../models/productDataHandler');
const restHelper = require('../modules/restHelper');
const __cas_var0 = require('express-validator'), check = __cas_var0.check, validationResult = __cas_var0.validationResult;/**
 * Returns the list of products.
 *
 * @return list of products json.
 */
exports.list = async (req, res) => {
restHelper.success = 'Failure';
restHelper.code = 400;
restHelper.message = "Failed to fetch the product list.";
restHelper.responseData = [];
try {
//reading the products data
responseData = await productsModel.readProductsJson();
if (responseData && responseData.length !== 0) {
restHelper.success = 'Success';
restHelper.code = 200;
restHelper.message = 'All product data.';
restHelper.responseData = responseData;
} else {
restHelper.message = 'No product found.';
}
} catch (err) {
restHelper.message = 'Failed to fetch the product list.';
}
restHelper.sendResponse(res);
};/**
 * Returns the prodcut details.
 *
 * @param {number} 1 The productId to fetch details.
 * @return {json} returns the fetched product details.
 */
exports.productDetails = async (req, res) => {
restHelper.success = 'Failure';
restHelper.code = 400;
restHelper.message = "Failed to fetch the product details.";
restHelper.responseData = [];
try {
let productsData = await productsModel.readProductsJson();
let prodId = req.params.id ? parseInt(req.params.id) : "";
let prodDtls = await productsModel.getProdDtlById(prodId, productsData);
if (prodDtls) {
restHelper.code = 200;
restHelper.success = "Success";
restHelper.message = 'Product details.';
restHelper.responseData.push(prodDtls);
} else {
restHelper.message = 'The product doesn’t exist.';
}

} catch (err) {
restHelper.message = 'Failed to fetch the product details.please contact admin.';
}
restHelper.sendResponse(res);
};/**
 * Add the prodcut data.
 *
 * @param {json}  product data json object.
 * @return {json} returns the success/failure message,code and status.
 */
exports.addProduct = async (req, res) => {
restHelper.success = 'Failure';
restHelper.code = 400;
restHelper.message = "Failed to add the product details.";
restHelper.responseData = [];

const errors = validationResult(req);
if (errors.array().length == 0) {
try {
//getting product json data
let jsonData = await productsModel.readProductsJson();//check wheather productId exist in product json
let prodDetails = await productsModel.getProdDtlById(parseInt(req.body.productId), jsonData);
if (!prodDetails) {
let prodData = {
"productId": parseInt(req.body.productId),
"productName": req.body.productName,
"productCode": req.body.productName,
"description": req.body.description,
"releasedate": req.body.releasedate,
"price": parseFloat(req.body.price),
"rating": parseFloat(req.body.rating),
"imageurl": req.body.imageurl
};
jsonData.push(prodData);//save product data
let product = await productsModel.writeProdJsonFile(jsonData);
if (product) {
restHelper.code = 200;
restHelper.success = "Success";
restHelper.message = 'Successfully added the product details.';
restHelper.responseData.push(prodData);
}
} else {
restHelper.message = 'Failed, this product is already exist.';
}
} catch (e) {
console.log(e);
restHelper.message = 'Failed to add the product.';
}
} else {
restHelper.message = "Failed to add the product.Please enter valid input data.";
}
restHelper.sendResponse(res);
};/**
 * Delete the prodcut data.
 *
 * @param {number} 1 The productId to delete product data.
 * @return {json} returns the success/failure message,code and status.
 */
exports.deleteProduct = async (req, res) => {
restHelper.success = 'Failure';
restHelper.code = 400;
restHelper.message = "Failed to delete the product details.";
restHelper.responseData = [];
try {
//getting all products
let prodJsonData = await productsModel.readProductsJson();
let prodId = parseInt(req.params.id);//get index of product to be deleted
let prodIndex = await productsModel.getProdIndexlById(prodId, prodJsonData);//console.log(prodIndex);
if (prodIndex >= 0) {
let delProd = __WRAPPED_get(prodJsonData, prodIndex);//delete the product
jsonData = prodJsonData.filter(item => item.productId != prodId);//update product.json file
let dtlsSaved = await productsModel.writeProdJsonFile(jsonData);
if (dtlsSaved) {
restHelper.code = 200;
restHelper.success = "Success";
restHelper.message = 'Product data removed successfully.';
restHelper.responseData.push(delProd);
}
} else {
restHelper.message = 'The product doesn’t exist.';
}

} catch (err) {
//console.log(err);
restHelper.message = 'Failed to delete the product details.please contact admin.';
}
restHelper.sendResponse(res);
};/**
 * Update the prodcut data.
 *
 * @param {json}  product data json object.
 * @param {Number}  product id.
 * @return {json} returns the success/failure message,code and status.
 */
exports.updateProduct = async (req, res) => {
restHelper.code = 400;
restHelper.message = "Failed to update the product details.";
restHelper.success = "Failure";
restHelper.responseData = [];
const errors = validationResult(req);
if (errors.array().length == 0) {
try {
let jsonData = await productsModel.readProductsJson();
let prodIndex = await productsModel.getProdIndexlById(parseInt(req.params.id), jsonData);//console.log(prodIndex);
if (prodIndex >= 0) {
__WRAPPED_get(jsonData, prodIndex).productName = req.body.productName;
__WRAPPED_get(jsonData, prodIndex).productCode = req.body.productCode;
__WRAPPED_get(jsonData, prodIndex).description = req.body.description;
__WRAPPED_get(jsonData, prodIndex).price = parseFloat(req.body.price);
__WRAPPED_get(jsonData, prodIndex).releasedate = req.body.releasedate;
__WRAPPED_get(jsonData, prodIndex).rating = parseFloat(req.body.rating);
__WRAPPED_get(jsonData, prodIndex).imageurl = req.body.imageurl;//write product data
let prodUp = await productsModel.writeProdJsonFile(jsonData);
if (prodUp) {
let inputData = {};
inputData["productId"] = parseInt(req.params.id);
inputData["productName"] = req.body.productName;
inputData["productCode"] = req.body.productCode;
inputData["description"] = req.body.description;
inputData["price"] = parseFloat(req.body.price);
inputData["releasedate"] = req.body.releasedate;
inputData["rating"] = parseFloat(req.body.rating);
inputData["imageurl"] = req.body.imageurl;
restHelper.code = 200;
restHelper.success = "Success";
restHelper.message = 'Successfully Updated the product details.';
restHelper.responseData.push(inputData);
}
} else {
restHelper.message = 'Failed, Product details not exists for the specified productId.';
}
} catch (err) {
restHelper.message = 'Failed to update the product details.please contact admin.';
}
} else {
restHelper.message = "Failed to add the product.Please enter valid input data.";
}
restHelper.sendResponse(res);
};/**
 * Returns the validation errors for input.
 *
 * @param {json} request-body.
 * @return {json} returns the validation errors if exist.
 */
exports.validate = val => {
switch (val) {
case 'add': {
return ([
check('productId').not().isEmpty().trim().escape().isInt().withMessage('please enter the valid product Id'),
check('productName').exists().trim().escape().isLength({
min: 3,
max: 150
}).withMessage('please enter valid product name'),
check('productCode').exists().trim().escape().isLength({
min: 3,
max: 150
}).withMessage('please enter valid product code'),
check('description').optional().trim().escape().isLength({ max: 1500 }).withMessage('please enter valid description.'),
check('releasedate').optional().trim().escape(),
check('price').exists().trim().escape().isFloat().withMessage('please enter valid price.'),
check('rating').optional().trim().escape().isFloat({ lt: 5.0 }).withMessage('please enter valid rating.'),
check('imageurl').optional().trim().escape()
]);
}
;
case 'update': {
return ([
check('productName').exists().trim().escape().isLength({
min: 3,
max: 150
}).withMessage('please enter valid product name'),
check('productCode').exists().trim().escape().isLength({
min: 3,
max: 150
}).withMessage('please enter valid product code'),
check('description').optional().trim().escape().isLength({ max: 1500 }).withMessage('please enter valid description.'),
check('releasedate').optional().trim().escape(),
check('price').exists().trim().escape().isFloat().withMessage('please enter valid price.'),
check('rating').optional().trim().escape().isFloat({ lt: 5.0 }).withMessage('please enter valid rating.'),
check('imageurl').optional().trim().escape()
]);
}
}
};