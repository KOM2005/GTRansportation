const User = require('./models/User');
const Status = require('./models/Status');
const LoadType = require('./models/LoadType');
const Load = require('./models/Load');

module.exports = (app, passport) => {
    
    // registration new user
    app.post('/api/createUser', (req, res) => {
        // console.log(req.body);
        let newUser = new User();
        newUser.email = req.body.email;
        newUser.role = req.body.role;
        newUser.companyName = req.body.companyName;
        newUser.address = req.body.address;
        newUser.phone = req.body.phone;
        newUser.contactPerson = req.body.contactPerson;
        newUser.save()
          .then(() => {
              res.sendStatus(204);
          })
          .catch((err) => {
              console.log(err);
              res.status(500).send(err.message ? err.message : 'Internal server blowup');
          });
        
    });

    // create new status
    app.post('/api/createStatus', (req, res) => {
        let newStatus = new Status();
        newStatus.statusName = req.body.statusName;
        newStatus.save()
          .then(() => {
              res.sendStatus(204);
          })
          .catch((err) => {
              console.log(err);
              res.status(500).send(err.message ? err.message : 'Internal server blowup');
          });
        
    });

    // get all statuses
    app.get('/api/statuses', (req, res) => {
        // console.log('req.params:',req.params);
        Status.find({})
        .then( (statuses) => {
            // console.log('statuses:', statuses);
            res.json( statuses);
        })
        .catch((err) => {
			console.log(err);
            res.status(500).send(err.message ? err.message : 'Internal server blowup');
        });
    });

    // create load type
    app.post('/api/createLoadType', (req, res) => {
        let newLoadType = new LoadType();
        newLoadType.typeName = req.body.typeName;
        newLoadType.save()
          .then(() => {
              res.sendStatus(204);
          })
          .catch((err) => {
              console.log(err);
              res.status(500).send(err.message ? err.message : 'Internal server blowup');
          });
        
    });
    // get all load types
    app.get('/api/loadTypes', (req, res) => {
        // console.log('req.params:',req.params);
        LoadType.find({})
        .then( (statuses) => {
            // console.log('statuses:', statuses);
            res.json( statuses);
        })
        .catch((err) => {
			console.log(err);
            res.status(500).send(err.message ? err.message : 'Internal server blowup');
        });
    });
    // app.get('/api/users', (req, res) => {
    //     User.find({}, (err, users) => {
    //         if (err) {
    //             res.sendStatus(500);
    //         }
    //         res.send(users);
    //     });
    // });

    app.get('/api/users/:email', (req, res) => {
        // console.log('req.params:',req.params);
        User.findOne({email: req.params.email})
        .then( (user) => {
            res.json( user);
        })
        .catch((err) => {
			console.log(err);
            res.status(500).send(err.message ? err.message : 'Internal server blowup');
        });
    });

    app.get('/api/users/:id', (req, res)=>{
        console.log(req.params);
        User.findById({_id: req.params.id})
        .then( (user) => {
            res.json( user);
        })
        .catch((err) => {
			console.log(err);
            res.status(500).send(err.message ? err.message : 'Internal server blowup');
        });
    });
    

    // add new load
    app.post('/api/createLoad', (req, res) => {
        console.log("newLoad:", req.body);
        let newLoad = new Load();
        newLoad.datePickUp = req.body.datePickUp;
        newLoad.timePickUp = req.body.timePickUp;
        newLoad.loadType = req.body.loadType;
        newLoad.origin = req.body.origin;
        newLoad.destination = req.body.destination;
        newLoad.weight = req.body.weight;
        newLoad.price = req.body.price;
        newLoad.comment = req.body.comment;
        newLoad.idStatus = req.body.idStatus;
        newLoad.idBroker = req.body.idBroker;
        newLoad.idDispatch = null;

        newLoad.save()
          .then(() => {
              res.sendStatus(204);
          })
          .catch((err) => {
              console.log(err);
              res.status(500).send(err.message ? err.message : 'Internal server blowup');
          });        
    }); 

    // get all loads
    app.get('/api/loads', (req, res) => {
        // console.log('req.params:',req.params);
        Load.find({}).populate("idStatus").populate("loadType").populate("idDispatch")
        .then( loads => {
            res.json(loads);
        })
        .catch((err) => {
			// console.log(err);
            res.status(500).send(err.message ? err.message : 'Internal server blowup');
        });
    });

    // app.get('/api/login', (req, res) => {
    
    // });
    
    
    // app.get('/logout', (req, res) => {
    //     req.logout();
    //     res.redirect('/');
    // });
    

    
    // app.get('/private', isLogged(), (req, res) => {
    //     let body = '<h1>Private page</h1>';
    //     body += `<p>You logged as ${req.user.displayName}</p>`;
    //     body += `<a href="/logout">Log out</a>`;
    //     res.send(body);
    // });
    
    
    // function isLogged(){
    //     // console.log('---isLogged---');
    //     return function(req, res, next){
    //         if (req.isAuthenticated()) {
    //             return next();
    //          } else {
    //              res.sendStatus(401);
    //          } 
    //     };
    // }
}