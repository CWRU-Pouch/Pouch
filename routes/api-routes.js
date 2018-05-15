//Bringing in userData and expenseData models
var categories = require("../models/categories.js");
var transactions = require("../models/transactions.js");
var users = require("../models/users.js");
var budgets = require("../models/budgets.js");
var db = require("../models");

// Routes
module.exports = function(app) {
  // Search for all expenses in one category for one user
  app.get("/api/:categoryID/:userID", function(req, res) {
    db.transactions.findAll({
      where: {
        categoryID: req.params.categoryID,
        userID: req.params.userID
      }
    }).then(function(data){
      res.json(data);
    });
  });

  // checks to see if there is a user with that email and password used during log in
  app.get("/api/:email/:password", function(req, res) {
    db.transactions.findAll({
      where: {
        email: req.params.email,
        password: req.params.password
      }
    }).then(function(data){
      res.json(data);
    });
  });

  //Create a new expense and add it to transactions table
  app.post("/api/posts/expense", function(req,res){
    db.transactions.create({
      userID: req.body.userID,
      categoryID: req.body.categoryID,
      amount: req.body.amount,
      location: req.body.location,
      notes: req.body.notes
    }).then(function(data){
      res.json(data)
    });
  });

  //Create a new user and add it to userData table
  //didnt add in budget category names because we are starting with default values
  app.post("/api/posts/user", function(req,res){
    db.users.create({
      userID: req.body.userID,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }).then(function(data){
      res.json(data)
    });
  });

  //Delete an expense from expenseData
  //only needs to be passed the unique transactionID of transactions 
  app.delete("/api/delete/:transactionID", function(req, res) {
    db.transaction.destroy({
      where: {
        transactionID: req.params.transactionID
      }
    })
      .then(function(data) {
        res.json(data);
      });
  });
    
};