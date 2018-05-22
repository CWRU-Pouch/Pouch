var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var User = sequelize.define("user", {
    
    userID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        isNull: false,
    },

    name: {
        type: Sequelize.STRING,
        isNull: false
    },

    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
            isNull: false,
        }
    },

    password: {
        type: Sequelize.STRING,
        isNull: false
    }

});

return User;

module.exports = User;