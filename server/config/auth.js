module.exports = {
    
        'facebook' : {
            'clientID'      : '464414910621154', 
            'clientSecret'  : '22cfdadd7eeb8122954cd0934fea7fb3', 
            'callbackURL'   : `http://localhost:8080/auth/facebook/done`,
            // 'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
            'profileFields': ['id', 'displayName', 'emails', 'name']
        },
    
        'google' : {
            'clientID'      : '131009126163-vff7pkdrdmojft7cbdvcced4e5ohk0t4.apps.googleusercontent.com',
            'clientSecret'  : 'uPaS9vi5vXmpjB8YwiVlCsDo',
            'callbackURL'   : 'http://localhost:8080/auth/google/callback'
        }
    
};

// const FACEBOOK_APP_ID = '387373981675792';
// const FACEBOOK_APP_SECRET = '015fd20849978192720467d47da5f8f4';