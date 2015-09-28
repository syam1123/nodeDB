var http = require('http');
var mysql = require('mysql');
var fs = require('fs');
var path = require('path');
var express = require('express');
var sql = require('./js/mysql');
const PORT = 8008;

var app = express();


sql.connection.connect(function(err) {
  if (err) {
    console.error('error connecting : ' + err.stack);
    return;
  }
  console.log('connected as id ' + sql.connection.threadId);
});
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  sql.connection.query('SELECT * from user', function(err, rows, fields) {
      if (!err)
        console.log('The solution is: ', rows);
      else
        console.log('Error while performing Query.');
    });
});

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);

});
