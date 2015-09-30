var mysql = require('mysql');
var sql = require('../js/mysql');
var env = require('jsdom').env;
var path = require('path');
var url = require('url');
var express = require('express');
var bodyparser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
// var $ = require('jquery');
var login;
app = express();
app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyparser());
app.use(bodyparser.urlencoded());
var urlencod = bodyparser.urlencoded({extended : false});
app.use(session({secret:'secrettokenforsession'}));

module.exports = function(app, passport){
app.get('/',function(req,res){
  // res.sendFile(path.join(__dirname+'/login.html'));
  res.render('login.html');
});

app.post('/home',urlencod,function (req,res) {
    response = {
        name:req.body.username,
        pas:req.body.password
    };
    sql.connection.query('SELECT * from user where name ="'+response.name+
                                    '"and password ="'+ response.pas+'"',function(err, rows, fields){
                                        if(rows[0] !=null){
                                        console.log('solution :',rows);

                                        // res.sendFile(path.join(dir+'/index.html'));
                                        res.render('index.html');
                                        // res.set('http://localhost:9090/login', url.parse(req.url).pathname);
                                    }
                                        else{
                                            // res.send("SOrry Invalid Username Or Password");
                                            res.send('<p>SOrry Invalid Username Or Password</p><a href="http://localhost:9090/">Go back </a>');
                                            res.end();
                                        }
                                    });

});

// app.get('/', function(req,res){
//     req.session = null;
//     req.session.destroy(function(err){
//     res.redirect('/');//Inside a callback… bulletproof!
//     console.log("session expired");
//     })
//     console.log("enthuadey");
// });
exports.signup = function(req, res){
    // res.sendFile(path.join(__dirname+'/register.html'));
    res.render('register.html');
};
app.post('/signup', function(req,res){
    res.render('register.html');
});
app.get('/signup',function(req, res){
    res.render('register.html');
});
app.get('/register',function(req, res){
    res.render('login.html');
});
app.get('/home', function(req,res){
    console.log("Unautherised access denied");
    res.render('login.html')
});
app.post('/register', urlencod,function(req, res){
    response = {
        username:req.body.username,
        pas:req.body.password
    };
    var id = Math.floor(Math.random()*1000000000);
    console.log(id);
    sql.connection.query('INSERT INTO user VALUES("'+id+'","'+response.username+'","'+response.pas+'")',function(err,row,field){
        if(!err){
            res.end('<p>You are successfully registered. Please<a href="http://localhost:9090/">Login</a>to continue</p>');

        }
        else{
            console.log("Sorry");
            res.end('<p>Sorry Registration not possible</p><a href="http://localhost:9090/">Go back </a>');
        }
    });
});
};
