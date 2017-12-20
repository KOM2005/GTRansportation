const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let PostSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },

    body: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    }
});

let Post = mongoose.model('Post', PostSchema);

module.exports = Post;