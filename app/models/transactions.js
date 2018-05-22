var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var Transaction = sequelize.define("transaction", {
    
    userID: {

    },

    amount: {
        type: Sequelize.DECIMAL(10,2),
        validate: {
            isDecimal: true,
            isNull: false
        }
    },

    category: {
        type: Sequelize.STRING,
    },

    datetime: {
        type: Sequelize.DATE,        
    },

    location: {
        type: Sequelize.STRING,
    },

    notes: {
        type: Sequelize.TEXT,
        validate: {
            len: [0,150]
        }
    }

})
return Transaction;

module.exports = Transaction;