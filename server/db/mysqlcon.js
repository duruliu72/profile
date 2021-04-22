var mysql = require("mysql");

var mySqlCon = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "profile2021",
    password: ""

});
mySqlCon.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
module.exports = mySqlCon;