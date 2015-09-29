var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');
var sql = require('./js/mysql');
var route = require('./routes/route');
const PORT = 9090;

var app = express();
app.use(express.static('public'));
var bodyParser = require('body-parser');
// app.use('bodyParser');
sql.connection.connect(function(err) {
  if (err) {
    console.error('error connecting : ' + err.stack);
    return;
  }
  console.log('connected as id ' + sql.connection.threadId);
});



app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/home', route.login);
app.post('/signup', route.signup);
app.get('/register',route.register);
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);

});
