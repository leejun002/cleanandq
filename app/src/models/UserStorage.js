"use strict";

class UserStorage {
  static #users = {
    id: ["test", "test2", "test3"],
    psword: ["1234", "12345", "123456"],
    email: ["jun@naver.com", "jun@gmail.com", "jun@icloud.com"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
        if (users.hasOwnProperty(field)) {
            newUsers[field] = users[field];
        }
        return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }

  static save(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.id);
    users.email.push(userInfo.email);
    users.psword.push(userInfo.psword);
    return { success: true };
  }
}

module.exports = UserStorage;