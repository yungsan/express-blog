const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
    try {
        // get signedCookies
        const token = req.signedCookies.loginToken;
        const verified = jwt.verify(token, process.env.TOKEN);
        
        // get token form cookie then set it to header
        req.userID = verified;
        next();
    } catch (error) {
        res.redirect('/account');
        res.status(500).json('Invalid token');
    }
}