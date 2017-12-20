const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const Post = require('./models/Post'); //reference to out DB in Post.js file
const PORT = 8080;
const app = express();
app.use(bodyParser.json());

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
app.listen(8080, () => console.log(`Example app listening on port ${PORT}`));