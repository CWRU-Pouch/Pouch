var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
//var sequelize = require("../config/config.json");

// Creating userData model to match with userData table from DB

module.exports = function(sequelize, Sequelize) {
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

/*function()queryInterface.bulkInsert('budgets',([

      {userID: 1, clothes: 50, food: 100, rent: 250, entertainment: 75, other: 5}


  ]));*/

return budgets;

}

// Syncs with DB
//budget.sync();

// Makes the Book Model available for other files (will also create a table)
//module.exports = budget;
