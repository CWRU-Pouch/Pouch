module.exports = function(sequelize, Sequelize) {
var users = sequelize.define("users", {

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
      len: [3]
    }
  },
}, {
  timestamps: false
});

  users.associate = function(models) {
    users.hasOne(models.budgets, {
      onDelete: 'CASCADE'

    });
    users.hasMany(models.transactions, {
      onDelete: 'CASCADE',
      as: 'userId'

    });
  };

  return users;
};
