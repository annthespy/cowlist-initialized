var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cows",
});

connection.connect((err) => {
  if (err) {
    return console.error("error:" + err.message);
  } else {
    console.log("connected to the MySQL server!");
  }
});

module.exports = connection;
