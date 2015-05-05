//server.js

var express = require('express'); 
var bodyParser = require('body-parser'); 
var passport = require('passport'); 
var session = require('session'); 
var GithubStrategy = require('passport-github').Strategy; 

var app = express(); 

app.use(bodyParser.json()); 

app.use(session({
	secret: '', 
	saveUninitialized: false, 
	resave: true
})); 

app.use(passport.initialize()); 
app.use(passport.session()); 

passport.use(new GithubStrategy({
	clientID: '95f459376b5c0b375092',
	clientSecret: 'e08974b384b8a72b971254417e88ee6a24bbf68e',
	callbackUrl: 'http://localhost:9000/auth/github/callback'  
}, function(token, refreshToken, profile, done) {
	return done(null, profile); 
})); 

//serialization 
passport.serializeUser(function(user, done) {
  done(null, user);
});
 
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


//endpoints 
app.get('/', function(req, res) {
	res.send("Home"); 
	console.log("Home page loaded"); 
});

app.get('/auth/github', passport.authenticate('facebook', {
	//idk what else goes here....
})); 

app.get('/auth/gihub/callback', passportauthenticate('github', { 
	successRedirect: '/#/home' })); 




