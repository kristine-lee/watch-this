const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  externalId: String,
  title: String,
  director: String,
  thumbsUp: {
    type: Number,
    min: [1, "need at least one thumbs up!"]
  },
  thumbsDown: {
    type: Number,
    min: 0,
    default: 0
  }
});


const Movie = mongoose.model('movie', movieSchema);
module.exports = Movie;
