let express = require("express");
let connection = require("../config/connection");
let router = express.Router();

// Import the model (cat.js) to use its database functions.
// let burger = require("../models/burger.js");

router.get("/", function(req, res){
     let queryString = "SELECT * FROM t_burgers"
     connection.query(queryString, function(err, data){
          res.send(data);
          console.log(data);
})
//  add onclick event inside views(index.handlebars) tells controller to run api(router.POST)  then controller will connect to model and model will handle DB NEED TO USE FORMS - FIND ACTIVITY - see cat activity 16
})

module.exports = router;