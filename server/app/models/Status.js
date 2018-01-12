// const fs = require('fs');
const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let StatusSchema = new Schema({

    statusName: {
        type: String,
        trim: true,
        required: true
    }
});

StatusSchema.statics.initStatus = (Status) => {

    const _statuses = [
        { "statusName": "pickedUp" },
        { "statusName": "canceled" },
        { "statusName": "delivered" },
        { "statusName": "available" },
        { "statusName": "pending" }
    ];

    Status.remove({}, (err) => {
        _statuses.forEach(status => {
            Status.create(status)
        })
    })
}

let Status = mongoose.model('Status', StatusSchema);

module.exports = Status;