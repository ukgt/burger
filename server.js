const express = require('express');
let exphbs = require("express-handlebars");
let router = require("./controllers/burgers_controller.js");
const app = express();

 let PORT = process.env.PORT || 3000; 

 app.use(express.static("public"));
 app.use(express.urlencoded({extended: true}));
 app.use(express.json());
 
 app.use("/", router);

 app.engine("handlebars", exphbs({defaultLayout: "main"}));
 app.set("view engine", "handlebars");


 app.listen(PORT, function () {
      // Log (server-side) when our server has started
      console.log("Server listening on: http://localhost:" + PORT);
 });

 