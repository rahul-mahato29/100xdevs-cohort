const express = require('express');
const app = express();
const port = 3000;

const AdminRoute = require('./routes/admin');

app.use('/admin', AdminRoute);

app.listen(port, () => {
    console.log(`port is running at ${port}`);
})