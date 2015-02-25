var mongoose = require('mongoose');

var SongSchema = new mongoose.Schema({
  name: String,
  bpm: Number,
  timeSig: String,
  key: String,
  structure: Array
});

module.exports = mongoose.model('Song', SongSchema);
