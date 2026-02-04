const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  genre: {
  type: String,
  enum: ['Pop', 'Rock', 'Hip-Hop', 'Electronic'],
  required: true
 },

  bio: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Artist', artistSchema);
