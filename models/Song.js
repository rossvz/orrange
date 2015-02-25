var mongoose = require('mongoose');

var SongSchema = new mongoose.Schema({
  name: String,
  bpm: Number,
  timeSig: String,
  key: String,
  structure: [{ section : String, progression: String, note: String }]
});

module.exports = mongoose.model('Song', SongSchema);
