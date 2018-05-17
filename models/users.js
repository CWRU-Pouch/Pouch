//var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
//var sequelize = require("../config/config.json");

// Creating userData model to match with userData table from DB

module.exports = function(sequelize, Sequelize) {
var users = sequelize.define("users", {
  userID: {
    type: Sequelize.INTEGER,
    //autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1]
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1]
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [6]
    }
  },
}, {
  timestamps: false
});


return users;

}

// Syncs with DB
//users.sync();

// Makes the Book Model available for other files (will also create a table)
//module.exports = users;
/**/