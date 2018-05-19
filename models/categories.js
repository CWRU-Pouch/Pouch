

module.exports = function(sequelize, Sequelize) {
var categories = sequelize.define("categories", {
  category: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1]
    }
  },
  
}, {
  timestamps: false
});


return categories;


}

