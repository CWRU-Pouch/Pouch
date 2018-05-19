
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
      //  foreignKey: {
      //    allowNull: false
      // },
      constaints: false
    });
};


return transactions;

};


