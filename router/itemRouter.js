const express = require('express');
const router = express.Router();
const { checkJwt } = require('../auth0/jwtChecker');
const itemController = require('../servises/itemService');

router.post('/new', checkJwt, itemController.createItem);
router.get('/recent', itemController.getRecentItems);
router.get('/:id', itemController.getItemById);
router.get('/collection/:id', itemController.getItemsInCollection);
router.delete('/:id', checkJwt, itemController.deleteItem);
router.put('/:id', checkJwt, itemController.updateItem);
router.patch('/:id', checkJwt, itemController.updateItemLikes);

module.exports = router;
