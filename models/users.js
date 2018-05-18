//var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
//var sequelize = require("../config/config.json");

// Creating userData model to match with userData table from DB

module.exports = function(sequelize, Sequelize) {
var users = sequelize.define("users", {
  userID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    //autoIncrement: true,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [1],
        msg: "Your name cannot be blank"
      }
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        args: true,
        msg: "Please enter a valid email address"
      },
      len: {
        args: [1],
        msg: "Please enter a valid email address"
      }
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [6],
        msg: "Your password must be at least 6 characters"
      }
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