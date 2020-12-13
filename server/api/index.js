const router = require('express').Router();
const movieController = require('../controller/movieController');

// router.route('/movies');
router.get('/movies', movieController.getAllMovies);
router.get('/search', movieController.searchMovies);
router.post('/movies', movieController.addMovie);
router.get('/movies/:id', movieController.getOneMovie);
//or '/:id/like'
router.patch('/movies/:id', movieController.likeMovie);
router.patch('/movies/:id', movieController.dislikeMovie);

module.exports = router;
