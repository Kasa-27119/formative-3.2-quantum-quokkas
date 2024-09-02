const mongoose = require('mongoose');

const Schema = mongoose.Schema

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: null
    },
    author: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Project', projectSchema);