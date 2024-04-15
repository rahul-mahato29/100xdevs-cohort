const {User} = require('../db');

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    const checkUser = await User.findOne({
        username: username,
        password: password
    })

    if(!checkUser){
        return res.status(403).json({
            msg: "User doesn't exist in the Database"
        })
    }

    next();
}

module.exports = userMiddleware;