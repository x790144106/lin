// var http = require("http");
var fs = require("fs");
var express = require('express');
var app = express();
var url = require('url'); 
 
var str={"id":"123",name:"jack",arg:11111};
 
// var mysql  = require('mysql');
// var settings = require('./seetings.js');
//连接数据库
// var connection = mysql.createConnection(settings.db);
// connection.connect();
 
// // var selectSQL = 'SELECT * FROM sampleusers';
 
// connection.query(selectSQL, function(err, rows) {
//     if (err) throw err;
//     var results = [];
//     for (var i = 0; i < rows.length; i++) {
//         results[i] = rows[i].FirstName;
         
//     }
//     console.log(results);
//     app.get('/', function(req, res) {
//         res.send({data:results});
//     });
// });
// console.log(123);
app.get('/',function(req,res){
    // str=fs.readFileSync('data.txt');
    res.render('index',str);
    // res.write(str)
});
// connection.end();
app.listen(8888);

console.log("Server has started.port on 8888\n");
console.log("test data: "+str.toString());