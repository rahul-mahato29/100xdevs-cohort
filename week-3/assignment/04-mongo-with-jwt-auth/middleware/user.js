const { request } = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];

    try{
        const decodedToken = jwt.verify(jwtToken, jwtPassword);
        if(decodedToken.username){
            req.username = decodedToken.username
            next();
        }
        else{
            return res.status(403).json({
                msg: "You are not authorized"
            })
        }
    }
    catch(e){
        return res.status(403).json({
            msg: "Incorrect Input"
        })
    }
}

module.exports = userMiddleware;


//few things that middleware do:
// 1. End the request (if credentials are wrong)
// 2. forward the request
// 3. pass data along to the next() middleware.