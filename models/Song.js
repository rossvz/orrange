var mongoose = require('mongoose');


var SongSchema = new mongoose.Schema({
    id: Number,
    name: String,
    bpm: Number,
    timeSig: String,
    key: String,
    parts: Array,
    currentSet: Boolean
});

module.exports = mongoose.model('Song', SongSchema);
