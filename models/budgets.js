var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
//var sequelize = require("../config/config.json");

// Creating userData model to match with userData table from DB

module.exports = function(sequelize, Sequelize) {
var budgets = sequelize.define("budgets", {
  userID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  clothes: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false,
    validate: {
      min: {
        args: .01,
        msg: "Please choose a value greater than zero"}
    }
  },
  food: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false, 
    validate: {
      min: {
        args: .01,
        msg: "Please choose a value greater than zero"}
    }
  },
  rent: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false,
    validate: {
      min: {
        args: .01,
        msg: "Please choose a value greater than zero"}
    }
  },
  entertainment: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false,
    validate: {
      min: {
        args: .01,
        msg: "Please choose a value greater than zero"}
    }
  },
  other: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false,
    validate: {
      min: {
        args: .01,
        msg: "Please choose a value greater than zero"}
    }
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
