const router = require('express').Router();
const movieController = require('../controller/movieController');

// router.route('/movies');
router.get('/', movieController.getAllMovies);
router.get('/search', movieController.searchMovies);
router.post('/', movieController.addMovie);
router.get('/:id', movieController.getOneMovie);
//or '/:id/like'
router.patch('/:id', movieController.likeMovie);
router.patch('/:id', movieController.dislikeMovie);

module.exports = router;
