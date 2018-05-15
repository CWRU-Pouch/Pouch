var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creating userData model to match with userData table from DB
var userData = sequelize.define("userData", {
  userID: {
    type: Sequelize.STRING
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1]
    }
  },
  lastName: {
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
  budget1: {
    type: Sequelize.STRING,
    defaultValue: "Entertainment"
  },
  budget1Boolean: {
    type: Sequelize.BOOLEAN
  },
  budget2: {
    type: Sequelize.STRING,
    defaultValue: "Food"
  },
  budget2Boolean: {
    type: Sequelize.BOOLEAN
  },
  budget3: {
    type: Sequelize.STRING,
    defaultValue: "Misc"
  },
  budget3Boolean: {
    type: Sequelize.BOOLEAN
  },
}, {
  timestamps: false
});

// Syncs with DB
userData.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = userData;
