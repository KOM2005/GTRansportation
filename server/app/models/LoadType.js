const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let LoadTypeSchema = new Schema({

    typeName: {
        type: String,
        trim: true,
        required: true
    }

});

let LoadType = mongoose.model('LoadType', LoadTypeSchema);

module.exports = LoadType;