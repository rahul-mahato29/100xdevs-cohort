const express = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin, Course} = require("../db")
const router = express.Router();

router.use(express.json());

// Admin Routes
router.post('/signup', async function(req, res){
    // Implement admin signup logic
    const username = req.body.admin;
    const password = req.body.pass;

    //Check user already present in database
    const alreadyExist = await Admin.findOne({username: username});
    if(alreadyExist){
        return res.json({
            msg: "User already exists!"
        })
    }

    //updating the user in the database
    Admin.create({
        username: username,
        password: password
    })

    res.json({
        msg: "Admin created successfully"
    })
});

//checking authentication of admin using middleware - (adminMiddleware)
router.post('/courses', adminMiddleware, async function(req, res) {

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

router.get('/courses', adminMiddleware,async function(req, res){
    // Implement fetching all courses logic
    let courseDetails = await Course.find({});

    res.status(200).json({
        courseDetails
    })
});

module.exports = router;