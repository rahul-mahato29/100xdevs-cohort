const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];

    try{
        const decodeValue = jwt.verify(jwtToken, jwtPassword);
        if(decodeValue.username){
           next();
        }
        else{
            res.json({
                msg: "You are not authenticated"
            })
        }
    }
    catch(e){
        return res.status(403).json({
            msg: "Incorrect Input"   
        })
    }
}

module.exports = adminMiddleware;