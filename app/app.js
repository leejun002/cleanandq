"use strict";

// module
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");

const app = express();
dotenv.config();

const accessLogStream = require("./src/config/log")
// routing
const home = require("./src/routes/home");

const logger = require("./src/config/logger");
logger.info("Hello ^*^!");

// app, setting
app.set("views", "./src/views");
app.set("view engine", "ejs");

// use -> method to register middleware
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // troubleshoot url data not being properly recognized
app.use(morgan("dev"));
app.use(morgan("common", { stream: accessLogStream }));

app.use("/", home);

module.exports = app;