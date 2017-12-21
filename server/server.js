const bodyParser = require('body-parser');
const express = require('express');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const request = require('request-promise');
const session = require('express-session');
const mongoose = require('mongoose');
const Post = require('./models/Post'); //reference to out DB in Post.js file

// Facebook App ID and Secret
const FACEBOOK_APP_ID = '387373981675792';
const FACEBOOK_APP_SECRET = '015fd20849978192720467d47da5f8f4';

const PORT = 8080;
const app = express();
app.use(bodyParser.json());

// Set up passport for facebook auth
passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: 'http://localhost:8080/auth/facebook/done'
},
    function (accessToken, refreshToken, profile, done) {
        console.log(`${profile.displayName} has successfully authenticated`);
        // console.log(`accessToken=${accessToken}`);
        // console.log(`refreshToken=${refreshToken}`);
        // console.log(`profile=${JSON.stringify(profile,null,2)}`);
        profile.accessToken = accessToken;
        done(null, profile);
    }));

// On user logged in
passport.serializeUser(function (user, done) {
    done(null, user);
});

// Deserializes user
passport.deserializeUser(function (user, done) {
    done(null, user);
});

// Manages cookies for session tracking
app.use(session({
    secret: 'super secret',
    resave: false,
    saveUninitialized: false
}));

// Init passport and use sessions
app.use(passport.initialize());
app.use(passport.session());


// Unauthenticated page
app.get('/', (req, res) => {
    let body = '<h1>Facebook OAuth Page</h1>';
    if (req.isAuthenticated()) {
        body += `Hello ${req.user.displayName}!`;
        body += '<a href="/logout">Log Out</a>';
    } else {
        body += '<a href="/auth/facebook">Log in with Facebook</a>';
    }
    res.send(body);
});

// Route alias to FB login route (unnecessary, just an example)
app.get('/login', (req, res) => res.redirect('/auth/facebook'));

// Log out (destroy session)
app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// Login redirect URL
app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'user_photos' }));

// OAuth callback URL
app.get('/auth/facebook/done', passport.authenticate('facebook', {
    successRedirect: '/private',
    failureRedirect: '/'
}));

// Authenticated page
app.get('/private', isLoggedIn(), (req, res) => {
    request.get({
        url: `https://graph.facebook.com/me?access_token=${req.user.accessToken}`
    })
        .then((data) => {
            console.log(JSON.stringify(JSON.parse(data), null, 2));
            res.send(`Hello ${req.user.displayName}!`);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});


app.get('/api', (req, res) => res.send('Hello backend World!'));
app.get('/api/posts', (req, res) => {
    Post.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send(err.message ? err.message : 'Internal server blowup');
        });
});

app.post('/api/posts', (req, res) => {
    let newPost = new Post();  //just these 3 properties i request here
    newPost.title = req.body.title;
    newPost.body = req.body.body;
    newPost.author = req.body.author;
    newPost.save() //save to DB commit new object to DB
        .then(() => {
            res.sendStatus(204); //no content eror code
        })
        .catch((err) => {   //in case of error
            console.log(err);
            res.status(500).send(err.message ? err.message : 'Internal server blowup');
        });
});

mongoose.connect('mongodb://localhost/forum');
// Start server
app.listen(8080, () => console.log(`Example app listening on port ${PORT}`));