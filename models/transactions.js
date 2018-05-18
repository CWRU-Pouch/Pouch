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
    type: Sequelize.DECIMAL(10,2),
    allowNull: false,
    validate: {
      min: {
        args: .01,
        msg: "Please choose a value greater than zero"
      }
    }
  },
  categoryID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: {
        args: [3],
        msg: "If you're including a location, it must be greater than three characters"
      }
    }
  },
  notes: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: {
      len: {
        args: [3],
        msg: "If you're including notes, they must be greater than three characters"
      }
    }
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
