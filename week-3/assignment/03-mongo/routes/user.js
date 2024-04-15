const express = require('express');
const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db');

router.use(express.json());

// User Routes
router.post('/signup', async function(req, res){
    // Implement user signup logic
    const username = req.body.email;
    const password = req.body.pass;

    //check user already exists
    const alreadyExists = await User.findOne({
        username: username,
        password: password
    })
    if(alreadyExists){
        return res.json({
            msg: "User already Exists!!"
        })
    }

    //updating the database with the user name and password
    User.create({
        username: username,
        password: password
    })

    res.json({
        msg: "User created successfully"
    })
});

router.get('/courses', async function(req, res){
    //check the user is authenticated or not ?
    const username = req.headers.username;
    const password = req.headers.password;

    const checkUser = await User.findOne({
        username: username,
        password: password
    })
    if(!checkUser){
        return res.status(403).json({
            msg : "User doesn't exist!!"
        })
    }

    // Implement listing all courses logic
    const courseDetails = await Course.find({});

    res.status(200).json({
        courseDetails
    })
});

router.post('/courses/:courseId', userMiddleware, async function(req, res){
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    //updating the database with the purchase details for the specific user
    await User.updateOne({
        username: username
    },{
        "$push": {
            purchasedCourses: courseId
        }
    })

    res.json({
        msg: "purchase complete"
    })
});

router.get('/purchasedCourses', userMiddleware, async function(req, res){
    // Implement fetching purchased courses logic
    const user = await User.findOne({username: req.headers.username});

    const courseDetails = await Course.find({
        _id : {
            "$in": user.purchasedCourses    //refer below
        }
    })

    res.json({
        courses: courseDetails
    })
});

module.exports = router


//"$in": user.purchasedCourses

//"$in": This is the $in operator. It allows you to specify an array of values, and the query will match documents
//       where the specified field's value equals any value in the array.