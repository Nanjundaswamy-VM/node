'use strict';
class Http_call_helper {
    
 fetchResult(res_pro,options) {
    res_pro(options)
    .then(function (body) {
        return body
    })
    .catch(function (err) {
        return err
    });
}

}

const http_call_helper_obj = new Http_call_helper();
module.exports = http_call_helper_obj;