var mongoose = require('mongoose');


var SongSchema = new mongoose.Schema({
    id: Number,
    name: String,
    bpm: Number,
    timeSig: String,
    keyRoot: String,
    keySign: String,
    keyMaj: String,
    parts: Array,
    currentSet: Boolean
});

module.exports = mongoose.model('Song', SongSchema);
