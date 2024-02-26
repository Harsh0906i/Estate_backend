const errorHandler = require('./error')
const jwt = require('jsonwebtoken');

function verifyUser(req, res, next) {
    const token = req.cookies;
   next(errorHandler(403,token))
};

module.exports = verifyUser;


//
