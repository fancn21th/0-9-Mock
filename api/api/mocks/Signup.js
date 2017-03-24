'use strict';
const jwt = require('jsonwebtoken')

const jwtSecret = 'fsdafdasfadsfdsa/asdfdas'

module.exports = {
    Signup : Signup
}

function Signup(req, res, next) {
    console.log(req.swagger.params.user.value.phone)

    const token = jwt.sign({
        phone: req.swagger.params.user.value.phone
    }, jwtSecret)

    res.json({
        errorcode: 200,
        errormsg: 'mock/there is an error',
        data:{
            userid: 1,
            tracenum: token
        }
    })
}
