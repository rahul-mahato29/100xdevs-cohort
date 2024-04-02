const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require('fs')

const app = express();
const port = 8000;

//middleware - helps in handling data in express, which comes from frontend
app.use(express.urlencoded({ extended: false }));

//Routes

//Task-1
//for JSON formate
app.get('/api/users', (req, res) => {
    return (
        res.json(users)
    );
})

//for HTML formate
app.get('/users', (req, res) => {
    const html = `
        <ul>
            ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>
    `;
    return res.send(html);
})

//if we have same route for multiple task, so instead of write each routes multiple times, we can join them like below
app.route('/api/user/:id')
    .get((req, res) => {
        //Task-2 (:d - dynamic variable)
        const id = Number(req.params.id);
        const user = users.find((user) => user.id == id);

        return res.json(user);
    })
    .patch((req, res) => {
        //Task-4 - edit the user with ID - (assignment1)
        return res.json({ status: "pending" })
    })
    .delete((req, res) => {
        //Task-5 - Delete the user with ID - (assignment2)
        return res.json({ status: "pending" })
    })

//Task-3 (create a new user)

// app.post('/api/users', (req, res) => {
//     const body = req.body;
//     users.push({
//         id : body.id,
//         first_name: body.first_name,
//         last_name: body.last_name,
//         email  : body.email,
//         gender : body.gender,
//         job_title : body.job_title
//     })
//     return res.json(body);
// })

//another way to create a new user
app.post('/api/users', (req, res) => {
    const body = req.body;
    users.push({...body, id : users.length + 1})
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({status : "success", id : users.length});
    })
})




app.listen(port, () => {
    console.log(`server started at port : ${port}`);
})