const itemServise = require('../servises/itemService');

class ItemController {
    async createItem(req, res, next) {
        try {
            const userId = req.auth.sub;
            const newItems = req.body;
            newItems.userId = userId;
            const newItemUser = await itemServise.createItem(newItems);
            res.json(newItemUser);
        } catch (e) {
            next(e);
        }
    }

    async getItemsInCollection(req, res, next) {
        try {
            const itemsFromCollection = await itemServise.getItemsInCollection(
                req.params.id
            );
            res.json(itemsFromCollection);
        } catch (e) {
            next(e);
        }
    }

    async getItemsByTag(req, res, next) {
        try {
            const itemsByTag = await itemServise.getItemsByTag(req.params.id);
            res.json(itemsByTag);
        } catch (e) {
            next(e);
        }
    }

    async getRecentItems(req, res, next) {
        try {
            const recentItems = await itemServise.getRecentItems();
            res.json(recentItems);
        } catch (e) {
            next(e);
        }
    }

    async getItemById(req, res, next) {
        try {
            const item = await itemServise.getItemById(req.params.id);
            res.json(item);
        } catch (e) {
            next(e);
        }
    }

    async deleteItem(req, res, next) {
        try {
            const item = await itemServise.deleteItem(req.params.id);
            res.json(item);
        } catch (e) {
            next(e);
        }
    }

    async updateItem(req, res, next) {
        try {
            const itemId = req.params.id;
            const newItem = req.body;

            const updatedItem = await itemServise.updateItem(newItem, itemId);
            res.json(updatedItem);
        } catch (e) {
            next(e);
        }
    }

    async updateItemLikes(req, res, next) {
        try {
            const itemId = req.params.id;
            const newItemLikesArray = req.body;
            const updatedItem = await itemServise.updateItemLikes(
                newItemLikesArray,
                itemId
            );
            res.json(updatedItem);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new ItemController();
