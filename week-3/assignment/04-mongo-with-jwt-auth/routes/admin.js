const express = require('express');
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require('../db');
const jwt = require('jsonwebtoken');
const jwtPassword = "secret";

router.use(express.json()); 

// Admin Routes
router.post('/signup', async function(req, res){
    // Implement admin signup logic
    const username = req.body.email;
    const password = req.body.pass;

    //check user already present in the database
    const checkAdmin = await Admin.findOne({
        username: username,
        password: password
    })

    if(checkAdmin){
        return res.status(403).json({
            msg: "User already exist!"
        })
    }

    //update the user in the database
    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        msg: "User created successfully"
    })
});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const validateAdmin = await Admin.findOne({
        username: username,
        password: password
    })

    //generate the token, if user is valid
    if(validateAdmin){
        const token = jwt.sign({username}, jwtPassword)
        res.json({
            token: token
        })
    }
    else{
        return res.status(403).json({
            msg: "Incorrect Email and Password"
        })
    }
});

// Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }
//   Output: { message: 'Course created successfully', courseId: "new course id" }

//in the below post-courses, adminMiddleware will take care of authentication
router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price
    })

    res.json({
        msg: "Course created successfully", courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({});

    res.status(200).json({
        allCourses
    })
});

module.exports = router;