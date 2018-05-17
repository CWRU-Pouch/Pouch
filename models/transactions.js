//var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
//var sequelize = require("../config/config.json");

// Creating userData model to match with userData table from DB

module.exports = function(sequelize, Sequelize) {
var transactions = sequelize.define("transactions", {
  transactionID: {
    type: Sequelize.INTEGER,
   // autoIncrement: true,
    primaryKey: true
  },
  userID: {
    type: Sequelize.INTEGER,
  },
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  categoryID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  location: {
    type: Sequelize.STRING,
  },
  notes: {
    type: Sequelize.STRING,
  },
}, {
  timestamps: true
});


return transactions;


}

// Syncs with DB
//transactions.sync();

// Makes the Book Model available for other files (will also create a table)
//module.exports = transactions;
