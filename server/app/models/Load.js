const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let LoadSchema = new Schema({

    datePickUp: {
        type: String,
        trim: true,
        required: true
    },
    timePickUp: {
        type: String,
        trim: true,
        required: true
    },
    loadType: {
        type: Schema.Types.ObjectId,
        ref: "LoadType"
    },
    origin: {
        type:  String,
        required: true
    },
    destination: {
        type:  String,
        required: true
    },
    weight: {
        type:  Number,
        required: true
    },
    price: {
        type:  Number,
        required: true
    },
    comment: {
        type:  String,
        required: false
    }

});

let Load = mongoose.model('User', LoadSchema);

module.exports = Load;