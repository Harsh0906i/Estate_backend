const errorHandler = require('./error');
const jwt = require('jsonwebtoken');

function verifyUser(req, res, next) {
    const token = req.session.token; // Retrieve token from session
    if (!token) {
        return next(errorHandler(401, 'Authentication failed: No token provided.'));
    }

    jwt.verify(token, "cnbfR@@^bsbsdbsbg$@", (err, user) => {
        if (err) {
            return next(errorHandler(403, 'Forbidden: Invalid token.'));
        }
        req.user = user;
        next();
    });
};

module.exports = verifyUser;
