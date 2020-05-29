const connection = require("connection");

class DB {
constructor(connection) {
this.connection = connection;
}
findAllEmployees(){
return this.connection.query("SELECT * from employees")
}
}
module.exports = new DB(connection);