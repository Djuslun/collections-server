const Item = require('../models/Item');
const Collection = require('../models/Collection');
const { synchronizeArrays } = require('../utils/updateCollectionFields');

class ItemService {
    async createItem(item) {
        await Collection.updateOne(
            { _id: item.collectionId },
            { $inc: { itemCount: 1 } }
        );

        const newItem = new Item(item);
        const response = await newItem.save();
        return response;
    }

    async getItemsInCollection(collectionId, sort = -1) {
        const myCollection = await Item.find({ collectionId: collectionId }).sort({
            createdAt: sort,
        });

        return myCollection;
    }

    async getRecentItems() {
        const items = await Item.find().sort({ createdAt: -1 }).limit(3);
        return items;
    }

    async getItemById(id) {
        const item = await Item.findById(`${id}`);
        return item;
    }

    async deleteItem(id) {
        const response = await Item.findByIdAndDelete(id);

        if (response) {
            await Collection.updateOne(
                { _id: response.collectionId },
                { $inc: { itemCount: -1 } }
            );
        }

        return response;
    }

    async updateItem(item, id) {
        await Item.findOneAndUpdate({ _id: id }, item);
        const updatedItem = await Item.findById(id);
        return updatedItem;
    }

    async updateItemLikes(likesArray, id) {
        const newLikesArray = [...new Set(likesArray)];
        const updatedItem = await Item.findByIdAndUpdate(
            id,
            { $set: { likes: newLikesArray } },
            { new: true }
        );

        return updatedItem;
    }

    async deleteItemsByCollectionId(collectionId) {
        const itemsInCollection = await Item.find({ collectionId: collectionId });
        itemsInCollection.forEach(async (item) => await this.deleteItem(item._id));
    }

    async updateItemOnCollectionUpdate(collectionId, title, collectionCustomFields) {
        const itemsInCollection = await Item.find({ collectionId: collectionId });
        await Item.updateMany({ collectionId }, { $set: { collectionTitle: title } });

        itemsInCollection.forEach(async (item) => {
            const customField = synchronizeArrays(collectionCustomFields, item.customFields);
            await Item.findByIdAndUpdate(
                { _id: item._id },
                { $set: { customFields: customField } }
            );
        });
    }
}

module.exports = new ItemService();
