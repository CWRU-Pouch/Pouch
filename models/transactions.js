module.exports = function(sequelize, Sequelize) {
var transactions = sequelize.define("transactions", {
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
  category: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [1]
    }
  },
  clothes: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  food: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  rent: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  entertainment: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  other: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  createdAt: { 
         type: Sequelize.DATE, 
         defaultValue: Sequelize.NOW 
  },
  updatedAt: { 
         type: Sequelize.DATE, 
         defaultValue: Sequelize.NOW 
    }
}, {
  timestamps: true
});


// transactions.associate = function(models) {

// transactions.belongsTo(models.users, {
//        foreignKey: {
//          allowNull: false
//       },
//       constraints: false
//     });
// };


return transactions;

};