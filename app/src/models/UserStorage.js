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
}

module.exports = UserStorage;