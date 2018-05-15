var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creating userData model to match with userData table from DB
var budgets = sequelize.define("budgets", {
  userID: {
    type: Sequelize.INTEGER,
  },
  clothes: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  food: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  rent: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  entertainment: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  other: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false
});

// Syncs with DB
budget.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = budget;
