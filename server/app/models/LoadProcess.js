const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let LoadProcessSchema = new Schema({

    loadType: {
        type: Schema.Types.ObjectId,
        ref: "LoadType"
    },
    status: {
        type: Schema.Types.ObjectId,
        ref: "Status"
    },
    Broker: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    Dispatch: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

});

let LoadProcess = mongoose.model('User', LoadProcessSchema);

module.exports = LoadProcess;