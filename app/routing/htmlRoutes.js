var express = require('express');
var router = express.Router();
var path = require("path");



// Routes
// ===========================================================
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
});

router.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
});


// router.post("/api/friends", function(req,res){
//     console.log(req);
//     document.write("Body!", req.body);
//     res.send("Got info!");
// });

module.exports = router;