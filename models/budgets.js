
module.exports = function(sequelize, Sequelize) {
var budgets = sequelize.define("budgets", {

  clothes: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  food: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  rent: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  entertainment: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  other: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
}, {
  timestamps: false
});

budgets.associate = function(models) {

budgets.belongsTo(models.users, {
       foreignKey: {
         allowNull: false
       },
      constraints: false
    });
};


return budgets;

};
