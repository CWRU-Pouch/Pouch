var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a expense model that matches up with DB
var expenseData = sequelize.define("expenseData", {
  ID: {
    type: Sequelize.STRING
  },
  userID: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.STRING,
    defaultValue: "Entertainment"
  },
  price: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: true
});

// Syncs with DB
expenseData.sync();

// Makes the expenseData Model available for other files (will also create a table)
module.exports = expenseData;
