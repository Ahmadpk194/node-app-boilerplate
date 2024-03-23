const express = require('express');
const app = express();
const path = require('path')

const dotenv = require('dotenv');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')

const errorMiddleware = require('./middlewares/errors')

// Setting up config file
dotenv.config({path:'backend/config/config.env'});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(fileUpload());

 

// import all routes
const test = require('./routes/test');

app.use('/api/v1', test);

// FOR PRODUCTION
// if(process.env.NODE_ENV === 'PRODUCTION'){
//     app.use(express.static(path.join(__dirname, '../frontend/build')));
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
//     })
// }

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
