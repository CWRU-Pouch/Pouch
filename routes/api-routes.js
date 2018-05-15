//Bringing in userData and expenseData models
var userData = require("../models/userData.js");
var expenseData = require("../models/expenseData.js");
var db = require("../models");

// Routes
module.exports = function(app) {
  // Search for all expenses in one category for one user
  app.get("/api/:category/:userID", function(req, res) {
    db.expenseData.findAll({
      where: {
        category: req.params.category,
        userId: req.params.userID
      }
    }).then(function(data){
      res.json(data);
    });
  });

  //Create a new expense and add it to expenseData table
  app.post("/api/posts/expense", function(req,res){
    db.expenseData.create({
      userID: req.body.userID,
      category: req.body.category,
      price: req.body.price
    }).then(function(data){
      res.json(data)
    });
  });

  //Create a new user and add it to userData table
  //didnt add in budget category names because we are starting with default values
  app.post("/api/posts/user", function(req,res){
    db.expenseData.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    }).then(function(data){
      res.json(data)
    });
  });

  //Delete an expense from expenseData
  //only needs to be passed the unique ID of expenseData 
  app.delete("/api/delete/:id", function(req, res) {
    db.expenseData.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
    
};