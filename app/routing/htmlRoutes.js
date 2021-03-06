// var express = require('express');
// var router = express.Router();

var path = require("path");



//ROUTING


module.exports = function(app){


// HTML GET Requests
// Below code handles when users "visit" the home page or survey page.

// In each of the below cases the user is shown an HTML page of content
//

    // app.get("/", function(req, res) {
    //     res.sendFile(path.join(__dirname + "/../public/home.html"));
    // });

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    // If no matching route is found default to home
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};


// router.post("/api/friends", function(req,res){
//     console.log(req);
//     document.write("Body!", req.body);
//     res.send("Got info!");
// });

// module.exports = router;