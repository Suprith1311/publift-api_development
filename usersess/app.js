const express = require('express');

const app = express();

const UserRoutes = require('./usersess/sessionuser');

app.use('/sessionuser' , UserRoutes);


module.exports = app;