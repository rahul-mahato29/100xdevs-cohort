// A website has 2 endpoints :

// 1. POST/signin 
//    body - {
//        username : String,
//        password : String,
//    }
// Return a JSON web token with username encrypted. 

// 2. GET/users 
//    Headers - Authorization header

// Return an array of all the users if user is singed in (token is correct)
// And return 403 status code if not.

const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = '291101';  //we required a password to verify the users details from the token returned by jwt.
const app = express();
const port = 3000;

app.use(express.json());

const users = [
    {
        username: "rahul@gmail.com",
        password: "12345",
        name: "rahul mahato"
    },
    {
        username: "harkirt@gmail.com",
        password: "678910",
        name: "harkirt singh"
    },
    {
        username: "rookie@gmail.com",
        password: "54321",
        name: "rookie sharma"
    }
]

function userExists(username, password){
    //write a logic to return true or false if this user exists in users array
    const result = users.find(info => info.username === username && info.password === password);
    return result ? true : false;
}

app.post('/signin', function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    //if user doesn't exist.
    if(!userExists(username, password)){
        return res.status(403).json({
            msg: "User doesn't exist in our inmemory database"
        })
    }

    //if user exist, return a web token with username encrypted
    var token = jwt.sign({username: username}, jwtPassword);         //this jwt.sign() function will generate the token.
    return res.json({
        token,
    })
})

app.get('/users', function(req, res){
    const token = req.headers.authorization;  //put the authrization key and value as the json token inside the header(postman) during get request.

    try{
        //verfity the user
        const decoded = jwt.verify(token, jwtPassword);     //jwt.verify() function is use to verify the token.
        const username = decoded.username;

        //if user is verified, then return a list of users from the user array except the user logedin.
        const otherUsers = users.filter(info => info.username != username);
        return res.status(200).json(otherUsers);

    }catch(err){
        return res.status(403).json({
            msg: "Invalid Token"
        })
    }
})

app.listen(port, () => {
    console.log(`Port running at ${port}`);
})