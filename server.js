var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');
var sql = require('./js/mysql');
var route = require('./routes/route');
var ejs = require('ejs');
var passport = require('passport');
const PORT = 9090;



var app = express();
app.use(express.static('public'));
require('./routes/route')(app, passport);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

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



// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname+'/login.html'));
// });

// app.post('/home', route.login);
// app.post('/signup', route.signup);
// app.get('/register',route.register);
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);

});
