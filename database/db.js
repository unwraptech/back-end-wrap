var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: 'unwraptech'
  });
con.connect();
module.exports =con;