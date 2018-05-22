

module.exports = function(sequelize, Sequelize) {
var categories = sequelize.define("categories", {
<<<<<<< HEAD
  categoryID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
   // autoIncrement: true,
  },
=======
>>>>>>> 94b69f5cd0b09d54a0d3b2824672d35841b6f7bf
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

