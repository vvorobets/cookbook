const express = require('express');
const path = require('path');
var cors = require('cors')
const logger = require('morgan');
const bodyParser = require('body-parser');
const initializeAPIRoutes = require('./routes');

const app = express();

var initializeDB = require('./db');
initializeDB();

app.get('/*', function(req, res, next){ 
  res.setHeader('Last-Modified', (new Date()).toUTCString());
  // res.sendFile(__dirname, 'index.html');
	next(); 
});

app.use(logger('dev'));
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

initializeAPIRoutes(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;