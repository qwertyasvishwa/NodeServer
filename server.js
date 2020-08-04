var express = require("express");
var app = express(); 
var port = process.env.PORT || 8080;
var mongoose = require("mongoose");
var configDB = require("./config/db");
mongoose.connect(configDB.url, {useNewUrlParser: true, useUnifiedTopology: true});

//NPM Package Define with own varibale
var morgan = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

//NPM Packgae Uses here
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

//routes defined
require("../First Project/app/routes")(app);

app.listen(port);
console.log("working");