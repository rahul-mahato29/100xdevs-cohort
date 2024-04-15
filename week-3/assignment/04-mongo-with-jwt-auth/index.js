const express = require('express');
const app = express();
const port = 3000;

const AdminRoutes = require('./routes/admin');
const UsersRoutes = require('./routes/user');

app.use('/admin', AdminRoutes);
app.use('/users', UsersRoutes);

app.listen(port, () => {
    console.log(`port is running at ${port}`);
})