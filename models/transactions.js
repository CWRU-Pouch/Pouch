
module.exports = function(sequelize, Sequelize) {
var transactions = sequelize.define("transactions", {
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  location: {
    type: Sequelize.STRING,
  },
  notes: {
    type: Sequelize.STRING,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
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


transactions.associate = function(models) {

transactions.belongsTo(models.users, {
       foreignKey: {
         allowNull: false
      },
      constraints: false
    });
};


return transactions;

};


