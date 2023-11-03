const mongoose = require('mongoose');

const Samfree = mongoose.model('Samfree', new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
}));

module.exports = Samfree; 