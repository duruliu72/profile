const mySqlCon = require("./mysqlcon");

// var sql = "CREATE TABLE portfolio (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255) NOT NULL, caption VARCHAR(255) NOT NULL,image_url VARCHAR(150),project_url VARCHAR(150) NOT NULL,project_type INT(7) NOT NULL,created_at TIMESTAMP NOT NULL, updated_at TIMESTAMP NULL)";
// mySqlCon.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
// })

var sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL,image_url VARCHAR(150),password VARCHAR(255) NOT NULL,status INT(7) NOT NULL,created_at TIMESTAMP NOT NULL, updated_at TIMESTAMP NULL)";
mySqlCon.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
})