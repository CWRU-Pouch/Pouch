var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a expense model that matches up with DB
var categories = sequelize.define("categories", {
  categoryID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1]
    }
  },
  
}, {
  timestamps: false
});

// Syncs with DB
categories.sync();

// Makes the expenseData Model available for other files (will also create a table)
module.exports = categories;
