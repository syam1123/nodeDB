var mysql = require('mysql');
var sql = require('../js/mysql');
var env = require('jsdom').env;
var path = require('path');
var url = require('url');
var express = require('express');
var bodyparser = require('body-parser');
// var $ = require('jquery');
var login;
app = express();
app.use(express.static('public'));
exports.login = function(req, res){
    response = {
        name:req.query.username,
        pas:req.query.password
    };
    sql.connection.query('SELECT * from user where name ="'+response.name+
                                    '"and password ="'+ response.pas+'"',function(err, rows, fields){
                                        if(rows[0] !=null){
                                        console.log('solution :',rows);

                                        res.sendFile(path.join(__dirname+'/home.html'));
                                        res.set('http://localhost:9090/login', url.parse(req.url).pathname);
                                    }
                                        else{
                                            // res.send("SOrry Invalid Username Or Password");
                                            res.send('<p>SOrry Invalid Username Or Password</p><a href="http://localhost:9090/">Go back </a>');
                                            res.end();
                                        }
                                    });

    // res.end();
};
exports.signup = function(req, res){
    res.sendFile(path.join(__dirname+'/register.html'));
};
exports.register = function(req, res){
    response = {
        username:req.query.username,
        pas:req.query.password
    };
    var id = Math.floor(Math.random()*1000000000);
    console.log(id);
    sql.connection.query('INSERT INTO user VALUES("'+id+'","'+response.username+'","'+response.pas+'")',function(err,row,field){
        if(!err){
            res.end('<p>You are successfully registered. Please<a href="http://localhost:9090/">Login</a>to continue</p>');

        }
        else{
            console.log("Sorry");
            res.end('<p>Sorry Registration not possible</p><a href="http://localhost:9090/">Go back </a>')
        }
    });
};
