var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlbumSchema = new Schema({
  artistName: String,
  albumName: String,
  year: Number,
  coverUrl: String
});

var Album = mongoose.model("Album", AlbumSchema);

module.exports = Album;
