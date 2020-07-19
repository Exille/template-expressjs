const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const session = require('express-session');

const flash = require('connect-flash');

const app = express();


//Routing
const index = require('./Routes/index');

app.use(session({
	secret: 'JEB@NY JS',
	resave: true,
	saveUninitialized: true
}));

//Lokalizacja plików widoku --- tzn. pliki silnika ejs
app.set('views', path.join(__dirname, 'views'));
//Deklaracja jakiego silnika używam
app.set('view engine', 'ejs');

// app.use(express.static(path.join(__dirname, 'public'))); ----- LUB app.set IDK... ;c
app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());

app.use(flash());


app.use('/', index);

module.exports = app;
