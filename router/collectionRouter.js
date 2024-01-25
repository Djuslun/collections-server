const Router = require('express');
const CollectionController = require('../controllers/collectionController');
const router = new Router();
const { checkJwt } = require('../auth0/jwtChecker');
const authMiddleWare = require('../middlewares/auth-middleware');

router.get('/', CollectionController.getAllCollections);
router.get('/my', checkJwt, authMiddleWare, CollectionController.getMyCollections);
router.get('/top', CollectionController.getTopCollections);
router.post('/my', checkJwt, authMiddleWare, CollectionController.postCollections);
router.delete('/:id', checkJwt, authMiddleWare, CollectionController.deleteCollection);
router.get('/:id', CollectionController.getCollectionById);
router.put('/:id', checkJwt, authMiddleWare, CollectionController.updateCollection);

module.exports = router;
