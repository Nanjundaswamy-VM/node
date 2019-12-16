'use strict';

class Rest_helper {
    constructor(code,status,message) {
        this.code = code;
        this.status = status;
        this.message = message;
        this.response_data = [];
    }

    sendResponse(res){
        //console.log(res);
        res.status(this.code).json({
            success : this.status,
            statusCode : this.code,
            message: this.message,
            data : this.response_data
        });
    }

}
const rest  = new Rest_helper(400,'Failure',"Something happened, Failed to get resource.");
module.exports = rest;