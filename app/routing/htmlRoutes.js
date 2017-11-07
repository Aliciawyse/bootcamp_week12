// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

// Routes
// ===========================================================
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});