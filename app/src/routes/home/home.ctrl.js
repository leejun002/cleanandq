"use strict";

const logger = require("../../config/logger");
const User = require("../../models/User");
const {informove} = require("../../util/informove");

// const users = {
//   id: ["test", "test2", "test3"],
//   psword: ["1234", "12345", "123456"],
// };

const output = {
  home: (req,res) => {
    logger.info(`GET / 304 "홈"`);
    let {user} = req.session;
    res.render("home/main", {user});
  },
  
  login: (req,res) => {
    logger.info(`GET /login 304 "로그인 페이지"`);
    res.render("home/login");
  },
  
  register: (req,res) => {
    logger.info(`GET /register 304 "회원가입 페이지"`);
    res.render("home/register");
  },

  profile: (req,res) => {
    if (req.session.user) {
      logger.info(`GET /profile 304 "프로필 페이지"`);
      let {user} = req.session;
      res.render("home/profile", {user});
    } else {
      res.send(informove("로그인이 필요합니다", "/"));
    }
  },

  logout: (req,res) => {
    logger.info(`GET /logout 304 "로그아웃"`);
    req.session.destroy(() => {
      req.session
    });
    res.redirect("/");
  },

  hanstone: (req,res) => {
    logger.info(`GET /hanstone 304 "칸스톤"`);
    res.render("home/hanstone");
  },

  homesash: (req,res) => {
    logger.info(`GET /homesash 304 "홈샤시"`);
    res.render("home/homesash");
  },

      normal: (req,res) => {
        logger.info(`GET /normal 304 "일반창"`);
        res.render("home/sash/normal");
      },

      balcony: (req,res) => {
        logger.info(`GET /balcony 304 "발코니창"`);
        res.render("home/sash/balcony");
      },

      system: (req,res) => {
        logger.info(`GET /system 304 "시스템창"`);
        res.render("home/sash/system");
      },

      rehau: (req,res) => {
        logger.info(`GET /rehau 304 "레하우창"`);
        res.render("home/sash/rehau");
      },

      aluminium: (req,res) => {
        logger.info(`GET /aluminium 304 "알루미늄창"`);
        res.render("home/sash/aluminium");
      },

      specialuse: (req,res) => {
        logger.info(`GET /specialuse 304 "특수용도창"`);
        res.render("home/sash/specialuse");
      },

      sheetcolor: (req,res) => {
        logger.info(`GET /sheetcolor 304 "시트컬러"`);
        res.render("home/sash/sheetcolor");
      },

      handle: (req,res) => {
        logger.info(`GET /handle 304 "핸들"`);
        res.render("home/sash/handle");
      },

  flooring: (req,res) => {
    logger.info(`GET /flooring 304 "바닥재"`);
    res.render("home/floor/flooring");
  },

      maru: (req,res) => {
        logger.info(`GET /maru 304 "마루"`);
        res.render("home/floor/maru/maru");
      },

          sentra7: (req,res) => {
            logger.info(`GET /sentra7 304 "센트라 프라임 7.5"`);
            res.render("home/floor/maru/sentra7/sentra7");
          },

              sentra7char: (req,res) => {
                logger.info(`GET /sentra7char 304 "센트라 프라임 7.5 특징"`);
                res.render("home/floor/maru/sentra7/sentra7char");
              },

              sentra7ex: (req,res) => {
                logger.info(`GET /sentra7ex 304 "센트라 프라임 7.5 시공사례"`);
                res.render("home/floor/maru/sentra7/sentra7ex");
              },

          sentra6: (req,res) => {
            logger.info(`GET /sentra6 304 "센트라 프라임 6.5"`);
            res.render("home/floor/maru/sentra6/sentra6");
          },

              sentra6char: (req,res) => {
                logger.info(`GET /sentra6char 304 "센트라 프라임 6.5 특징"`);
                res.render("home/floor/maru/sentra6/sentra6char");
              },

              sentra6ex: (req,res) => {
                logger.info(`GET /sentra6ex 304 "센트라 프라임 6.5 시공사례"`);
                res.render("home/floor/maru/sentra6/sentra6ex");
              },

      leum: (req,res) => {
        logger.info(`GET /leum 304 "륨시트"`);
        res.render("home/floor/leum");
      },

      tile: (req,res) => {
        logger.info(`GET /tile 304 "타일"`);
        res.render("home/floor/tile");
      },

          dongseo: (req,res) => {
            logger.info(`GET /dongseo 304 "동서타일"`);
            res.render("home/floor/dongseo");
          },
      
      function: (req,res) => {
        logger.info(`GET /function 304 "기능성 바닥재"`);
        res.render("home/floor/function");
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