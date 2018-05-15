var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var Budget = sequelize.define("budget", {

    userID: {
        type: Sequelize.INTEGER,
        validate: {
            isNull: false,

        }
    },

    clothes: {
        type: Sequelize.DECIMAL(10,2),
        validate: {
            isDecimal: true,
            min: .01
        }
    },

    food: {
        type: Sequelize.DECIMAL(10,2),
        validate: {
            isDecimal: true,
            min: .01
        }
    },

    rent: {
        type: Sequelize.DECIMAL(10,2),
        validate: {
            isDecimal: true,
            min: .01
        }
    },

    other: {
        type: Sequelize.DECIMAL(10,2),
        validate: {
            isDecimal: true,
            min: .01
        }
    }
})

module.exports = "budgets";