let mysql = require("mysql");
let connection;

// IF HEROKU DB THEN THIS IS MY CONNECTION
if(process.env.JAWSDB_URL){
connection = mysql.createConnection(process.env.JAWSDB_URL)
}else{
     // THIS IS MY LOCAL CONNECTION
    connection = mysql.createConnection({
         host: "localhost",
         port: 3306,
         user: "root",
         password: "root",
         database: "burger512"
    });
}

connection.connect(function (err) {
     if (err) {
          console.error("error connecting: " + err.stack);
          return;
     }
     console.log("connected as id " + connection.threadId);
});

module.exports = connection;
