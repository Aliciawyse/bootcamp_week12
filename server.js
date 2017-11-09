// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");

//EXPRESS CONFIGURATION
//Tell node we're creating an express server
var app = express();

//Set an initial port. This'll be used as our listener
var PORT = process.env.PORT || 3000;

//Set up express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//ROUTER CONFIGURATION
//The below points our server to a series of "route" files
// var index = require("./app/routing/htmlRoutes");
// var api = require("./app/routing/apiRoutes");
//
// app.use('/', index);
// app.use('/api', api);

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// The below code "starts" our server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});