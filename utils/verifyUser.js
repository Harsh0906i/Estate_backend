const errorHandler = require('./error')
const jwt = require('jsonwebtoken');

function verifyUser(req, res, next) {
    const token = req.cookies;
    res.status(404).json(token)
};

module.exports = verifyUser;


//
