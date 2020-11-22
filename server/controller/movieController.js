const mongoose = require('mongoose');
const Movies = require('../database/movie')

module.exports = {
  getAllMovies: async (req, res, next) => {
    try {
      const allMovies = await Movies.find();
      if (!allMovies) throw Error('No movies have been liked yet!');
      res.status(200).json(allMovies);
    } catch (error) {
      next (error);
    }
  },

  addMovie: async (req, res, next) => {
    const { title, thumbsUp, thumbsDown } = req.body;
    const newMovie = new Movies({title, thumbsUp, thumbsDown});
    try {
      await newMovie.save();
      res.status(201).json(newMovie);
    } catch (error) {
      next (error);
    }
  },

  getOneMovie: async (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) throw new Error(`There's no movie by the id: ${id}`);
    try {
      const foundMovie = Movies.findById(id);
      res.status(200).json(foundMovie)
    } catch (error) {
      next (error);
    }
  },

  likeMovie: async (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) throw new Error(`There's no movie by the id: ${id}`);
    //if this doesn't work, first find by id, save to a variable, and then write the update option like (id, {thumbsUp: variable.thumbsUp + 1})
    const likedMovie = Movies.findByIdAndUpdate(id, {thumbsUp: this.thumbsUp + 1}, {returnOriginal: false}) //to get back the updated object;
    res.status(200).json(likedMovie);
  },

  dislikeMovie: async (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) throw new Error(`There's no movie by the id: ${id}`);
    //if this doesn't work, first find by id, save to a variable, and then write the update option like (id, {thumbsUp: variable.thumbsUp + 1})
    const dislikedMovie = Movies.findByIdAndUpdate(id, {thumbsDown: this.thumbsDown + 1}, {returnOriginal: false}) //to get back the updated object;
    res.status(200).json(dislikedMovie);
  }
}
