const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let StatusSchema = new Schema({

    statusName: {
        type: String,
        trim: true,
        required: true
    }
});

let Status = mongoose.model('Status', StatusSchema);

module.exports = Status;