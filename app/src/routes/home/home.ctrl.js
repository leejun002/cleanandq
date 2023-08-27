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
        res.render("home/floor/leum/leum");
      },

            artium2: (req,res) => {
              logger.info(`GET /artium2 304 "아티움 2.7"`);
              res.render("home/floor/leum/artium2/artium2");
            },
                artium2char: (req,res) => {
                  logger.info(`GET /artium2char 304 "아티움 2.7 특징"`);
                  res.render("home/floor/leum/artium2/artium2char");
                },
                artium2ex: (req,res) => {
                  logger.info(`GET /artium2ex 304 "아티움 2.7 시공사례"`);
                  res.render("home/floor/leum/artium2/artium2ex");
                },

            artium3: (req,res) => {
              logger.info(`GET /artium3 304 "아티움 3.2"`);
              res.render("home/floor/leum/artium3/artium3");
            },
                artium3char: (req,res) => {
                  logger.info(`GET /artium3char 304 "아티움 3.2 특징"`);
                  res.render("home/floor/leum/artium3/artium3char");
                },
                artium3ex: (req,res) => {
                  logger.info(`GET /artium3ex 304 "아티움 3.2 시공사례"`);
                  res.render("home/floor/leum/artium3/artium3ex");
                },

            charm: (req,res) => {
              logger.info(`GET /charm 304 "참다움"`);
              res.render("home/floor/leum/charm/charm");
            },
                charmchar: (req,res) => {
                  logger.info(`GET /charmchar 304 "참다움 특징"`);
                  res.render("home/floor/leum/charm/charmchar");
                },
                charmex: (req,res) => {
                  logger.info(`GET /charmex 304 "참다움 시공사례"`);
                  res.render("home/floor/leum/charm/charmex");
                },

            goldstrong: (req,res) => {
              logger.info(`GET /goldstrong 304 "골드스트롱"`);
              res.render("home/floor/leum/goldstrong/goldstrong");
            },
                goldstrongchar: (req,res) => {
                  logger.info(`GET /goldstrongchar 304 "골드스트롱 특징"`);
                  res.render("home/floor/leum/goldstrong/goldstrongchar");
                },
                goldstrongex: (req,res) => {
                  logger.info(`GET /goldstrongex 304 "골드스트롱 시공사례"`);
                  res.render("home/floor/leum/goldstrong/goldstrongex");
                },

            myeong20: (req,res) => {
              logger.info(`GET /myeong20 304 "명가 2.0"`);
              res.render("home/floor/leum/myeong20/myeong20");
            },
                myeong20char: (req,res) => {
                  logger.info(`GET /myeong20char 304 "명가 2.0 특징"`);
                  res.render("home/floor/leum/myeong20/myeong20char");
                },
                myeong20ex: (req,res) => {
                  logger.info(`GET /myeong20ex 304 "명가 2.0 시공사례"`);
                  res.render("home/floor/leum/myeong20/myeong20ex");
                },
  
            myeong22: (req,res) => {
              logger.info(`GET /myeong22 304 "명가 2.2"`);
              res.render("home/floor/leum/myeong22/myeong22");
            },
                myeong22char: (req,res) => {
                  logger.info(`GET /myeong22char 304 "명가 2.2 특징"`);
                  res.render("home/floor/leum/myeong22/myeong22char");
                },
                myeong22ex: (req,res) => {
                  logger.info(`GET /myeong22ex 304 "명가 2.2 시공사례"`);
                  res.render("home/floor/leum/myeong22/myeong22ex");
                },

            shium: (req,res) => {
              logger.info(`GET /shium 304 "쉬움"`);
              res.render("home/floor/leum/shium/shium");
            },
                shiumchar: (req,res) => {
                  logger.info(`GET /shiumchar 304 "쉬움 특징"`);
                  res.render("home/floor/leum/shium/shiumchar");
                },
                shiumex: (req,res) => {
                  logger.info(`GET /shiumex 304 "쉬움 시공사례"`);
                  res.render("home/floor/leum/shium/shiumex");
                },
      
            sorigium: (req,res) => {
              logger.info(`GET /sorigium 304 "소리지움 5.0"`);
              res.render("home/floor/leum/sorigium/sorigium");
            },
                sorigiumchar: (req,res) => {
                  logger.info(`GET /sorigiumchar 304 "소리지움 5.0 특징"`);
                  res.render("home/floor/leum/sorigium/sorigiumchar");
                },
                sorigiumex: (req,res) => {
                  logger.info(`GET /sorigiumex 304 "소리지움 5.0 시공사례"`);
                  res.render("home/floor/leum/sorigium/sorigiumex");
                },

      tile: (req,res) => {
        logger.info(`GET /tile 304 "타일"`);
        res.render("home/floor/tile/tile");
      },

            dongseo: (req,res) => {
              logger.info(`GET /dongseo 304 "동서타일"`);
              res.render("home/floor/tile/dongseo/dongseo");
            },
      
      function: (req,res) => {
        logger.info(`GET /function 304 "기능성 바닥재"`);
        res.render("home/floor/function/function");
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