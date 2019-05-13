var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var handlebarsObject = {
            burgers: data
        };
        res.render("index", handlebarsObject);
    });
});
router.post("/api/burgers/insert", function (req, res) {
    console.log(req.body)
   burger.insertOne(req.body.burger_name, function(result){
       res.redirect("/")
   })
});
router.put("/burgers/update", function(req, res){
    console.log(req.body)
    burger.updateOne(req.body.burger_id, function(result){
        res.redirect("/");
    });
});

module.exports = router;
