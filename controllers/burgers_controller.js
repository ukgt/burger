let express = require("express");
let connection = require("../config/connection.js");
let router = express.Router();
let burger = require("../models/burger.js");
// Import the model (burger.js) to use its database functions.
 

// router.get("/", function(req, res){
//      let queryString = "SELECT * FROM t_burgers"
//      connection.query(queryString, function(err, data){
//           res.send(data);
//           console.log(data);
// })
// //  add onclick event inside views(index.handlebars) tells controller to run api(router.POST)  then controller will connect to model and model will handle DB NEED TO USE FORMS - FIND ACTIVITY - see cat activity 16
// })

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
     burger.all(function (data) {
          var hbsObject = {
               burgers: data
          };
          console.log(hbsObject);
          res.render("index", hbsObject);
     });
});

router.post("/api/burgers", function (req, res) {
     burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
          // Send back the ID of the new quote
          res.json({
               id: result.insertId
          });
     });
});

router.put("/api/burgers/:id", function (req, res) {
     var condition = "id = " + req.params.id;

     console.log("condition", condition);

     burger.update({
               devoured: req.body.devoured
          },
          condition,
          function (result) {
               if (result.changedRows === 0) {
                    // If no rows were changed, then the ID must not exist, 404
                    return res.status(404).end();
               }
               res.status(200).end();

          }
     );
});

module.exports = router;