const errorHandler = require('./error');
const jwt = require('jsonwebtoken');

function verifyUser(req, res, next) {
    // Access the full cookie object from req.cookies
    const cookies = req.cookies;

    // Respond with the full cookie object
    res.status(200).json(cookies);
}

module.exports = verifyUser;
