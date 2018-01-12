const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let LoadTypeSchema = new Schema({

    typeName: {
        type: String,
        trim: true,
        required: true
    }

});

LoadTypeSchema.statics.initLoadType = (LoadType) => {
    
        const _loadTypes = [
            { "typeName": "DryVan" },
            { "typeName": "FlatBad" },
            { "typeName": "Reefer" }
        ];
    
        LoadType.remove({}, (err) => {
            _loadTypes.forEach(loadType => {
                LoadType.create(loadType)
            })
        })
    }

let LoadType = mongoose.model('LoadType', LoadTypeSchema);

module.exports = LoadType;