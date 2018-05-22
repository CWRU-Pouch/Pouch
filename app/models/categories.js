var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var Category = sequelize.define("category", {

    categoryID: {
        type: Sequelize.INTEGER,
        validate: {
            isNull: false,
            primaryKey: true,
            autoIncrement: true,
        }
    }
});

return Category;

module.exports = Category;