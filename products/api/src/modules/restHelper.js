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

class RestHelper {
constructor(code, status, message) {
this.code = code;
this.status = status;
this.message = message;
this.responseData = [];
}
sendResponse(res) {
res.status(this.code).json({
success: this.success,
statusCode: this.code,
message: this.message,
data: this.responseData
});
}
}
const rest = __WRAPPED_new(RestHelper, 400, 'Failure', "Something happened, Failed to get resource.");
module.exports = rest;