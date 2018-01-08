const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UserSchema = new Schema({

    email: {
        type: String,
        trim: true,
        required: true
    },
    role: {
        type:  Number,
        required: true
    },
    companyName: {
        type:  String,
        required: true
    },
    address: {
        type:  String,
        required: true
    },
    phone: {
        type:  String,
        required: true
    },
    contactPerson: {
        type:  String,
        required: true
    }

});

let User = mongoose.model('User', UserSchema);

module.exports = User;