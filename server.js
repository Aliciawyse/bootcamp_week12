// Dependencies
// ===========================================================
var express = require("express");
//var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;

var index = require("./app/routing/htmlRoutes");
var api = require("./app/routing/apiRoutes");


//parse data
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//routes
app.use('/', index);
app.use('/api', api);


// Starts the server to begin listening
//=============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

