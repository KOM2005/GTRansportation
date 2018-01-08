const express = require('express');
const app = express();

const PORT = 3001;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const expressValidator = require('express-validator');
const configDB = require('./config/db.js');


// const cors = require('cors');

// // app.use(cors());

// app.use(cors({
//   origin: 'http://localhost:8080',
//   credentials: true
// }));
// const cors = require('cors');

// app.use(cors({
//   origin: '*',
//   credentials: true
// }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


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