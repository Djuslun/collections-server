const express = require('express');
const router = express.Router();
const { checkJwt } = require('../auth0/jwtChecker');
const commentController = require('../controllers/commentController');

router.get('/:id', commentController.getCommentsByItemId);
router.post('/', checkJwt, commentController.postNewComment);
router.delete('/:id', checkJwt, commentController.deleteComment);

module.exports = router;
