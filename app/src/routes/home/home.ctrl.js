"use strict";

const logger = require("../../config/logger");
const User = require("../../models/User");

// const users = {
//   id: ["test", "test2", "test3"],
//   psword: ["1234", "12345", "123456"],
// };

const output = {
  home: (req,res) => {
    logger.info(`GET / 304 "홈 화면으로 이동"`);
    let {user} = req.session;
    res.render("home/main", {user});
  },
  
  login: (req,res) => {
    logger.info(`GET /login 304 "로그인 화면으로 이동"`);
    res.render("home/login");
  },
  
  register: (req,res) => {
    logger.info(`GET /register 304 "회원가입 화면으로 이동"`);
    res.render("home/register");
  },
};

const process = {
  login: async (req,res) => {
    const user = new User(req.body);
    const response = await user.login();

    const url = {
      method: "POST",
      path: "/login",
      status: response.err ? 400 : 200,
    };

    log(response, url);
    return res.status(url.status).json(response);
  },
  
  register: async (req,res) => {
    const user = new User(req.body);
    const response = await user.register();

    const url = {
      method: "POST",
      path: "/register",
      status: response.err ? 409 : 201,
    };

    log(response, url);
    return res.status(url.status).json(response);
  },

  makeSession: (req,res) => {
    req.session.user = req.body;
    // console.log(req.session);
    res.json({msg: "success"});
  },
};

module.exports = {
    output,
    process,
};

const log = (response, url) => {
  if (response.err) {
      logger.error(
        `${url.method} ${url.path} ${url.status} Response: ${response.success}, msg: ${response.err}`
      );
  }  else {
      logger.info(
        `${url.method} ${url.path} ${url.status} Response: ${response.success}, msg: ${
          response.msg || ""
        }`
      );
  }
};