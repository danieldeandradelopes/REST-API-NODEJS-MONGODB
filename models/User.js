const mongoose = require('mongoose');

const schemaUser = new mongoose.Schema({
    name: String,
    email: String,
    statusUser: {
        type: Boolean,
        default: false,
    },
    dateCreate: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('User', schemaUser);