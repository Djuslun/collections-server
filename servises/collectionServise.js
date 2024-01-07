const Collection = require('../models/Collection');

class CollectionServise {
    async getTopCollections() {
        const collection = await Collection.find().sort({ itemCount: -1 }).limit(4);
        return collection;
    }

    async getAllCollections() {
        const collections = await Collection.find().sort({ createdAt: -1 });
        return collections;
    }

    async getMyCollections(userId) {
        const myCollection = await Collection.find({ userId: userId }).sort({
            createdAt: -1,
        });
        return myCollection;
    }

    async getCollectionById(collectionId) {
        const collection = await Collection.findById(collectionId);
        return collection;
    }

    async postCollections(item) {
        const newCollection = new Collection(item);
        await newCollection.save();
        return newCollection;
    }

    async deleteCollection(id) {
        const response = await Collection.findByIdAndDelete(id);
        return response;
    }

    async updateCollection(collection, id) {
        await Collection.findOneAndUpdate({ _id: id }, collection);
        const newCollection = await Collection.findById(id);
        return newCollection;
    }
}

module.exports = new CollectionServise();
