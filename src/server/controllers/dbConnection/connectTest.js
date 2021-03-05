// 引入配置文件
const config = require("../../../../config")
const database = config.database.mysql


let mysql = require('mysql')

let connection = mysql.createConnection({
    host     : database.host,
    user     : database.user,
    password : database.password,
    database : database.database,
});



connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });
