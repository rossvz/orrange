var mongoose = require('mongoose');

//var StructureSchema = new mongoose.Schema({
//    section : String,
//    progression: String,
//    note: String
//});
var SongSchema = new mongoose.Schema({
    id: Number,
    name: String,
    bpm: Number,
    timeSig: String,
    key: String,
    structure: Object,
    parts: Array
});

module.exports = mongoose.model('Song', SongSchema);
