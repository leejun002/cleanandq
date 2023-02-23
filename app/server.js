"use strict";

// module
const express = require('express');
const nunjucks = require('nunjucks');
const session = require('express-session');
const Memorystore = require('memorystore')(session);
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');

const app = express();

let maxAge = 60*1000;
const sessionObj = {
    secret: "biwjp#@%!$", // salt
    resave: false,
    saveUninitialized: true,
    store: new Memorystore({ checkperiod: maxAge }), // server session storage, expiration date
    cookie: {
        maxAge: maxAge
    }   // browser cookie expiration date
};

// routing
const home = require('./src/routes/home');

// app, setting
app.set("views", "./src/views");
app.set("view engine", "ejs");
nunjucks.configure('./src/views', {
    express: app,
    watch: true
});

// use -> method to register middleware
app.use(express.static(`${__dirname}/src/public`));
app.use(favicon(path.join(__dirname, 'src', 'public', 'favicon.ico')));

app.use(session(sessionObj));

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // troubleshoot url data not being properly recognized

app.use("/", home);


module.exports = app;