var mongoose = require('mongoose');


var SongSchema = new mongoose.Schema({
    id: Number,
    name: String,
    bpm: Number,
    timeSig: String,
    key: String,
    parts: Array
});

module.exports = mongoose.model('Song', SongSchema);
