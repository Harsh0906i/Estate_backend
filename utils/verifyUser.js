const errorHandler = require('./error')
const jwt = require('jsonwebtoken');

function verifyUser(req, res, next) {
    const token = req.cookies;
    res.send(token)
};

module.exports = verifyUser;


//
