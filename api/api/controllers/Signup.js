'use strict';

module.exports = {
    Signup : Signup
}

function Signup(req, res, next) {
    res.json({
        errorcode: 200,
        errormsg: 'there is an error',
        data:{
            userid: 1,
            tracenum: 'there is a trace number'
        }
    })
}
