const mongoose = require('mongoose');

const BagSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    discs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Disc',
    }],
});

module.exports = mongoose.model('Bag', BagSchema);