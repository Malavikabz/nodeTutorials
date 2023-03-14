const mysql = require("mysql");

const connection = mysql.createConnection({
  host : 'localhost',
  database : 'sender',
  user : 'root',
  password : ''
});

module.exports = connection ; 