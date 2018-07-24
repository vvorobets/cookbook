import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
// var app = require('express')();
// var http = require('http').Server(app);
// var bodyParser = require('body-parser');

// let messages = [];
// let nickNames = [];

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());

// app.get('/', function(req, res){
// 	res.sendFile(__dirname + '/index.html');
// });

// app.get('/script.js', function(req, res){
// 	res.sendFile(__dirname + '/script.js');
// });

// app.post('/users', function(req, res){
// 	function checkNickname(msg) {
// 		let isValid = true;
// 		nickNames.forEach(el=>{
// 			if(Object.is(msg.nickName && msg.nickName, el.nickName)) {
// 				isValid = false;
// 			}
// 		});
// 		return isValid;
// 	};

// 	if(checkNickname(req.body)) {
// 		nickNames.push(req.body);
// 		res.json({});
// 	} else {
// 		res.status(403).send({error: "Nickname is invalid! Please try again later."});
// 	}
// });


// app.get('/users', function(req, res){
// 	res.json(nickNames);
// });

// app.get('/messages', function(req, res){
// 	res.json(messages);
// });

// app.post('/messages', function(req, res){
// 	messages.push(req.body);
// 	if(messages.length > 100) {
// 		messages.shift();
// 	}
// 	res.json(messages);
// });

// http.listen(5000, function(){
// 	console.log('listening on *:5000');
// });







// const express = require('express');
// const path = require('path');
// var cors = require('cors');
// const logger = require('morgan');
// const bodyParser = require('body-parser');
// const initializeAPIRoutes = require('./routes');

// const app = express();


// var initializeDB = require('./db');
// initializeDB();

// app.get('/*', function(req, res, next){ 
// 	res.setHeader('Last-Modified', (new Date()).toUTCString());
// 	next(); 
// });

// app.use(logger('dev'));
// app.use(cors());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// initializeAPIRoutes(app);

// // catch 404 and forward to error handler
// app.use((req, res, next) => {
// 	const err = new Error('Not Found');
// 	err.status = 404;
// 	next(err);
// });

// // error handler
// app.use((err, req, res, next) => {
// 	// set locals, only providing error in development
// 	res.locals.message = err.message;
// 	res.locals.error = req.app.get('env') === 'development' ? err : {};

// 	// render the error page
// 	res.status(err.status || 500);
// 	res.render('error');
// });

// module.exports = app;