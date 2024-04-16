const express = require('express');
const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db');
const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';

router.use(express.json());

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.email;
    const password = req.body.pass;

    //check user already present in database
    const isUserPresent = await User.findOne({
        username: username,
        password: password
    })

    if (isUserPresent) {
        return res.status(403).json({
            msg: "User already present in database"
        })
    }

    await User.create({
        username: username,
        password: password
    })

    res.json({
        msg: "User created successfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    //check user is present in database
    const checkPresence = await User.findOne({
        username: username,
        password: password
    })

    if (checkPresence) {
        try {
            const token = jwt.sign({ username }, jwtPassword)
            res.json({
                token: token
            })
        }
        catch (e) {
            return res.status(403).json({
                msg: "Something went wrong"
            })
        }
    }
    else {
        return res.json({
            msg: "Email and password is incorrect"
        })
    }
});

router.get('/courses', async (req, res) => {
    //check users authentication
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];

    try {
        const decodedtoken = jwt.verify(jwtToken, jwtPassword);
        if (!decodedtoken.username) {
            return res.status(403).json({
                msg: "You are not authorized to access courses"
            })
        }
    }
    catch (e) {
        return res.json({
            msg: "Incorrect Input"
        })
    }

    // Implement listing all courses logic
    const allCourses = await Course.find({});
    res.json({
        courses: allCourses
    })

});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.username;  //from the middleware

    // Implement course purchase logic
    const check = await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })

    res.json({
        msg: "Course purchased successfully"
    })

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({ username: req.username });

    const courseDetails = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })

    res.json({
        courses: courseDetails
    })
});

module.exports = router