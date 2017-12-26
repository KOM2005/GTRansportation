const User = require('./models/User');

module.exports = (app, passport) => {

    // FACEBOOK routes
    app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['public_profile', 'email'] } ));
    
    app.get('/auth/facebook/done', passport.authenticate('facebook',{
        successRedirect: '/private',
        failureRedirect: '/errorAuth'
    
    }));

    // GOOGLE routes
    app.get('/auth/google', 
        passport.authenticate('google', 
        { scope:  ['https://www.googleapis.com/auth/plus.login', 
                    'https://www.googleapis.com/auth/plus.profile.emails.read'
                ]
         }
    )); 

    app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/errorAuth' }),
        (req, res) => {
            res.redirect('/private');
    });






    // App routes
    app.get('/errorAuth', (req, res) => {
        let body = '<h1>Error authentification!!!</h1>';
        body += '<a href="/">Go HOME</a>';
        res.send(body);        
    });

    app.get('/', (req, res) => {
        // console.log('---------',req.user);
        let body = '<h1>Home page</h1>';
        if (req.isAuthenticated()){
            console.log(req);
            body += `<p>You logged as ${req.user.displayName}</p>`;
            body += `<a href="/logout">Log out</a>`;
        } else {
            body += '<a href="/auth/facebook">Click to login via FACEBOOK</a>';
            body += '<br>';
            body += '<a href="/auth/google">Click to login via GOOGLE</a>';
        }
        res.send(body);
    });
    
    // registration new user
    app.post('/api/createUser', (req, res) => {
        // console.log(req.body);
        let newUser = new User();
        newUser.email = req.body.email;
        newUser.role = req.body.role;
        newUser.save()
          .then(() => {
              res.sendStatus(204);
          })
          .catch((err) => {
              console.log(err);
              res.sendStatus(500);
          });
        
    });

    app.get('/api/users', (req, res) => {
        User.find({}, (err, users) => {
            if (err) {
                res.sendStatus(500);
            }
            res.send(users);
        });
    });
    
    
    app.get('/api/login', (req, res) => {
    
    });
    
    
    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
    

    
    app.get('/private', isLogged(), (req, res) => {
        let body = '<h1>Private page</h1>';
        body += `<p>You logged as ${req.user.displayName}</p>`;
        body += `<a href="/logout">Log out</a>`;
        res.send(body);
    });
    
    
    function isLogged(){
        // console.log('---isLogged---');
        return function(req, res, next){
            if (req.isAuthenticated()) {
                return next();
             } else {
                 res.sendStatus(401);
             } 
        };
    }
}