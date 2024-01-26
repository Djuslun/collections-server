const express = require('express');
const router = express.Router();
const { checkJwt } = require('../auth0/jwtChecker');
const itemController = require('../controllers/itemController');
const authMiddleWare = require('../middlewares/auth-middleware');

router.post('/new', checkJwt, authMiddleWare, itemController.createItem);
router.get('/recent', itemController.getRecentItems);
router.get('/:id', itemController.getItemById);
router.get('/collection/:id', itemController.getItemsInCollection);
router.get('/tag/:id', itemController.getItemsByTag);
router.delete('/:id', checkJwt, authMiddleWare, itemController.deleteItem);
router.put('/:id', checkJwt, authMiddleWare, itemController.updateItem);
router.patch('/:id', checkJwt, authMiddleWare, itemController.updateItemLikes);

module.exports = router;
