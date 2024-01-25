const express = require('express');
const router = express.Router();
const { checkJwt } = require('../auth0/jwtChecker');
const tagController = require('../controllers/tagController');
const authMiddleWare = require('../middlewares/auth-middleware');

router.post('/new', checkJwt, authMiddleWare, tagController.createTag);
router.get('/', tagController.getAllTags);
router.get('/:id', tagController.getTagById);
router.get('/item', tagController.getTagByIdsArray);
router.delete('/:id', checkJwt, tagController.deleteTag);

module.exports = router;
