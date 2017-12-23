
const express = require('express');
const passport = require('passport');
const facebookStrategy = require('passport-facebook').Strategy;
const request = require('request');
const session = require('express-session');
const PORT = 8080;
const app = express();
// Facebook arguments
const FACEBOOK_APP_ID = '464414910621154';
const FACEBOOK_APP_SECRET = '22cfdadd7eeb8122954cd0934fea7fb3';
// APP setup
passport.use(new facebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: `http://localhost:${PORT}/auth/facebook/done`
},
(accessToken, refreshToken, profile, done) => {
    console.log(`${profile.displayName} has logged in`);
    console.log(`accessToken=${accessToken}`);
    console.log(`refreshToken=${refreshToken}`);
    console.log(`profile=${JSON.stringify(profile, null, 4)}`);
    profile.accessToken = accessToken;
    done(null, profile);
}
));

passport.serializeUser((user, done)=>{
    done(null, user);
});

passport.deserializeUser((user, done)=>{
    done(null, user);
});

app.use(session({
    secret: 'arbitrary string',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req, res) => {
    let body = '<h1>Home page</h1>';
    if (req.isAuthenticated()){
        body += `<p>You logged as ${req.user.displayName}</p>`;
        body += `<a href="/logout">Log out</a>`;
    } else {
        body += '<a href="/auth/facebook">Click to login</a>';
    }
    res.send(body);
});

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/done', passport.authenticate('facebook',{
    successRedirect: '/private',
    failureRedirect: '/'

}));

app.get('/private', isLogged(), (req, res) => {
    let body = '<h1>Private page</h1>';
    body += `<p>You logged as ${req.user.displayName}</p>`;
    res.send(body);
});


function isLogged(){
    return function(req, res, next){
        if (req.isAuthenticated()) {
            return next();
         } else {
             res.sendStatus(401);
         } 
    };
}


app.listen(PORT, () => console.log(`Server is running on ${PORT}`));