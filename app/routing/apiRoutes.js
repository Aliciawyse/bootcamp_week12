var express = require('express');
//var router = express.Router();

// Routes
// ===========================================================
module.exports = function(app){

    app.get("/api/friends", function(req, res) {
        //display a JSON of all possible friends
        res.sendFile(path.join(__dirname + "/../data/friends.js"));
    });


    app.post("/api/friends", function(req,res){
        console.log("Body!", req.body);
        res.send("Got info!");
    });
};


// module.exports = router;