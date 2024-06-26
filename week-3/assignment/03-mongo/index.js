const express = require('express');
const app = express();
const port = 3000;

const AdminRoute = require('./routes/admin');
const UsersRoute = require('./routes/user');

app.use('/admin', AdminRoute);
app.use('/users', UsersRoute);

app.listen(port, () => {
    console.log(`port is running at ${port}`);
})