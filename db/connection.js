var mysql = require("mysql");
var util = require("util");
require("dotenv").config();


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: process.env.MYSQL_PASSWORD,
  database: "employees_db"
});

connection.connect();

//set up a connection query to use promises and async await 
connection.query = util.promisify(connection.query);


module.exports = connection;