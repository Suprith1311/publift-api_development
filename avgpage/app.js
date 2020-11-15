const express = require('express');

const app = express();

const AvgRoutes = require('./avrpage');

app.use('/avrpage' , AvgRoutes);


module.exports = app;