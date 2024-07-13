const mongoose = require('mongoose');

const DiscSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    speed: {
        type: Number,
        required: true,
    },
    glide: {
        type: Number,
        required: true,
    },
    turn: {
        type: Number,
        required: true,
    },
    fade: {
        type: Number,
        required: true,
    },
    });

    module.exports = mongoose.model('Disc', DiscSchema);