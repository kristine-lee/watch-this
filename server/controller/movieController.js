const mongoose = require('mongoose');
const axios = require('axios');
const Movies = require('../database/movie');

module.exports = {
  searchMovies: async (req, res, next) => {
    try {
      const searchTerm = req.query.search;
      const APIKey = process.env.API_KEY;
      const response = await axios.get(`http://www.omdbapi.com/`,
        { params : {
          apiKey: APIKey,
          s: searchTerm,
          type: "movie",
        }
      })
        const searchResult = response.data;
        res.send(searchResult);
    } catch (error) {
      next(error);
    }
  },

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
    const { id, title, thumbsUp, thumbsDown } = req.body;
    const newMovie = new Movies({id, title, thumbsUp, thumbsDown});
    try {
      await newMovie.save();
      res.status(201).json(newMovie);
    } catch (error) {
      next (error);
    }
  },

  getOneMovie: async (req, res, next) => {
    const externalId = req.params.id;
    //search from mongodb first. if not found, then search external api
    try {
      const foundMovie = await Movies.findOne({externalId: externalId});
      if (!foundMovie) {
        const APIKey = process.env.API_KEY;
        try {
          const response = await axios.get(`http://www.omdbapi.com/`,
          { params : {
            apiKey: APIKey,
            i: externalId,
            type: "movie",
            plot: "short"
          }
        })
        res.json(response.data);
        } catch (error) {
          next (error);
        }
      }
      else {
        res.json(foundMovie);
      }
    } catch (error){
      next (error);
    }
  },

  likeMovie: async (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) throw new Error(`There's no movie by the id: ${id}`);
    //if this doesn't work, first find by id, save to a variable, and then write the update option like (id, {thumbsUp: variable.thumbsUp + 1})
    try {
      const likedMovie = await Movies.findByIdAndUpdate(id, {thumbsUp: this.thumbsUp + 1}, {returnOriginal: false}) //to get back the updated object;
      res.status(200).json(likedMovie);
    } catch (error) {
      next (error);
    }
  },

  dislikeMovie: async (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) throw new Error(`There's no movie by the id: ${id}`);
    //if this doesn't work, first find by id, save to a variable, and then write the update option like (id, {thumbsUp: variable.thumbsUp + 1})
    const dislikedMovie = Movies.findByIdAndUpdate(id, {thumbsDown: this.thumbsDown + 1}, {returnOriginal: false}) //to get back the updated object;
    res.status(200).json(dislikedMovie);
  }
}
