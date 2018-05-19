//Bringing in userData and expenseData models
var categories = require("../models/categories.js");
var transactions = require("../models/transactions.js");
var users = require("../models/users.js");
var budgets = require("../models/budgets.js");
var db = require("../models");
var cookieParser = require('cookie-parser');
var session = require('express-session');


// Routes
module.exports = function (app) {



  // initialize cookie-parser to allow us access the cookies stored in the browser. 
  app.use(cookieParser());


  // initialize express-session to allow us track the logged-in user across sessions.
  app.use(session({
    key: 'user_sid',
    secret: 'teamFoxTrot',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000
    }
  }));

  // This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
  // This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
  app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
      res.clearCookie('user_sid');
    }
    next();
  });

  // this function reroutes the user if they access a log in or signup page to their budget page if they have a valid session
  var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
      res.redirect('/budgets/' + req.cookie.userID);
    } else {
      next();
    }
  };


  // route for Home-Page -- redirects "/" to "/login"
  app.get('/', sessionChecker, function (req, res) {
    res.redirect('/login');
  });


  // checks to see if there is a user with that email and password used during log in
  // if no user or incorrect password redirect to login
  // if valid redirect to their budget page '/budgets/userID'
  app.route('/login/validate').get(sessionChecker, function (req, res) {
    res.sendFile(__dirname + '/login')
  }).get(function (req, res) {
    db.users.findOne(
      {
        where:
          { email: req.body.email }
      }).then(function (user) {
        var enteredPassword = req.body.password;
        if (!user) {
          res.redirect('/signup');
        } else if (!user.password === enteredPassword) {
          res.redirect('/login');
        } else {
          req.session.user = user.dataValues;
          // create cookie with specific userID after they sign in
          document.cookie = "userID=" + user.ID;
          // user.ID may need to be changed in order to retrieve the ID value --didnt know what name was for sure--
          res.redirect('/budgets/' + user.ID);
        }
      })
  })

  // route for user signup
  app.route('/signup/submit').get(sessionChecker, function (req, res) {
    res.sendFile(__dirname + '/signup')
  }).post(function (req, res) {
    db.users.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    }).then(function () {
      document.cookie = "userID=" + user.ID;
      req.session.user = user.dataValues;
      res.redirect('/budgets/' + users.ID);
    })
  })



  // route for user's budget
  app.get("/budgets/:userID/", function (req, res) {
    if (req.session.user && req.cookies.user_sid) // if the session is valid load up index handlebars with information
    {
      db.budgets.findOne({
        where: {
          userID: req.params.userID
        }
      }).then(function (data) {
        res.render("index", { data: data });
      });
    } else {
      res.redirect('/login') // if not valid redirect to login page
    }
  });







  // Create a new expense and add it to transactions table
  app.post("/api/posts/expense", function (req, res) {
    if (req.session.user && req.cookies.user_sid) {  // checks to see if valid session
      db.transactions.create({
        userId: req.body.userID,
        // categoryID: req.body.categoryID,
        amount: req.body.amount,
        location: req.body.location,
        notes: req.body.notes
      }).then(function (data) {
        res.json(data)
      });
    } else {
      res.redirect('/login') // if not valid redirect to login page
    }
  });


  // Delete an expense from expenseData
  // only needs to be passed the unique transactionID of transactions 
  app.delete("/api/delete/:transactionID", function (req, res) {
    if (req.session.user && req.cookies.user_sid) {  //checks to see if valid session

      db.transaction.destroy({
        where: {
          transactionID: req.params.transactionID
        }
      })
        .then(function (data) {
          res.json(data);
        });
    } else {
      res.redirect('/login') //if not valid redirect to login page
    }
  });



  // frontend side / on click functions in javascript need to determine what the category the item is in and call the specific api route for that category. Also need to retrieve the value of that category (remaining balance) and either add or substract (whether adding transaction or deleting transaction) the specific transaction value and pass that into the api request for the ':value' parameter

  // use the "/budgets/:userID/" route to retrieve the budget for the specific user then have to find the specific budget value

  // update budget depending on new request CLOTHES
  app.put("/api/update/clothes/:value", function (req, res) {
    var newData = { clothes: req.params.value };
    if (req.session.user && req.cookies.user_sid) { // checks to see if valid session
      db.budgets.update(newData,
        {
          where:
            {
              userID: req.cookies.userID
            }
        }).then(function (data) {
          res.redirect('/budgets/' + req.cookies.userID);
        })
    } else {
      res.redirect('/login') // if not valid redirect to login page
    }
  });

  // update budget depending on new request FOOD
  app.put("/api/update/food/:value", function (req, res) {
    var newData = { food: req.params.value };
    if (req.session.user && req.cookies.user_sid) { // checks to see if valid session
      db.budgets.update(newData,
        {
          where:
            {
              userID: req.cookies.userID
            }
        }).then(function (data) {
          res.redirect('/budgets/' + req.cookies.userID);
        })
    } else {
      res.redirect('/login') // if not valid redirect to login page
    }
  });

  // update budget depending on new request RENT
  app.put("/api/update/rent/:value", function (req, res) {
    var newData = { rent: req.params.value };
    if (req.session.user && req.cookies.user_sid) { // checks to see if valid session
      db.budgets.update(newData,
        {
          where:
            {
              userID: req.cookies.userID
            }
        }).then(function (data) {
          res.redirect('/budgets/' + req.cookies.userID);
        })
    } else {
      res.redirect('/login') // if not valid redirect to login page
    }
  });

  // update budget depending on new request ENTERTAINMENT
  app.put("/api/update/entertainment/:value", function (req, res) {
    var newData = { entertainment: req.params.value };
    if (req.session.user && req.cookies.user_sid) { // checks to see if valid session
      db.budgets.update(newData,
        {
          where:
            {
              userID: req.cookies.userID
            }
        }).then(function (data) {
          res.redirect('/budgets/' + req.cookies.userID);
        })
    } else {
      res.redirect('/login') // if not valid redirect to login page
    }
  });

  // update budget depending on new request OTHER
  app.put("/api/update/other/:value", function (req, res) {
    var newData = { other: req.params.value };
    if (req.session.user && req.cookies.user_sid) { // checks to see if valid session
      db.budgets.update(newData,
        {
          where:
            {
              userID: req.cookies.userID
            }
        }).then(function (data) {
          res.redirect('/budgets/' + req.cookies.userID);
        })
    } else {
      res.redirect('/login') // if not valid redirect to login page
    }
  });
};



