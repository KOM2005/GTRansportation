const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const User = require('../app/models/User');
const configAuth = require('./auth');

module.exports = (passport) => {

    // serialize the user for the session
    passport.serializeUser((user, done)=>{
        done(null, user);
    });
    // deserialize the user
    passport.deserializeUser((user, done)=>{
        done(null, user);
    });


    // FACEBOOK
    passport.use(new FacebookStrategy(
        configAuth.facebook, 
        (accessToken, refreshToken, profile, done) => {
            User.findOne({email: profile.emails[0].value}, (err, user) => {
                if (user) {
                    // console.log('facebook---> ',profile);
                    return done(null, profile);
                } else {
                    return done(null, false);
                }
            });
        }
    ));

    // GOOGLE
    passport.use(new GoogleStrategy(
      configAuth.google,
      function(token, tokenSecret, profile, done) {
        // console.log("g: ", profile.emails[0].value);
        User.findOne({email: profile.emails[0].value}, (err, user) => {
            if (user) {
                // console.log('google---> ',profile);
                return done(null, profile);
            } else {
                return done(null, false);
            }
        });
      }
    ));
}