var Sequelize = require('sequelize');
// create a sequelize instance with our local postgres database information.
//var sequelize = new Sequelize('postgres://postgres@localhost:5432/auth-system');
var sequelize = require("../config/config.json");

module.exports = function (sequelize, Sequelize) {
  var users = sequelize.define('users', {
    username: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false

    }
  });

  return users;

}

