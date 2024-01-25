const express = require('express');
const router = express.Router();
const { checkJwt } = require('../auth0/jwtChecker');
const commentController = require('../controllers/commentController');
const authMiddleWare = require('../middlewares/auth-middleware');

router.get('/:id', commentController.getCommentsByItemId);
router.post('/', checkJwt, authMiddleWare, commentController.postNewComment);
router.delete('/:id', checkJwt, authMiddleWare, commentController.deleteComment);

module.exports = router;
