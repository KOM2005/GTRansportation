const express = require('express');
const app = express();

const PORT = 8080;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');

const configDB = require('./config/db.js');

app.use(bodyParser.json());

mongoose.connect(configDB.url);
require('./config/passport')(passport);


app.use(session({
    secret: 'ilikebeercoffeandalcohol',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

require('./app/routes.js')(app, passport);


app.listen(PORT, () => console.log(`Server is running on ${PORT}`));