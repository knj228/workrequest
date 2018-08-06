// app.js
const express = require('express');
require( './db' );
var flash=require("connect-flash");
const path = require("path");
const session = require('express-session');
var uuid = require('node-uuid');
const cookied = require('../cookied/./cookied.js');
const nodemailer = require('nodemailer');
const passport = require('passport');
const app = express();
var mongoose = require('mongoose');
const TechModel  = mongoose.model('Tech');
const TeleModel  = mongoose.model('Tele');
const User = mongoose.model('User');
const bodyParser = require('body-parser');
app.use(session({secret: 'mySecretKey'}));
mongoose.Promise = global.Promise;
app.use(flash());

app.use(passport.initialize());

app.use(passport.session());
require('./passport')(passport);
const sesh = {
	secret: 'secret for signing session id',
	saveUninitialized: true,
	resave: true,
  cookie: { secure: false },
};
app.use(session(sesh));

// using reference to sports obtained above

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
    res.render('login.hbs')
});

app.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/login');
});

app.get('/login', function(req, res) {
			console.log("Sesh: "+req.session.id)
      res.render('login.hbs');
});

app.get('/techrequests', function(req, res) {
  var query = req.query.director;
  console.log("THIS is query: "+query)
  TechModel.find(function(err, tech, count) {
    if(err) {
      res.send(err);
    }
    if(query !== undefined){
      var tech = tech.filter(function(obj) {
         return obj["requestor"] === query;
       });
    }
    console.log('MM: ', tech);
    res.render( 'techrequests.hbs', {
			techRequests: tech
    });
  });
});

app.get('/login', function(req, res) {
			console.log("Sesh: "+req.session.id)
      res.render('login.hbs');
});

app.get('/telerequests', function(req, res) {
  var query = req.query.director;
  console.log("THIS is query: "+query)
  TeleModel.find(function(err, tele, count) {
    if(err) {
      res.send(err);
    }
    if(query !== undefined){
      var tele = tele.filter(function(obj) {
         return obj["telerequestor"] === query;
       });
    }
    console.log('MM: ', tele);
    res.render( 'telerequests.hbs', {
			teleRequests: tele
    });
  });
});

app.get('/addTech', function(req, res) {
    res.render( 'addTech.hbs');
  });

	app.get('/register', function(req, res) {
	    res.render( 'register.hbs');
	  });

app.get('/addTele', function(req, res) {
	    res.render( 'addTele.hbs');
	  });

app.post('/addTech', function(req, res) {
  let sesh = req.session;
  const seshId = sesh.id;
  	new TechModel({
  		requestor: req.body.requestor,
      RequestorPhoneNumber: req.body.RequestorPhoneNumber,
      RequestorEmail: req.body.RequestorEmail,
			DepartmentName: req.body.DepartmentName,
			Recipient: req.body.Recipient,
			RecipientPhoneNumber: req.body.RecipientPhoneNumber,
			ServiceDescription: req.body.ServiceDescription,
			RequestCompletionDate:req.body.RequestCompletionDate,
			ServiceType:req.body.servtype,
			Category:req.body.category,
      id:  seshId,
  	}).save(function(err, tech, count){
  		res.redirect('/');
  	});
});


app.post('/register-user', passport.authenticate('register', {
		successRedirect : '/', // redirect to the secure profile section
		failureRedirect : '/error', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();

	res.redirect('/error');
}

app.post('/login-user', passport.authenticate('login', {
		successRedirect : '/', // redirect to the secure profile section
		failureRedirect : '/error', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));


app.post('/addTele', function(req, res) {
  let sesh = req.session;
  const seshId = sesh.id;
  	new TeleModel({
  		teleRequestor: req.body.telereqeust,
      teleRequestorPhoneNumber: req.body.num,
      teleRequestorEmail: req.body.mail,
			teleDepartmentName: req.body.teledeptname,
			teleRecipient: req.body.telerecip,
			teleRecipientPhoneNumber: req.body.recipnum,
			teleServiceDescription: req.body.servdesc,
			teleRequestCompletionDate:req.body.compdate,
			teleServ:req.body.teleserv,
      id:  seshId,
  	}).save(function(err, tele, count){
  		res.redirect('/');
  	});
});

app.listen(3000);
