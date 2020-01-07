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
}'use strict';

const fs = require('fs');
const globalConfig = require('../config/config');

class ProductDataHandler {
constructor(fileName) {
this.fileName = fileName;
}/**
     * used to reade the product json file.
     *
     * @return products json.
     */
readProductsJson() {
let charSet = globalConfig.config.CHARSET;
return (__WRAPPED_new(Promise, (resolve, reject) => {
fs.readFile(this.fileName, charSet, (err, fileData) => {
if (err) {
reject(err);
} else {
try {
let data = JSON.parse(fileData);
resolve(data);
} catch (e) {
reject(err);
}
}
});
}));
}/**
     * used to get product details based on id.
     * 
     * @param {number} id product id
     * @param {json} product json
     * @return products details.
     */
getProdDtlById(id, data) {
return (__WRAPPED_new(Promise, (resolve, reject) => {
let resData = data.find(val => val.productId === parseInt(id));
resolve(resData);
}));
}/**
     * used to get product index value based on id.
     * 
     * @param {number} id product id
     * @param {json} product json
     * @return products index.
     */
getProdIndexlById(id, data) {
return (__WRAPPED_new(Promise, (resolve, reject) => {
let resData = data.findIndex(val => val.productId === id);
resolve(resData);
}));
}/**
     * used to Write product json to file
     *
     * @param {json} products json
     */
writeProdJsonFile(data) {
return (__WRAPPED_new(Promise, (resolve, reject) => {
data = JSON.stringify(data);
fs.writeFile(this.fileName, data, err => {
if (err) {
reject(err);
} else {
resolve(true);
}
});
}));
}
}
const product = __WRAPPED_new(ProductDataHandler, globalConfig.config.JSONFILE);
module.exports = product;