const express = require('express');

const app = express();

const upload = multer({ dest: 'csv/' });
const multer = require('multer');

const csvUploadRoute = require('./csv');
app.post('/csv-upload', upload.single('csv'), csvUploadRoute.upload);


const csvResultsRoute = require('./routes/csv-results.js');
app.get('/csv-results/:fileId', csvResultsRoute.results);


module.exports = app;