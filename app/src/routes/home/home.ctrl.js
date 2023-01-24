"use strict";

const users = {
  id: ["test", "test2", "test3"],
  psword: ["1234", "12345", "123456"],
};

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
  login: (req,res) => {
    const id = req.body.id,
          psword = req.body.psword;
    
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: "Login failed.",
    });
  },
};

module.exports = {
    output,
    process,
};