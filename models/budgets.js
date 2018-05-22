
module.exports = function(sequelize, Sequelize) {
var budgets = sequelize.define("budgets", {
<<<<<<< HEAD
  userID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
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
=======

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
>>>>>>> 94b69f5cd0b09d54a0d3b2824672d35841b6f7bf
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
<<<<<<< HEAD
    type: Sequelize.DECIMAL(10,2),
    allowNull: false,
    validate: {
      min: {
        args: .01,
        msg: "Please choose a value greater than zero"}
    }
=======
    type: Sequelize.INTEGER,
    allowNull: false
>>>>>>> 94b69f5cd0b09d54a0d3b2824672d35841b6f7bf
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
