var express = require("express");
var bodyParser = require("body-parser");

//adding express-handlebars
var exphbs = require("express-handlebars");
var seeds = require("./seeds.js");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static("app/public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/api-routes.js")(app);

db.sequelize.sync({force: true}).then(() => {
	 seeds(db.sequelize.queryInterface, db.Sequelize);
	app.listen(PORT, function() {
	    console.log("Listening on port " + PORT)
	})
});
