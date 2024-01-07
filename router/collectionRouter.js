const Router = require('express');
const CollectionController = require('../controllers/collectionController');
const router = new Router();
const { checkJwt } = require('../auth0/jwtCheker');

router.get('/', CollectionController.getAllCollections);
router.get('/my', checkJwt, CollectionController.getMyCollections);
router.get('/top', CollectionController.getTopCollections);
router.post('/my', checkJwt, CollectionController.postCollections);
router.delete('/:id', checkJwt, CollectionController.deleteCollection);
router.get('/:id', CollectionController.getCollectionById);
router.put('/:id', checkJwt, CollectionController.updateCollection);

module.exports = router;
