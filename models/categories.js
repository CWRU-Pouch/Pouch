//var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
//var sequelize = require("../config/config.json");

// Creates a expense model that matches up with DB

module.exports = function(sequelize, Sequelize) {
var categories = sequelize.define("categories", {
  categoryID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
   // autoIncrement: true,
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


return categories;


}


// Syncs with DB
//categories.sync();

// Makes the expenseData Model available for other files (will also create a table)
//module.exports = categories;
