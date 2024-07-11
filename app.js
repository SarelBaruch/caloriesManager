require('dotenv').config(); // Add this line at the top of your app.js

//Sarel Israel Baruch 314753666
//Ziv Ashkenazi 318778255

// Express.js
const express = require('express');
const app = express();

// Dependencies
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Routes
const caloriesRouter = require('./routes/calories');
const reportRouter = require('./routes/report');
const aboutRouter = require('./routes/about');
const usersRouter = require('./routes/users');

// Mongo
const mongoose = require('mongoose');
const mongoUrl = process.env.MONGODB_URI || 'mongodb+srv://sarelb25:sarel@caloriemanager.c5xsgj4.mongodb.net/?retryWrites=true&w=majority&appName=calorieManager';
mongoose.connect(mongoUrl, { dbName: 'calorieManager', useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to mongodb'))
    .catch((err) => console.log(err));
mongoose.Promise = global.Promise;

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// App middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// App routes
app.use('/', caloriesRouter);
app.use('/', reportRouter);
app.use('/', aboutRouter);
app.use('/', usersRouter);

module.exports = app;
