const errorHandler = require('./error');
const jwt = require('jsonwebtoken');

function verifyUser(req, res, next) {
    // Access the full cookie object from req.cookies
    const token = req.headers;
if (!token) {
        return token
    }
 jwt.verify(token,"cnbfR@@^bsbsdbsbg$@", (err, user) => {
        if (err) {
            return next(errorHandler(403,'Forbidden'))
        }
        req.user = user;
        next();
    });
}

module.exports = verifyUser;
