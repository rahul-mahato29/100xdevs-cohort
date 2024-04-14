// A website has 3 endpoints :

// 1. POST/signup 
//    body - {
//     username : string,
//     password : string,
//     fristName: string
//    }
// Take username and password from the user and put in the database, provided someone
// with the given username should not already exist in the database. If already present 
// return 403, username already exist. 

// 2. POST/signin 
//    body - {
//        username : String,
//        password : String,
//    }
// if username and password correct, Return a JSON web token with username encrypted. 

// 3. GET/users 
//    Headers - Authorization header (jwt token in the header for the verification)

// Return all the users present in the database, if user is singed in (token is correct)
// And return 403 status code if not.

const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const jwtPassword = '291101';  //we required a password to verify the users details from the token returned by jwt.
const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect(
    //your_mongo_url
);

//defining database schema
const User = mongoose.model("Users", {
    name: String,
    email: String,
    password: String
});

app.post('/signup', async function(req, res){
    //taking users details from the user, for now we are using postman.
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    // //check this user is already present or not, if present return 403 - user already exist ?
    const result = await User.findOne({email : email});
    if(result){
        return res.json({
            msg: "User already exists!"
        })
    }

    //storing user data inside database
    const user = new User({
        name: name,
        email: email,
        password: password
    })

    user.save();
    res.status(200).json({
        msg: "Database Updated!!"
    })
})


app.post('/signin',async function(req, res){
    const email = req.body.email;
    console.log(email)
    const password = req.body.password;

    // if user doesn't exist.
    const result = await User.findOne({email : email});
    if(!result){
        return res.status(403).json({
            msg: "User doesn't exist in our database"
        })
    }

    //if user exist, return a web token with email encrypted
    var token = jwt.sign({email: email}, jwtPassword);         //this jwt.sign() function will generate the token.
    res.json({
        token,
    })
})

app.get('/users', async function(req, res){
    const token = req.headers.authorization;  //put the authrization key and value as the json token inside the header(postman) during get request.

    try{
        //verfity the user
        const decoded = jwt.verify(token, jwtPassword);     //jwt.verify() function is use to verify the token.
        const email = decoded.email;
        
        // if user is verified, then return a list of users from the user array except the user logedin.
        const UserInfo = await User.findOne({email : email})
        return res.status(200).json(UserInfo);  //right now we are only returning users information.

    }catch(err){
        return res.status(403).json({
            msg: "Invalid Token"
        })
    }
})

app.listen(port, () => {
    console.log(`Port running at ${port}`);
})