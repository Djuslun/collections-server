const collectionServise = require('../servises/collectionServise');

class CollectionController {
    async getTopCollections(req, res, next) {
        try {
            const topCollections = await collectionServise.getTopCollections();
            res.json(topCollections);
        } catch (e) {
            next(e);
        }
    }

    async getAllCollections(req, res, next) {
        try {
            const allCollections = await collectionServise.getAllCollections();
            res.json(allCollections);
        } catch (e) {
            next(e);
        }
    }

    async getMyCollections(req, res, next) {
        try {
            const myCollections = await getMyCollections(req.auth.sub);
            res.json(myCollections);
        } catch (e) {
            next(e);
        }
    }

    async getCollectionById(req, res, next) {
        try {
            const collectionId = req.params.id;
            const collection = await collectionServise.getCollectionById(collectionId);
            res.json(collection);
        } catch (e) {
            next(e);
        }
    }

    async postCollections(req, res, next) {
        try {
            const newCollectionsValues = req.body;
            const userId = req.auth.sub;
            newCollectionsValues.userId = userId;
            const newCollections =
                await collectionServise.postCollections(newCollectionsValues);
            res.json(newCollections);
        } catch (e) {
            next(e);
        }
    }

    async deleteCollection(req, res, next) {
        try {
            const collectionId = req.params.id;
            const deleteCollectionUser =
                await collectionServise.deleteCollection(collectionId);
            res.json(deleteCollectionUser);
        } catch (e) {
            next(e);
        }
    }

    async updateCollection(req, res, next) {
        try {
            const collectionId = req.params.id;
            const newCollection = req.body;

            const updateCollectionUser = await collectionServise.updateCollection(
                newCollection,
                collectionId
            );

            res.json(updateCollectionUser);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new CollectionController();
