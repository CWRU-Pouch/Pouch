
module.exports = function(sequelize, Sequelize) {
var budgets = sequelize.define("budgets", {

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

// budgets.associate = function(models) {

// budgets.belongsTo(models.users, {
//        foreignKey: {
//          allowNull: false
//        },
//       constraints: false
//     });
// };


return budgets;

};
