var express = require('express');
var friends = require("../data/friends");
//var router = express.Router();

// Routes
// ===========================================================
module.exports = function(app){

    app.get("/api/friends", function(req, res) {
        //display a JSON of all possible friends
        res.sendFile(path.join(__dirname + "/../data/friends.js"));
    });

//handler for the post in survey.html
    app.post("/api/friends", function(req,res){

        scores = [];
        myData = {};


        for (var key in req.body) {

            if (key === 'fname'){
                myData.name = req.body[key];
            } else if (key === 'photo') {
                myData.photo = req.body[key];
            } else {
                //push each question response to scores
                scores.push(req.body[key]);
            }
        }

        myData.scores = scores;

        //console.log("My body", myData);
        //console.log(friends.push(myData));
        friends(myData);

        res.send("Got info!");

    });
};
