"use strict";

const logger = require("../../config/logger");
const User = require("../../models/User");

// const users = {
//   id: ["test", "test2", "test3"],
//   psword: ["1234", "12345", "123456"],
// };

const output = {
  home: (req,res) => {
    res.render("home/main");
  },
  
  login: (req,res) => {
    res.render("home/login");
  },
  
  register: (req,res) => {
    res.render("home/register");
  },
};

const process = {
  login: async (req,res) => {
    const user = new User(req.body);
    const response = await user.login();
    if (response.err)
      logger.error(
        `POST /login 200 Response: "success: ${response.success}, msg: ${response.err}"`
      );
    else
      logger.info(
        `POST /login 200 Response: "success: ${response.success}, msg: ${response.msg}"`
      );
    return res.json(response);
  },
  register: async (req,res) => {
    const user = new User(req.body);
    const response = await user.register();
    if (response.err)
      logger.error(
        `POST /login 200 Response: "success: ${response.success}, msg: ${response.err}"`
      );
    else
      logger.info(
        `POST /register 200 Response: "success: ${response.success}, msg: ${response.msg}"`
      );
    return res.json(response);
  },
};

module.exports = {
    output,
    process,
};