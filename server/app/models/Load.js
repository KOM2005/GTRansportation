const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let LoadSchema = new Schema({

    datePickUp: {
        type: Date,
        default: Date.now
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
    },
    idStatus: {
        type: Schema.Types.ObjectId,
        ref: "Status"
    },
    idBroker: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    idDispatch: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

});

let Load = mongoose.model('Load', LoadSchema);

module.exports = Load;